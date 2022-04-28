import uuid from 'react-native-uuid'

const tags = [
      { id: '1', title: 'Home', color: 'red', selectedDotColor: 'blue' },
      { id: '2', title: 'Work', color: 'blue', selectedDotColor: 'blue' },
      { id: '3', title: 'Idea', color: 'purple', selectedDotColor: 'purple' },
      { id: '4', title: 'Training', color: 'green' },
      { id: '5', title: 'Birthday', color: 'black' },
      { id: '6', title: 'DIY', color: 'brown' },
      { id: '7', title: 'Personal', color: 'orange' },
]

const CREATE_TAG = 'CREATE_TAG'
const DELETE_TAG = 'DELETE_TAG'
const EDIT_TAG = 'EDIT_TAG'

export const createTag = newItem => ({
      type: CREATE_TASK,
      payload: {
            ...newItem,
            id: uuid.v4()
      }
})

export const deleteTag = id => ({
  type: DELETE_TAG,
  payload: id
})

export const editTag = (id, modifiedItem) => ({
      type: EDIT_TAG,
      payload: { id, modifiedItem }
})

export default (state = tags, action) => {
      const { payload } = action

      switch(action.type) {
            case CREATE_TAG:
                  return state.concat(payload)
                  break
            case DELETE_TAG:
                  return state.filter(x => x.id != payload) 
                  break
            case EDIT_TAG:
                  return state.map(x => x.id === payload.id ? ({ ...payload.modifiedItem }) : x)
                  break
            default:
                return state
      }
}
