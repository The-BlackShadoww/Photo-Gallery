import React, { useEffect } from "react";
import { Route, Routes} from "react-router-dom";
import Home from "./categories/Home";
import Animal from "./categories/Animal";
import Architecture from "./categories/Architecture";
import Business from "./categories/Business";
import Food from "./categories/Food";
import Nature from "./categories/Nature";
import Street from "./categories/Street";
import Auth from "../auth/Auth";
import Logout from "../auth/Logout";
import { authExpCheck } from "../../redux/authActionCreators";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        token: state.token,
    };
};

//! why this function needs to be dispatched here ???
const mapDispatchToProps = (dispatch) => {
    return {
        authExpCheck: () => dispatch(authExpCheck()),
    };
};
const BodyComponent = (props) => {
    useEffect(() => {
        props.authExpCheck();
    }, []);

    let routes = null;
    if (props.token === null) {
        routes = (
            <Routes>
                <Route path="/login" element={<Auth />}></Route>
            </Routes>
        );
    } else {
        routes = (
            <Routes>
                <Route path="*" element={<Home />}></Route>
                <Route path="/animal" element={<Animal />}></Route>
                <Route path="/architecture" element={<Architecture />}></Route>
                <Route path="/business" element={<Business />}></Route>
                <Route path="/food" element={<Food />}></Route>
                <Route path="/nature" element={<Nature />}></Route>
                <Route path="/street" element={<Street />}></Route>
                <Route path="/logout" element={<Logout />}></Route>
            </Routes>
        );
    }

    return <div>{routes}</div>;
};

export default connect(mapStateToProps, mapDispatchToProps)(BodyComponent);
