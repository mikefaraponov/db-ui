import { 
	GET_VIDEO_REQ,
	GET_VIDEO_OK,
	GET_VIDEO_FAIL,
	CLEAR_VIDEO_SEARCH_RESULTS	
} from '../constants';

const init = {
	wait: false,
	errMsg: '',
	videos: []
};

export default function youTubeApi(state=init, action){
	switch(action.type){
		case GET_VIDEO_REQ:
			return Object.assign({}, state, {
				wait: true,
				errMsg: '',
				videos: []
			});
		case GET_VIDEO_OK:
			return Object.assign({}, state, {
				wait: false,
				errMsg: '',
				videos: action.videos
			});
		case GET_VIDEO_FAIL:
			return Object.assign({}, state, {
				wait: false,
				errMsg: action.errMsg,
				videos: []
			});
		case CLEAR_VIDEO_SEARCH_RESULTS:
			return Object.assign({}, state, {
				videos: [],
				errMsg: ''
			});
		default:
			return state;
	}
};