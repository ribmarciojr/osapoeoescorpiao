import './global-styles.css';
import { useEffect, useState, Image } from 'react';
import { RecentPost } from '../components/RecentPost';
//todo Map of recent post
//todo Refactor CSS
//todo call Letterboxd API
//todo main page text format 
//todo ajeitar time de "2023-05-18T05:53:00-07:00" para "2023-05-18 07:00"

export const App = () => {
  //const url = `https://www.googleapis.com/blogger/v3/blogs/${process.env.REACT_APP_BLOG_ID}?key=${process.env.REACT_APP_API_KEY}`
  const [main, setMain] = useState(0)
  const page = `https://www.googleapis.com/blogger/v3/blogs/${process.env.REACT_APP_BLOG_ID}/posts?key=${process.env.REACT_APP_API_KEY}`

  useEffect(() => {
    fetch(page)
    .then(json => json.json())
    .then(object => setMain(object))
  }, [page])

  const data = {
    bannerText: "Meu privilégio é o de ser humilhado por minha estupidez profunda, e, decerto, através dos outros, percebo uma estupidez ainda maior."
  }

  async function typeWriter(element, string_text){
    element.innerHTML = ''
    const text = string_text.split('')
    
    await text.map((value, index) => {
      setTimeout(() => {
        element.innerHTML += value
      }, 75 * index)
    })
  }

  const transformTime = (string_time) => {
    const t = string_time.split("T")
    const b = t[1].split("-")

    console.log(t[0] + b[1])
    return `${t[0]} ${b[1]}`
  }

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      const quote = document.querySelector('#banner-quote')
      if(entries.some((entry) => entry.isIntersecting && quote.className === "banner-blackquote open")){
        
        quote.className = "banner-blackquote loading"
        typeWriter(quote, data.bannerText)
        console.log(entries)
      }
    });

    intersectionObserver.observe(document.querySelector('#banner-img'))

    return () => intersectionObserver.disconnect
  }, [data.bannerText])

  return (
    <div className="App">
      <header className='sticky'>
        <nav className='menu'>
          <ul>
            <a href='#first-mid-div'><li>Home</li></a>
            <li>Explore</li>
            <li>Movies</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      
      <div className='title'>
        <h1>O sapo e o escorpião</h1>
      </div>

      <div className='mid-div' id="first-mid-div"></div>

      <article className='banner-article'>
        <section className='banner-section'>
          <div className="main-banner">
            <img src={require("./bataille_lascaux.jpg")} id='banner-img'/>
          </div>
          
          <span className='banner-text'>
            <blockquote className="banner-blackquote open" id='banner-quote'>
              
            </blockquote> 
            <small><i>~Bataille, Georges</i></small>
          </span>  
        </section>
      </article>

      <div className='mid-div'></div>

      <article className='content-article'>
        <section className="content-section">
          {!!main && <main className='last-post'>
          <h2>Última atualização:</h2>
          <h2 className='last-post-title'>{main.items[0].title}</h2>
          <small>{main.items[0].author.displayName + '~ ' + transformTime(main.items[0].published)}</small>
           <div className="headline" dangerouslySetInnerHTML={{__html: main.items[0].content}}></div>
          {/* {console.log(main.items[0].content)} */}
          </main>}

        <aside>
          <section className='aside-content'>
            <h2>Textos passados:</h2>
            {/* <img  */}
            {!!main && main.items.map(post => <RecentPost content={post}/>)}
          </section>
        </aside>
        </section> 
      </article>

      {/* <article className='movies'>
        <section><h2>Movies i do recommend: </h2></section>         
      </article> */}

      <footer className='footer'>&copy;Todos os direitos reservados</footer>
    </div>
  );
}


{/* <RecentPost content={main.items[1]}/> */}