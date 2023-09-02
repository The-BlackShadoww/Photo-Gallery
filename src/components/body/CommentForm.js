import React, { useState } from "react";
import { Button } from "@mui/material";

const CommentForm = ({ addComment, pId }) => {
    const [author, setAuthor] = useState("");
    const [comment, setComment] = useState("");

    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addComment(pId, author, comment);

        setAuthor("");
        setComment("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Your Name"
                    value={author}
                    onChange={handleAuthorChange}
                    required
                    className="w-full mt-4 p-3 border-2 border-blue-400"
                />
                <input
                    type="text"
                    placeholder="Comment here..."
                    value={comment}
                    onChange={handleCommentChange}
                    required
                    className="w-full my-4 p-3 border-2 border-blue-400"
                />
                <Button variant="contained" type="submit">
                    post
                </Button>
            </form>
        </div>
    );
};

export default CommentForm;
