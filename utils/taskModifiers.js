import CustomAlert from '../components/CustomAlert'

export const findInData = (data, id) => data.find(x => x.id === id)
export const dataWithoutFinded = (data, id) => data.filter(x => x.id != id)

export const toCalendar = (data, setData, id, date, time, toggle) => {
    const task = findInData( data, id )

    toggle()
}

export const toNoteOrTodo = (data, setData, id, isTodo, toggle) => {
    const taskFinded = findInData( data, id )
    const filteredData = dataWithoutFinded( data, id )
    const modifiedTask = {
      ...taskFinded,
      isTodo: isTodo,
      hasPeriod: false,
      period: {},
      date: null,
      time: null
    }

    setData([...filteredData, modifiedTask])

    toggle()
    alert(`${isTodo ? "To do" : "Note"} has been successfully created`)
  }

export const deleteItem = async (data, setData, id, toggle) => {
    const userAnswer = await CustomAlert('This task will be deleted', null)
    const filteredData = dataWithoutFinded( data, id )

    toggle()
    { userAnswer ? setData([...filteredData]) : setData([...data]) }
  }
