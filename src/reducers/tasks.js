import uuid from 'react-native-uuid'

const context = { 
      data: [
      {
       id: '1',
       title: 'Item 1 - any js object',
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
       isTodo: false,
       completed: false,
       hasPeriod: false,
       period: {},
       date: '2022-04-19',
       time: null,
       tags: ['1'],
       priority: 1000
      },
      {
       id: '2',
       title: 'Item 1 - any js object',
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
       isTodo: false,
       completed: false,
       hasPeriod: false,
       period: {},
       date: '2022-04-17',
       time: null,
       tags: ['2'],
       priority: 600
      },
      {
       id: '3',
       title: 'Item 1 - any js object',
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
       isTodo: false,
       completed: false,
       hasPeriod: false,
       period: {},
       date: '2022-04-18',
       time: null,
       tags: ['1', '3'],
       priority: 1000
      },
      {
       id: '4',
       title: 'Item 2 - any js object',
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
       isTodo: false,
       completed: false,
       hasPeriod: false,
       period: {},
       date: '2022-04-18',
       time: null,
       tags: ['2', '3'],
       priority: 700
      },
      {
       id: '5',
       title: 'Item 1 - any js object',
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
       isTodo: false,
       completed: false,
       hasPeriod: false,
       period: {},
       date: '2022-04-17',
       time: null,
       tags: ['1'],
       priority: 500
      },
      {
       id: '6',
       title: 'Item 3 - any js object',
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
       isTodo: false,
       completed: false,
       hasPeriod: false,
       period: {},
       date: '2022-04-19',
       time: null,
       tags: ['4'],
       priority: 200
      },
      {
       id: '7',
       title: 'Item 2 - any js object',
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
       isTodo: false,
       completed: false,
       hasPeriod: false,
       period: {},
       date: '2022-04-18',
       time: null,
       tags: ['2', '4'],
       priority: 300
      },
      {
       id: '8',
       title: 'Item 2 - any js object',
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
       isTodo: false,
       completed: false,
       hasPeriod: false,
       period: {},
       date: '2022-04-18',
       time: null,
       tags: ['2', '5'],
       priority: 400
      },
      {
       id: '9',
       title: 'Item 4 - any js object',
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
       isTodo: false,
       completed: false,
       hasPeriod: false,
       period: {},
       date: '2022-04-19',
       time: null,
       tags: ['5'],
       priority: 600
      },
      {
       id: '10',
       title: 'any js object',
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
       isTodo: false,
       completed: false,
       hasPeriod: false,
       period: {},
       date: '2022-04-19',
       time: null,
       tags: ['4', '3'],
       priority: 100
      },
      {
       id: '11',
       title: 'any js object',
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
       isTodo: true,
       completed: false,
       hasPeriod: false,
       period: {},
       date: null,
       time: null,
       tags: ['2', '4'],
       priority: 800
      },
      {
       id: '12',
       title: 'any js object',
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
       isTodo: true,
       completed: false,
       hasPeriod: false,
       period: {},
       date: null,
       time: null,
       tags: ['2', '3'],
       priority: 300
      },
      {
       id: '13',
       title: 'any js object',
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
       isTodo: true,
       completed: false,
       hasPeriod: false,
       period: {},
       date: null,
       time: null,
       tags: ['1', '4'],
       priority: 200
      },
      {
       id: '14',
       title: 'any js object',
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
       isTodo: false,
       completed: false,
       hasPeriod: false,
       period: {},
       date: null,
       time: null,
       tags: ['1', '2'],
       priority: 800
      },
      {
       id: '15',
       title: 'any js object',
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
       isTodo: false,
       completed: false,
       hasPeriod: false,
       period: {},
       date: null,
       time: null,
       tags: ['2', '4'],
       priority: 500
      },
      {
       id: '16',
       title: 'any js object',
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
       isTodo: false,
       completed: false,
       hasPeriod: false,
       period: {},
       date: null,
       time: null,
       tags: ['3', '4'],
       priority: 1000
      },
      {
       id: '17',
       title: 'any js object',
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
       isTodo: false,
       completed: false,
       hasPeriod: true,
       period: {},
       date: '2022-04-28',
       time: null,
       tags: ['1', '4'],
       priority: 200
      },
      {
       id: '18',
       title: 'any js object',
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
       isTodo: false,
       completed: false,
       hasPeriod: true,
       period: {},
       date: '2022-04-27',
       time: null,
       tags: ['2', '3'],
       priority: 700
      },
   ]
}

const COMPLETE = 'COMPLETE'
const ADD_TASK = 'ADD_TASK'
const DELETE_ITEM = 'DELETE_ITEM'
const EDIT_TASK = 'EDIT_TASK'
const TO_NOTE = 'TO_NOTE'
const TO_TODO = 'TO_TODO'
const TO_CALENDAR = 'TO_CALENDAR'

export const addTask = newItem => ({
      type: ADD_TASK,
      payload: {
            ...newItem,
            id: uuid.v4()
      }
})

export const deleteItem = id => ({
  type: DELETE_ITEM,
  payload: id
})

export const editTask = (id, modifiedItem) => ({
      type: EDIT_TASK,
      payload: { id, modifiedItem }
})

export const toNote = id => ({
      type: TO_NOTE,
      payload: {
            id,
            isTodo: false,
            hasPeriod: false,
            period: {},
            date: null,
            time: null
      }
})

export const toTodo = id => ({
      type: TO_TODO,
      payload: {
            id,
            isTodo: true,
            hasPeriod: false,
            period: {},
            date: null,
            time: null
      }
})

export const toCalendar = (id, date, time) => ({
      type: TO_CALENDAR,
      payload: { 
            id,
            isTodo: false,
            date,
            time
      }
})

export const complete = id => ({
      type: COMPLETE,
      payload: id
})

export default (state = context.data, action) => {
      const { payload } = action

      switch(action.type) {
            case ADD_TASK:
                  return state.concat(payload)
                  break
            case DELETE_ITEM:
                  return state.filter(x => x.id != payload) 
                  break
            case EDIT_TASK:
                  return state.map(x => x.id === payload.id ? ({ ...payload.modifiedItem }) : x)
                  break
            case TO_NOTE:
                  return state.map(x => x.id === payload.id ? ({ ...x, ...payload }) : x)
                  break
            case TO_TODO:
                  return state.map(x => x.id === payload.id ? ({ ...x, ...payload }) : x)
                  break
            case TO_CALENDAR:
                  return state.map(x => x.id === payload.id ? ({ ...x, ...payload }) : x)
                  break
            case COMPLETE:
                  return state.map(x => x.id === payload ? ({ ...x, completed: true }) : x)
                  break
            default:
                return state
      }
}
