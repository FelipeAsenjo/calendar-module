
const TOGGLE_CREATE_TASK = 'TOGGLE_CREATE_TASK'
const TOGGLE_CREATE_CALENDAR = 'TOGGLE_CREATE_CALENDAR'
const TOGGLE_TO_CALENDAR = 'TOGGLE_TO_CALENDAR'

export const toggleCreateTask = () => ({
      type: TOGGLE_CREATE_TASK
})

export const toggleCreateCalendar = () => ({
      type: TOGGLE_CREATE_CALENDAR
})

export const toggleToCalendar = () => ({
      type: TOGGLE_TO_CALENDAR,
})

const initialState = {
      modalCreateTask: false,
      modalCreateCalendar: false,
      modalToCalendar: false,
}

export default (state = initialState, action) => {

      switch(action.type) {
            case TOGGLE_CREATE_TASK:
                  return { ...state, modalCreateTask: !modalCreateTask }
                  break
            case TOGGLE_CREATE_CALENDAR:
                  return { ...state, modalCreateCalendar: !modalCreateCalendar }
                  break
            case TOGGLE_TO_CALENDAR:
                  return { ...state, modalToCalendar: !modalToCalendar }
                  break
            default:
                  return state

      }
}
