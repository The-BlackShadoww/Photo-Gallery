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
import { Modal, ModalBody, Button } from "reactstrap"; 

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

function Home(props) {
    useEffect(() => {
        props.FetchPhotos();
        props.FetchComments();
    }, []);

    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [isOpen, setIsOpen] = useState(false); 

    const handleOpen = (photo) => {
        setSelectedPhoto(photo);
        setIsOpen(true); 
    };

    const handleClose = () => {
        setIsOpen(false); 
    };

    const grid = props.Photos.map((photo) => (
        <Grid item xs={3} key={photo.id}>
            <GalleryGrid photos={photo} handleOpen={handleOpen} />
        </Grid>
    ));

    let photo = null;
    if (selectedPhoto != null) {
        const comments = props.Comments.filter((c) => {
            return c.pId === selectedPhoto.id;
        });
        photo = (
            <Photo
                photo={selectedPhoto}
                handleClose={handleClose}
                comments={comments}
                addComment={props.AddComment}
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

//! ------------- 2 ----------------------------

// import React, { useEffect, useState } from "react";
// import { Grid, Modal } from "@mui/material";
// import { connect } from "react-redux";
// import {
//     fetchPhotos,
//     fetchComments,
//     addComment,
// } from "../../../redux/actionCreator";
// import GalleryGrid from "../GalleryGrid";
// import Photo from "../Photo";
// //!_______________________________________________________________________//

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

// function Home(props) {
//     useEffect(() => {
//         props.FetchPhotos();
//         props.FetchComments();
//     }, []);

//     const [selectedPhoto, setSelectedPhoto] = useState(null);
//     const [open, setOpen] = useState(false);

//     const handleOpen = (photo) => {
//         setSelectedPhoto(photo);
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(!open);
//     };

//     const grid = props.Photos.map((photo) => (
//         <Grid item xs={3} key={photo.id}>
//             <GalleryGrid photos={photo} handleOpen={handleOpen} />
//         </Grid>
//     ));

//     // let photo = null;
//     // if (selectedPhoto != null) {
//     //     const comments = props.Comments.filter((c) => {
//     //         return c.pId === selectedPhoto.id;
//     //     });
//     //     photo = (
//     //         <Photo
//     //             photo={selectedPhoto}
//     //             handleClose={handleClose}
//     //             comments={comments}
//     //             addComment={props.AddComment}
//     //         />
//     //     );
//     // }

//     const photo = (
//         <Photo
//             photo={selectedPhoto}
//             handleClose={handleClose}
//             comments={props.Comments}
//             addComment={props.AddComment}
//         />
//     );

//     return (
//         <div>
//             <Grid container spacing={2}>
//                 {grid}
//             </Grid>
//             <Modal open={open} onClose={handleClose}>
//                 {photo}
//             </Modal>
//         </div>
//     );
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home);

//!-------- 1 ----------
// import React, { Component } from "react";
// import { Grid, Modal } from "@mui/material";
// import { connect } from "react-redux";
// import { fetchPhotos } from "../../../redux/actionCreator";
// import GalleryGrid from "../GalleryGrid";
// import { URI } from "../../../redux/URI";

// const mapStateToProps = (state) => {
//     return {
//         Photos: state.photos,
//         // comments: state.Comments,
//     };
// };
// const mapDispatchToProps = (dispatch) => {
//     return {
//         FetchPhotos: () => dispatch(fetchPhotos()),
//     };
// };

// class Home extends Component {
//     componentDidMount() {
//         this.props.FetchPhotos();
//     }

//     state = {
//         selectedPhoto: null,
//         open: false,
//     };

//     handleOpen = (photo) => {
//         this.setState({
//             selectedPhoto: photo,
//             open: true,
//         });
//     };
//     handleClose = () => {
//         this.setState({
//             open: false,
//         });
//     };

//     render() {
//         const grid = this.props.Photos.map((photo) => {
//             return (
//                 <Grid xs={3}>
//                     <GalleryGrid
//                         photos={photo}
//                         onSelectPhoto={this.handleOpen}
//                         key={photo.id}
//                     />
//                 </Grid>
//             );
//         });

//         return (
//             <div>
//                 <Grid container>{grid}</Grid>
//                 <Modal open={this.state.open} onClose={this.handleClose}></Modal>
//             </div>
//         );
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
