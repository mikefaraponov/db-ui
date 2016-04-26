import {TOGGLE_SIDEBAR} from '../constants'

const init = {
	active: false
}

function sidebar(state=init, action){
	switch(action.type){
		case TOGGLE_SIDEBAR:
			return Object.assign({}, state, {
				active: !state.active
			})
		default:
			return state
	}
}

export default sidebar