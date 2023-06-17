import { Balancer } from "react-wrap-balancer"
import { MyImageComponent } from "./MyImageComponent"
import { useHandleTruncate } from "../Hooks/useHandleTruncate"


export const RecentPost = ({content}) => {
    const doesHaveImage = content.content.includes('href="') 
    if(doesHaveImage){
        const initialAnchor = content.content.split('href="') 
        const finalAnchor = initialAnchor[1].split('"') 
        const myLink = finalAnchor[0]
      
        return(
            <div className="recent-post">
              <MyImageComponent myLink={myLink} key={content.title}/>
              {/* eslint-disable*/}
              <h2><Balancer>{screen.width <= 480 ? useHandleTruncate(content.title, 14) : useHandleTruncate(content.title, 25)}</Balancer></h2>
            </div>
          )
    } else{
        return <div className="recent-post">
          <h2>{useHandleTruncate(content.title, 200)}</h2>
        </div>
    }
}