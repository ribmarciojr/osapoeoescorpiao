import { Link } from "react-router-dom" 
import { RecentPost } from "../RecentPost"
import { useHandleTime } from "../../Hooks/useHandleTime"
import { useState, useEffect } from "react"
import { Balancer } from "react-wrap-balancer"
import { Skeleton } from "@mui/material"
/* eslint-disable  */ 

export const Main = ({id}) => {
    const [main, setMain] = useState(0)
    const [selected, setSelected] = useState(0)
    const page = `https://www.googleapis.com/blogger/v3/blogs/${process.env.REACT_APP_BLOG_ID}/posts?key=${process.env.REACT_APP_API_KEY}&maxResults=10`
    //const thisPage = `https://www.googleapis.com/blogger/v3/blogs/${process.env.REACT_APP_BLOG_ID}/posts/${id}?key=${process.env.REACT_APP_API_KEY}`
    const selectedWork = `https://www.googleapis.com/blogger/v3/blogs/${process.env.REACT_APP_BLOG_ID}/posts/${id}?key=${process.env.REACT_APP_API_KEY}`
    const template = [0,1,2,3,4,5,6,7,8,9,10]

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
          
          {(!!main && !id) &&
          <main className='last-post'>
            <h2><Balancer>Última atualização:</Balancer></h2>
            <h2 className='last-post-title'>{main.items[0].title}</h2>
      
            <small>{main.items[0].author.displayName + '~ ' + useHandleTime(main.items[0].published)}</small>
            <div className="headline" dangerouslySetInnerHTML={{__html: main.items[0].content}}></div>
          </main> }
          {/* : <Skeleton variant="rounded" width={1000} height={1000} /> */}

          {!!selected &&
          <main className='last-post'>
            <h2><Balancer>Última atualização:</Balancer></h2>
            <h2 className='last-post-title'>{selected.title}</h2>
      
            <small className="time-and-author">{selected.author.displayName + '~ ' + useHandleTime(selected.published)}</small>
            <div className="headline" dangerouslySetInnerHTML={{__html: selected.content}}></div>
          </main>} 
          {/* : <Skeleton variant="rounded" width={1000} height={1000} /> */}
        
    <aside>
      <section className='aside-content'>
        <h2><Balancer>Textos passados:</Balancer></h2>          
        <div className="every-aside">
          {!!main ? main.items.map(post =>  {
            if(post.id != id){
              return <Link to={`/explore/${post.id}`} onClick={() => {window.scrollTo(0,0)}}><RecentPost content={post}/></Link>
            }}) : template.map(() => {
              return <Skeleton variant="rounded" width={210} height={60} />
            })}
            
          </div>
      </section>
    </aside>
    </section> 
  </article>
  )
}

