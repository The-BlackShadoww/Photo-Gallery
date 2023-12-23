import React, { useEffect } from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/authActionCreators";
import { Route, Routes } from "react-router-dom";
import Auth from "./Auth";
const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    };
};
const Logout = ({ logout }) => {
    useEffect(() => {
        logout();
    }, [logout]);

    return (
        <div>
            <Routes>
                <Route path="/login" element={<Auth />}></Route>
            </Routes>
        </div>
    );
};

export default connect(null, mapDispatchToProps)(Logout);

// import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import { logout } from "../../redux/authActionCreators";
// import { Route, Routes } from "react-router-dom";
// import Auth from "./Auth";
// const mapDispatchToProps = (dispatch) => {
//     return {
//         logout: () => dispatch(logout()),
//     };
// };
// const Logout = (props) => {
//     useEffect(() => {
//         props.logout();
//     }, []);

//     return (
//         <div>
//             <Routes>
//                 <Route path="/login" element={<Auth />}></Route>
//             </Routes>
//         </div>
//     );
// };

// export default connect(null, mapDispatchToProps)(Logout);
