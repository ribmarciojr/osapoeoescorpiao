import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { useState } from 'react'

import './style.css'

export const Contact = () => {
    const [user, setUser] = useState()
    const [email, setEmail] = useState()
    const [msg, setMsg] = useState()

    function sendData(){
        fetch('http://localhost:5000', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"user": user, "email": email, "msg": msg}),
        })
    }

    return (
        <>
        <Header />
        <article className='contact-article'>
            <section className='contact-section' >
                <form>
                    <legend>Entre em contato</legend>
                    <label htmlFor='user'>Autor</label>
                    <input onChange={(e) => {setUser(e.target.value)}} type='text' id='user' class='user' autoComplete='off' placeholder=' Digite seu nome'/>

                    <label htmlFor="email">Email</label>
                    <input  onChange={(e) => {setEmail(e.target.value)}} type='text' id='email' class='email' autoComplete='on' placeholder=' Digite seu email'/>
                    
                    <label htmlFor="msg">Mensagem</label>
                    <input  onChange={(e) => {setMsg(e.target.value)}} type='text' id='msg' autoComplete='off' placeholder=' Digite sua mensagem'/>

                    <button type='button' onClick={() => sendData()}>Enviar</button>
                </form>

                <div className='alternative-social'>
                    <i className="fa-brands fa-linkedin-in fa-lg icon"></i>
                    <a href='linkedin.com/in/pedro-leal-810730189'>Linkedin</a>
                </div>
                
                <div className='alternative-social'>
                    <i className="fa fa-google fa-lg icon" aria-hidden="true"></i>
                    <p>pedros.l@outlook.com</p>
                </div>
            </section>
        </article>        
        <Footer />
        </>
    )
}