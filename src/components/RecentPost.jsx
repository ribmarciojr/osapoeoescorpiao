import { Balancer } from "react-wrap-balancer"
import { MyImageComponent } from "./MyImageComponent"
import { useHandleTruncate } from "../Hooks/useHandleTruncate"

export const RecentPost = ({content}) => {
    if(content.content.includes('href="')){
        const initialAnchor = content.content.split('href="') 
        const finalAnchor = initialAnchor[1].split('"') 
        const myLink = finalAnchor[0]
  
        return(
            <div className="recent-post">
              <MyImageComponent myLink={myLink} key={content.title}/>
              {/* eslint-disable-next-line */}
              <h2><Balancer>{screen.width <= 480 ? useHandleTruncate(content.title, 14) : useHandleTruncate(content.title, 10)}</Balancer></h2>
            </div>
          )
    } else{
        return
    }
}