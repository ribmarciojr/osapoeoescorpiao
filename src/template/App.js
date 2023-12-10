import { useEffect, useState } from 'react';
import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import '../components/Main/style.css'
import './global-styles.css';
import { Footer } from '../components/Footer/Footer';
import { Banner } from '../components/Banner/Banner';

export const App = () => {
  //const url = `https://www.googleapis.com/blogger/v3/blogs/${process.env.REACT_APP_BLOG_ID}?key=${process.env.REACT_APP_API_KEY}`

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

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      const quote = document.querySelector('#banner-quote')
      if(entries.some((entry) => entry.isIntersecting && quote.className === "banner-blackquote open")){
        
        quote.className = "banner-blackquote loading"
        typeWriter(quote, data.bannerText)
      }
    });

    intersectionObserver.observe(document.querySelector('#banner-img'))

    return () => intersectionObserver.disconnect
  }, [data.bannerText])

  return (
    <div className="App">
      <Header />
      <div className='title'>
        <h1>O sapo e o escorpião</h1>
      </div>

      <div className='mid-div' id="first-mid-div"></div>

      <Banner />

      <div className='mid-div'></div>
      
      <Main />
      <Footer />
    </div>
  );
}
