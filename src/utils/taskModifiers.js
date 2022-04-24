export const findInData = (data, id) => data.find(x => x.id === id)
export const dataWithoutFinded = (data, id) => data.filter(x => x.id != id)

const formatNumber = (number) => number < 10 ? `0${number}` : number
export const formatDate = date => {
    return `${date.getFullYear()}-${formatNumber(date.getMonth() + 1)}-${formatNumber(date.getDate())}` 
}
export const formatTime = date => {
    return `${formatNumber(date.getHours())}:${formatNumber(date.getMinutes())}`
}

export const capitalize = word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

export const createNewTask = () => {
    return {
        id: null,
        title: '',
        description: '',
        isTodo: false,
        hasPeriod: false,
        period: {
            days: null,
            tag: ''
        },
        date: null,
        time: null,
        tags: [],
        priority: null
    }
}

export const mergeObjects = (bigObject, smallObject) => {
    const mergedObject = {
        ...bigObject,
    }

    Object.keys(smallObject).forEach(x => {
        mergedObject[x] = smallObject[x]
    })

    return mergedObject
}
