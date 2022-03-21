export default function formaTime(time){
    let date = new Date(time),
        y = date.getFullYear(),
        m = date.getMonth() + 1,
        d = date.getDate()
        return `${y}/` + `${m}/` + `${d}`
}