import './style.css'
import { Balancer } from 'react-wrap-balancer'

export const Banner = () => {
    return (
        <article className='banner-article'>
        <section className='banner-section'>
          <div className="main-banner">
            <img src={require("../../template/bataille_lascaux.jpg")} alt='George Bataille, important French philosopher of nineteens century' id='banner-img'/>
          </div>
          
          <span className='banner-text'>
            
              <blockquote className="banner-blackquote open" id='banner-quote'></blockquote>
            
             
            <small className='banner-author'><i>~Bataille, Georges</i></small>
          </span>  
        </section>
      </article>
    )
}