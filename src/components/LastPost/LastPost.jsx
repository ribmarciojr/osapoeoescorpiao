// import { useHandleTime } from "../../Hooks/useHandleTime"
// import { useEffect, useState } from "react"
// /* eslint-disable  */ 

// //! QUEBRADO

// export const LastPost = ({id}) => {
//     const singlePost = 
//     const [post, setPost] = useState()

//     useEffect(() => {
//       fetch(singlePost)
//         .then(json => json.json())
//         .then(object => setPost(object))
//     }, [singlePost])


//     return (
//         <div>
//             {!!post && <main className='last-post'>
//                 <h2>Última atualização:</h2>
//                 <h2 className='last-post-title'>{post.title}</h2>
      
//                 <small>{post.author.displayName + '~ ' + useHandleTime(post.published)}</small>
//             <div className="headline" dangerouslySetInnerHTML={{__html: post.content}}></div>
//         </main>}
//         <div>Hellos</div>
//       </div>
//     )
// }