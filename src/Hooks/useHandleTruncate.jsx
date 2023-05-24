export const useHandleTruncate = (string, maxValue) => { 
    if(string.length > maxValue){
        string = string.substring(0, maxValue)
        return `${string}...`
    } else {
        return string
    } 
}