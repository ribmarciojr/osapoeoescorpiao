import { useEffect, useState } from "react"
import { Header } from "../Header/Header"
import "./style.css"
import { Link } from "react-router-dom"
import { RecentPost } from "../RecentPost"
import { Footer } from "../Footer/Footer"

export const Explore = () => {
    const postsPage = `https://www.googleapis.com/blogger/v3/blogs/${process.env.REACT_APP_BLOG_ID}/posts?key=${process.env.REACT_APP_API_KEY}&maxResults=50`
    const [posts, setPosts] = useState()
    const [filteredPosts, setFilteredPosts] = useState()

    useEffect(() => {
        fetch(postsPage)
        .then(json => json.json())
        .then(object => setPosts(handlePost(object)))
    }, [postsPage])

    function handlePost(posts){
        const rawPost = posts.items.sort((a, b) => {
            const titleA = a.title.toUpperCase().trim()
            const titleB = b.title.toUpperCase().trim()
            
            if(titleA > titleB){
                return 1
            }
    
            if(titleA < titleB){
                return -1
            }

            return 0
        })

        return rawPost
    }

    function handleFilter(e){
        const search = document.querySelector("#filter").value || e.target.value
        const lambdaFilter = post => post.title.toLowerCase().includes(search.toLowerCase())
        
        setFilteredPosts(posts.filter(lambdaFilter))
    }

    return (
        <>
        <Header />
            <article className="explore-article">
                <main className="explore-main">
                    <h1>Acervo Completo:</h1>
                    
                    <input placeholder="Filtre por título" type="search" id="filter" onKeyDown={e => {
                        if(e.key === "Enter"){
                            handleFilter(e)
                        }

                    }} onChange={e => {
                        if(e.target.value === ""){
                            setFilteredPosts(null)
                        }
                    }}/>

                    <button onClick={e => handleFilter(e)}>Buscar</button>
                    
                    <section className="all-collection">
                        {(!!posts && !filteredPosts && posts.map(post => {
                                return <Link to={`/explore/${post.id}`} onClick={() => {window.scrollTo(0,0)}}><RecentPost content={post}/></Link>
                        })) || (!!posts && filteredPosts.map(post => {
                            return <Link to={`/explore/${post.id}`} onClick={() => {window.scrollTo(0,0)}}><RecentPost content={post}/></Link>
                        }))}             
                    </section>
                </main>
            </article>
        <Footer />
        </>
    )
}
