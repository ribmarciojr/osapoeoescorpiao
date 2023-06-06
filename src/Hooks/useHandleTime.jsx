export const useHandleTime = (string_time) => {
    const t = string_time.split("T")
    const [year, month, day] = t[0].split("-")

    return `${day}/${month}/${year}`
}