import { context } from '../provider/context'

export default (state = context.data, action) => {
		console.log(action)
		return state
}
