import { Link } from "react-router-dom" 
import { RecentPost } from "../RecentPost"
import { useHandleTime } from "../../Hooks/useHandleTime"
import { useState, useEffect } from "react"
import { LastPost } from "../LastPost/LastPost"
import { Balancer } from "react-wrap-balancer"
/* eslint-disable  */ 

export const Main = ({id}) => {
    const [main, setMain] = useState(0)
    const [selected, setSelected] = useState(0)
    const page = `https://www.googleapis.com/blogger/v3/blogs/${process.env.REACT_APP_BLOG_ID}/posts?key=${process.env.REACT_APP_API_KEY}`
    //const thisPage = `https://www.googleapis.com/blogger/v3/blogs/${process.env.REACT_APP_BLOG_ID}/posts/${id}?key=${process.env.REACT_APP_API_KEY}`
    const selectedWork = `https://www.googleapis.com/blogger/v3/blogs/4274296287506169204/posts/${id}?key=AIzaSyChmdFo0WTCv4q8NiWN7uEREMVb3OC9WIM`

    useEffect(() => {
      if(!!id){
        fetch(selectedWork)
        .then(json => json.json())
        .then(object => setSelected(object))
        fetch(page)
        .then(json => json.json())
        .then(object => setMain(object))
      } else {
        fetch(page)
        .then(json => json.json())
        .then(object => setMain(object))
      }
      
    }, [page, selectedWork])

    return (
    <article className='content-article'>
        <section className="content-section">
          {!!main && !id && 
          <main className='last-post'>
            <h2><Balancer>Última atualização:</Balancer></h2>
            <h2 className='last-post-title'>{main.items[0].title}</h2>
      
            <small>{main.items[0].author.displayName + '~ ' + useHandleTime(main.items[0].published)}</small>
            <div className="headline" dangerouslySetInnerHTML={{__html: main.items[0].content}}></div>
          </main>}
          {!!selected && 
          <main className='last-post'>
            <h2>Última atualização:</h2>
            <h2 className='last-post-title'>{selected.title}</h2>
      
            <small>{selected.author.displayName + '~ ' + useHandleTime(selected.published)}</small>
            <div className="headline" dangerouslySetInnerHTML={{__html: selected.content}}></div>
          </main>}
    <aside>
      <section className='aside-content'>
        <h2><Balancer>Textos passados:</Balancer></h2>          
        <div className="every-aside">{!!main ? main.items.map(post =>  {
          if(post.id != id){
            return <Link to={`/explore/${post.id}`} onClick={() => {window.scrollTo(0,0)}}><RecentPost content={post}/></Link>
          }  
        }) : <h1 style={{color: 'white', margin: 'auto'}}>Loading...</h1>}</div>
      </section>
    </aside>
    </section> 
  </article>
  )
}

