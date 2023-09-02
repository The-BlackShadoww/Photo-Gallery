import React from "react";
import { URI } from "../../redux/URI";

const GalleryGrid = ({ photos, handleOpen }) => {
    return (
        <div>
            <div
                style={{ padding: 10, margin: 10, cursor: "pointer" }}
                onClick={() => handleOpen(photos)}
            >
                <img src={`${URI}${photos.photo}`} alt="img" />
            </div>
        </div>
    );
};

export default GalleryGrid;
