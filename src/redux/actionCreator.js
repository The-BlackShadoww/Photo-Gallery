import * as actionTypes from "./actionTypes";
import axios from "axios";
import { URI } from "./URI";
import { FirURI } from "./URI";
//!------------------------------------------------//

export const addComment = (pId, author, comment) => (dispatch) => {
    const newComment = {
        pId: pId,
        author: author,
        comment: comment,
    };
    newComment.data = new Date().toISOString();

    axios.post(URI + "comments", newComment)
        .then((res) => res.data)
        .then((comment) => dispatch(commentConcat(comment)));
};

export const commentConcat = (comment) => {
    return {
        type: actionTypes.ADD_COMMENT,
        payload: comment,
    };
};

export const showPhotos = (photo) => {
    return {
        type: actionTypes.SHOW_PHOTOS,
        payload: photo,
    };
};

export const showComments = (comments) => {
    return {
        type: actionTypes.SHOW_COMMENTS,
        payload: comments,
    };
};

export const fetchPhotos = () => (dispatch) => {
    axios
        .get(URI + "photos")
        .then((response) => response.data)
        .then((photos) => dispatch(showPhotos(photos)));
    // .catch((error) => dispatch(dishesFailed(error.message)));
};

export const fetchComments = () => (dispatch) => {
    axios
        .get(URI + "comments")
        .then((response) => response.data)
        .then((comments) => dispatch(showComments(comments)));
};
