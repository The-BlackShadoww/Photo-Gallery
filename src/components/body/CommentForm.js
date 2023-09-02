import { Button } from "@mui/material";
import React, { useState } from "react";

const CommentForm = ({ addComment, pId }) => {
    const [input, setInput] = useState({
        author: "",
        comment: "",
    });

    //! Something to understand.
    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        console.log("Form submitted");
        addComment(pId, input.author, input.comment);
        
        setInput({
            author: "",
            comment: "",
        });
        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Your Name"
                    name="author"
                    onChange={handleInput}
                    required
                    className="w-full mt-4 p-3 border-2 border-blue-400"
                />
                <input
                    type="text"
                    placeholder="Comment here..."
                    name="comment"
                    onChange={handleInput}
                    required
                    className="w-full my-4 p-3 border-2 border-blue-400"
                />
                <Button variant="contained" type="submit">
                    send
                </Button>
            </form>
        </div>
    );
};

export default CommentForm;
