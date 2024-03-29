import { useParams, Link } from "react-router-dom"
import { Header } from "../Header/Header"
import '../Header/style.css'
import './style.css'
import { Main } from "../Main/Main"
import { Footer } from "../Footer/Footer"

export const SinglePost = () => {
    const {id} = useParams()
    
    return (
    <div className="SinglePost">
        <div className="post">
            <Header />
            <Main id={id}/>
            <Footer />
        </div>
    </div>)
}