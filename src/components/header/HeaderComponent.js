import { Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        token: state.token,
    };
};
const HeaderComponent = (props) => {
    let links = null;
    if (props.token === null) {
        links = (
            <div className="flex justify-between my-10">
                <Typography variant="h4">Photo Gallery Deployed</Typography>
                <Button variant="contained">
                    <Link to="/login">Sign Up / Login</Link>
                </Button>
            </div>
        );
    } else {
        links = (
            <div>
                <div className="py-5">
                    <div className="flex justify-between my-10">
                        <Typography variant="h4">Photo Gallery</Typography>
                        <Button variant="contained" color="error">
                            <Link to="/logout">Logout</Link>
                        </Button>
                    </div>
                </div>
                <br />
                <div className="flex justify-between my-10">
                    <Button variant="contained">
                        <Link to="*">Home</Link>
                    </Button>
                    <Button variant="contained">
                        <Link to="/animal">Animal</Link>
                    </Button>
                    <Button variant="contained">
                        <Link to="/architecture">Architecture</Link>
                    </Button>
                    <Button variant="contained">
                        <Link to="/business">Business</Link>
                    </Button>
                    <Button variant="contained">
                        <Link to="/food">Food</Link>
                    </Button>
                    <Button variant="contained">
                        <Link to="/nature">Nature</Link>
                    </Button>
                    <Button variant="contained">
                        <Link to="/street">Street</Link>
                    </Button>
                </div>
            </div>
        );
    }
    return <div>{links}</div>;
};

export default connect(mapStateToProps)(HeaderComponent);
