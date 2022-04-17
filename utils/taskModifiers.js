export const findInData = (data, id) => data.find(x => x.id === id)
export const dataWithoutFinded = (data, id) => data.filter(x => x.id != id)

