import * as actionTypes from "./actionTypes";

const INITIAL_STATE = {
    photos: [],
    comments: [],
    token: null,
    userId: null,
    authFailedMsg: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SHOW_PHOTOS:
            return {
                ...state,
                photos: action.payload,
            };
        case actionTypes.SHOW_COMMENTS:
            return {
                ...state,
                comments: action.payload,
            };
        case actionTypes.ADD_COMMENT:
            let newComment = action.payload;
            return {
                ...state,
                comments: state.comments.concat(newComment),
            };
        //! ------- Authentication ------------
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId,
            };
        case actionTypes.AUTH_FAILED:
            return {
                ...state,
                authFailedMsg: action.payload,
            };
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                token: null,
                userId: null,
                authFailedMsg: null,
            };
        default:
            return state;
    }
};
