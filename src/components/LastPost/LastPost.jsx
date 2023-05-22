import { useHandleTime } from "../../Hooks/useHandleTime"
import { useEffect, useState } from "react"
/* eslint-disable  */ 

//! QUEBRADO

export const LastPost = ({id}) => {
    const singlePost = `https://www.googleapis.com/blogger/v3/blogs/4274296287506169204/posts/4409873146803179045?key=AIzaSyChmdFo0WTCv4q8NiWN7uEREMVb3OC9WIM`
    const [post, setPost] = useState()

    useEffect(() => {
      fetch(singlePost)
        .then(json => json.json())
        .then(object => setPost(object))
    }, [singlePost])


    return (
        <div>
            {!!post && <main className='last-post'>
                <h2>Última atualização:</h2>
                <h2 className='last-post-title'>{post.title}</h2>
      
                <small>{post.author.displayName + '~ ' + useHandleTime(post.published)}</small>
            <div className="headline" dangerouslySetInnerHTML={{__html: post.content}}></div>
        </main>}
        <div>Hellos</div>
      </div>
    )
}