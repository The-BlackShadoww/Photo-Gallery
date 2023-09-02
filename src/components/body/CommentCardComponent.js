import { Typography } from "@mui/material";
import React from "react";

const CommentCardComponent = ({ comments }) => {
    const commentCard = comments.map((c) => {
        return (
            <div key={c.id}>
                <Typography variant="h6">{c.author}</Typography>
                <Typography variant="body1">{c.comment}</Typography>
            </div>
        );
    });
    return <div>{commentCard}</div>;
};

export default CommentCardComponent;
