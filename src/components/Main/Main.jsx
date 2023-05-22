import { Link } from "react-router-dom" 
import { RecentPost } from "../RecentPost"
import { useHandleTime } from "../../Hooks/useHandleTime"
import { useState, useEffect } from "react"
import { LastPost } from "../LastPost/LastPost"
/* eslint-disable  */ 

export const Main = ({id}) => {
    const [main, setMain] = useState(0)
    const page = `https://www.googleapis.com/blogger/v3/blogs/${process.env.REACT_APP_BLOG_ID}/posts?key=${process.env.REACT_APP_API_KEY}`
    //const thisPage = `https://www.googleapis.com/blogger/v3/blogs/${process.env.REACT_APP_BLOG_ID}/posts/${id}?key=${process.env.REACT_APP_API_KEY}`
    const singlePost = `https://www.googleapis.com/blogger/v3/blogs/4274296287506169204/posts/4409873146803179045?key=AIzaSyChmdFo0WTCv4q8NiWN7uEREMVb3OC9WIM`

    useEffect(() => {
      fetch(page)
        .then(json => json.json())
        .then(object => setMain(object))
    }, [page])

    return (
    <article className='content-article'>
        <section className="content-section">
        {!!main && <main className='last-post'>
      <h2>Última atualização:</h2>
      <h2 className='last-post-title'>{main.items[0].title}</h2>
      
      <small>{main.items[0].author.displayName + '~ ' + useHandleTime(main.items[0].published)}</small>
       <div className="headline" dangerouslySetInnerHTML={{__html: main.items[0].content}}></div>
      </main>}

    <aside>
      <section className='aside-content'>
        <h2>Textos passados:</h2>          
        {!!main && main.items.map(post => <Link to={`/explore/${post.id}`}><RecentPost content={post}/></Link>)}
      </section>
    </aside>
    </section> 
  </article>
  )
}

