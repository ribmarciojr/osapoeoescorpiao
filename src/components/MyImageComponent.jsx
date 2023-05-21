import { useImage } from "react-image"

export const MyImageComponent = ({myLink}) => {
    const {src} = useImage({
      srcList: myLink,
    })
  
    return <img src={src} />
  }