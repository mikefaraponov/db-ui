import {
	GET_VIDEO_REQ, GET_VIDEO_OK, GET_VIDEO_FAIL,
	YOU_TUBE_BASE_URL, YOU_TUBE_API_KEY, MAX_RESULTS,
	CLEAR_VIDEO_SEARCH_RESULTS
} from '../constants';
import axios from 'axios';

function prepareForRequest(str) {
	return str.split(' ').join('+');
}

const createApiCall = query => `${YOU_TUBE_BASE_URL}?&part=snippet&q=${prepareForRequest(query)}&key=${YOU_TUBE_API_KEY}&maxResults=${MAX_RESULTS}`;

function getVideoReq() {
	return {
		type: GET_VIDEO_REQ,
		wait: true
	};
}

function getVideoOk({data}) {
	return {
		type: GET_VIDEO_OK,
		videos: data.items,
		wait: false
	};
}

function getVideoFail(errMsg) {
	return {
		type: GET_VIDEO_FAIL,
		wait: false,
		errMsg
	};
}

export function searchVideos(searchString) {
	return dispatch => {
		dispatch(getVideoReq());
		return axios
			.get(createApiCall(searchString))
			.then(response => {
				console.info(response)
				dispatch(getVideoOk(response))
			})
			.catch(err => dispatch(getVideoFail(err.message)));
	};
}

export function clearSearchResults() {
	return {
		type: CLEAR_VIDEO_SEARCH_RESULTS
	}
}