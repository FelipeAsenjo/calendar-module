export const findInData = (data, id) => data.find(x => x.id === id)
export const dataWithoutFinded = (data, id) => data.filter(x => x.id != id)

const formatNumber = (number) => number < 10 ? `0${number}` : number
export const formatDate = date => {
    return `${date.getFullYear()}-${formatNumber(date.getMonth())}-${formatNumber(date.getDate())}` 
}
export const formatTime = date => {
    return `${formatNumber(date.getHours())}:${formatNumber(date.getMinutes())}`
}


 
