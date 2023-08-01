import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import './style.css'

export const Contact = () => {



    return (
        <>
        <Header />
        <article className='contact-article'>
            <section className='contact-section' >
                <form>
                    <legend>Entre em contato</legend>
                    <label htmlFor='user'>Autor</label>
                    <input type='text' id='user' class='user' autoComplete='off' placeholder=' Digite seu nome'/>

                    <label htmlFor="email">Email</label>
                    <input type='text' id='email' class='email' autoComplete='on' placeholder=' Digite seu email'/>
                    
                    <label htmlFor="msg">Mensagem</label>
                    <input type='text' id='msg' autoComplete='off' placeholder=' Digite sua mensagem'/>
                </form>

                <div className='alternative-social'>
                    <i class="fa-brands fa-linkedin-in fa-lg icon"></i>
                    <a href='linkedin.com/in/pedro-leal-810730189'>Linkedin</a>
                </div>
                
                <div className='alternative-social'>
                    <i class="fa fa-google fa-lg icon" aria-hidden="true"></i>
                    <p>pedros.l@outlook.com</p>
                </div>
            </section>
        </article>        
        <Footer />
        </>
    )
}