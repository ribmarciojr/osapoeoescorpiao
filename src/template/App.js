import './global-styles.css';
import { useEffect, useState, Image } from 'react';
import { useImage } from 'react-image'

//todo Map of recent post
//todo Refactor CSS
//todo call Letterboxd API
//todo main page text format 



export const App = () => {
  //const url = `https://www.googleapis.com/blogger/v3/blogs/${process.env.REACT_APP_BLOG_ID}?key=${process.env.REACT_APP_API_KEY}`
  const [main, setMain] = useState(0)
  const page = `https://www.googleapis.com/blogger/v3/blogs/${process.env.REACT_APP_BLOG_ID}/posts?key=${process.env.REACT_APP_API_KEY}`

  useEffect(() => {
    fetch(page)
    .then(json => json.json())
    .then(object => setMain(object))
  }, [page])

  // console.log(content)

  

  return (
    <div className="App">
      <header className='sticky'>
        <nav>
          <ul>
            <li>Home</li>
            <li>Explore</li>
            <li>Movies</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      
      <div className='title'>
        <h1>O sapo e o escorpião</h1>
      </div>
      
      <article className='banner-article'>
        <section className='banner-section'>
          <div className="main-banner">
            <img src={require("./bataille_drawning2.jpg")} />
          </div>
          
          <span>
            <blockquote className="banner-blackquote">
              "Meu privilégio é o de ser humilhado 
              por minha estupidez profunda, e, decerto,
              através dos outros, percebo uma estupidez
              ainda maior."
            </blockquote> 
            <small><i>Bataille, Georges</i></small>
          </span>  
        </section>
      </article>
      
      
      <article>
        <main>
          {/* <h2>{main.items[0].title}</h2>
          <small>{ main.items[0].published}</small> */}
          {!!main && <div className="headline" dangerouslySetInnerHTML={{__html: main.items[0].content}}></div>}
          {/* {console.log(main.items[0].content)} */}
        </main>

        <aside>Recent Calls
          <section className='aside-content'>
            {/* <img  */}
            {!!main && <RecentPost content={main.items[0].content}/>}
          </section>
        </aside>
      </article>

      <article className='movies'>
        

        <section><h2>Movies i do recommend: </h2></section>
      </article>
    </div>
  );
}

const RecentPost = ({content}) => {
  const initialAnchor = content.split('href="')
  const finalAnchor = initialAnchor[1].split('"')
  const myLink = finalAnchor[0]

  return(
    <div className="recent-post">
      {/* <img src={fetch(myLink)} /> */}
      <MyImageComponent myLink={myLink} />
    </div>
  )
}

function MyImageComponent({myLink}) {
  const {src} = useImage({
    srcList: myLink,
  })

  return <img src={src} />
}