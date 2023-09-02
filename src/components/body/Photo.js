import "./photo.css";
import React from "react";
import { URI } from "../../redux/URI";
import { Card, CardContent, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CommentCardComponent from "./CommentCardComponent";
import CommentForm from "./CommentForm";

const Photo = ({ photo, handleClose, comments, addComment }) => {
    return (
        <div>
            <div className="photoCom flex">
                {/* ----- part-1 --------- */}
                <div className="basis-3/4 h-screen">
                    <img
                        src={`${URI}${photo.photo}`}
                        alt="img"
                        className=""
                    />
                </div>
                {/* ----- part-2 --------- */}
                <div className="basis-1/4">
                    <div className="flex justify-between p-5">
                        <Typography variant="h4">Comments</Typography>
                        <span
                            onClick={() => handleClose()}
                            style={{ cursor: "pointer" }}
                        >
                            <CloseIcon />
                        </span>
                    </div>
                    < hr />
                    <Card>
                        <CardContent>
                            <CommentCardComponent comments={comments} />
                        </CardContent>
                    </Card>
                    <div>
                        <CommentForm pId={photo.id} addComment={addComment} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Photo;
