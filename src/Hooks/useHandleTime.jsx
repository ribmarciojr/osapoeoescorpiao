export const useHandleTime = (string_time) => {
    const t = string_time.split("T")
    const b = t[1].split("-")
    
    return `${t[0]} ${b[1]}`
}