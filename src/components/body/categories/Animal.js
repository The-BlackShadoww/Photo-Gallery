import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { connect } from "react-redux";
import {
    fetchPhotos,
    fetchComments,
    addComment,
} from "../../../redux/actionCreator";
import GalleryGrid from "../GalleryGrid";
import Photo from "../Photo";
import { Modal, ModalBody } from "reactstrap";

const mapStateToProps = (state) => {
    return {
        Photos: state.photos,
        Comments: state.comments,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        FetchPhotos: () => dispatch(fetchPhotos()),
        FetchComments: () => dispatch(fetchComments()),
        AddComment: (pId, author, comment) =>
            dispatch(addComment(pId, author, comment)),
    };
};

const Animal = ({
    FetchComments,
    FetchPhotos,
    Photos,
    Comments,
    AddComment,
}) => {
    useEffect(() => {
        FetchPhotos();
        FetchComments();
    }, [FetchComments, FetchPhotos]);

    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = (photo) => {
        setSelectedPhoto(photo);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const animalPhotos = Photos.filter((p) => {
        return p.category === "animal";
    });

    const grid = animalPhotos.map((photo) => (
        <Grid item xs={3} key={photo.id}>
            <GalleryGrid photos={photo} handleOpen={handleOpen} />
        </Grid>
    ));

    let photo = null;
    if (selectedPhoto != null) {
        const comments = Comments.filter((c) => {
            return c.pId === selectedPhoto.id;
        });
        photo = (
            <Photo
                photo={selectedPhoto}
                handleClose={handleClose}
                comments={comments}
                addComment={AddComment}
            />
        );
    }

    return (
        <div>
            <div>
                <Grid container spacing={2}>
                    {grid}
                </Grid>
                <Modal isOpen={isOpen} toggle={handleClose}>
                    <ModalBody>{photo}</ModalBody>
                </Modal>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Animal);

// import React, { useEffect, useState } from "react";
// import { Grid } from "@mui/material";
// import { connect } from "react-redux";
// import {
//     fetchPhotos,
//     fetchComments,
//     addComment,
// } from "../../../redux/actionCreator";
// import GalleryGrid from "../GalleryGrid";
// import Photo from "../Photo";
// import { Modal, ModalBody } from "reactstrap";

// const mapStateToProps = (state) => {
//     return {
//         Photos: state.photos,
//         Comments: state.comments,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         FetchPhotos: () => dispatch(fetchPhotos()),
//         FetchComments: () => dispatch(fetchComments()),
//         AddComment: (pId, author, comment) =>
//             dispatch(addComment(pId, author, comment)),
//     };
// };

// const Animal = (props) => {

//     useEffect(() => {
//         props.FetchPhotos();
//         props.FetchComments();
//     }, []);

//     const [selectedPhoto, setSelectedPhoto] = useState(null);
//     const [isOpen, setIsOpen] = useState(false);

//     const handleOpen = (photo) => {
//         setSelectedPhoto(photo);
//         setIsOpen(true);
//     };

//     const handleClose = () => {
//         setIsOpen(false);
//     };

//     const animalPhotos = props.Photos.filter((p) => {
//         return p.category === "animal";
//     })

//     const grid = animalPhotos.map((photo) => (
//         <Grid item xs={3} key={photo.id}>
//             <GalleryGrid photos={photo} handleOpen={handleOpen} />
//         </Grid>
//     ));

//     let photo = null;
//     if (selectedPhoto != null) {
//         const comments = props.Comments.filter((c) => {
//             return c.pId === selectedPhoto.id;
//         });
//         photo = (
//             <Photo
//                 photo={selectedPhoto}
//                 handleClose={handleClose}
//                 comments={comments}
//                 addComment={props.AddComment}
//             />
//         );
//     }

//     return (
//         <div>
//             <div>
//                 <Grid container spacing={2}>
//                     {grid}
//                 </Grid>
//                 <Modal isOpen={isOpen} toggle={handleClose}>
//                     <ModalBody>{photo}</ModalBody>
//                 </Modal>
//             </div>
//         </div>
//     );
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Animal);
