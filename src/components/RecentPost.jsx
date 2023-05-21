import { MyImageComponent } from "./MyImageComponent"

export const RecentPost = ({content}) => {
    if(content.content.includes('href="')){
        const initialAnchor = content.content.split('href="') 
        const finalAnchor = initialAnchor[1].split('"') 
        const myLink = finalAnchor[0]

        return(
            <div className="recent-post">
              <MyImageComponent myLink={myLink} key={content.title}/>
              <h2>{content.title}</h2>
            </div>
          )
    } else{
        return
    }
}