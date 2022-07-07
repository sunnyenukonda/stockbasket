// reducer.js
const INITIAL_STATE = {
	token: '',
}

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case "SET_DATA":
			return {
				...state,
				token: action.content
			};
		default:
			return state;
	}
};
