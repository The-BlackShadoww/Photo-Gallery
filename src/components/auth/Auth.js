import React, { Component } from "react";
import { Formik } from "formik";
import { Alert } from "reactstrap";
import { auth } from "../../redux/authActionCreators";
import { connect } from "react-redux";
import { Button } from "@mui/material";

const mapStateToProps = (state) => {
    return {
        authFailedMsg: state.authFailedMsg,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        auth: (email, password, mode) => dispatch(auth(email, password, mode)),
    };
};

class Auth extends Component {
    state = {
        mode: "Sign Up",
    };
    switchModeHandler = () => {
        this.setState({
            mode: this.state.mode === "Sign Up" ? "Login" : "Sign Up",
        });
    };
    render() {
        let err = null;
        if (this.props.authFailedMsg !== null) {
            err = <Alert color="danger">{this.props.authFailedMsg}</Alert>;
        }

        const form = (
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    passwordConfirm: "",
                }}
                onSubmit={(values) => {
                    this.props.auth(
                        values.email,
                        values.password,
                        this.state.mode
                    );
                }}
                validate={(values) => {
                    const errors = {};

                    if (!values.email) {
                        errors.email = "Required";
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            values.email
                        )
                    ) {
                        errors.email = "Invalid email address";
                    }

                    if (!values.password) {
                        errors.password = "Required";
                    } else if (values.password.length < 4) {
                        errors.password = "Must be at least 4 characters";
                    }

                    if (this.state.mode === "Sign Up") {
                        if (!values.passwordConfirm) {
                            errors.passwordConfirm = "Required";
                        } else if (values.password !== values.passwordConfirm) {
                            errors.passwordConfirm =
                                "Password field does not match";
                        }
                    }
                    return errors;
                }}
            >
                {({ values, handleChange, handleSubmit, errors }) => (
                    <div
                        style={{
                            border: "1px solid grey",
                            padding: "15px",
                            borderRadius: "7px",
                        }}
                    >
                        <Button
                            variant="contained"
                            className="w-full"
                            onClick={this.switchModeHandler}
                        >
                            Switch to{" "}
                            {this.state.mode === "Sign Up"
                                ? "Login"
                                : "Sign Up"}
                        </Button>
                        <br />
                        <br />
                        <form onSubmit={handleSubmit}>
                            <input
                                name="email"
                                placeholder="Email"
                                className="w-full p-3 border-2"
                                value={values.email}
                                onChange={handleChange}
                            />
                            <span style={{ color: "red" }}>{errors.email}</span>
                            <br />
                            <input
                                name="password"
                                placeholder="Password"
                                className="w-full p-3 border-2 my-4"
                                value={values.password}
                                onChange={handleChange}
                            />
                            <span style={{ color: "red" }}>
                                {errors.password}
                            </span>
                            <br />
                            {this.state.mode === "Sign Up" ? (
                                <div>
                                    <input
                                        name="passwordConfirm"
                                        placeholder="Confirm Password"
                                        className="w-full p-3 border-2 mb-4"
                                        value={values.passwordConfirm}
                                        onChange={handleChange}
                                    />
                                    <span style={{ color: "red" }}>
                                        {errors.passwordConfirm}
                                    </span>
                                    <br />
                                </div>
                            ) : null}

                            <Button variant="contained" type="submit">
                                {this.state.mode === "Sign Up"
                                    ? "Sign Up"
                                    : "Login"}
                            </Button>
                        </form>
                    </div>
                )}
            </Formik>
        );

        return (
            <div>
                {err}
                {form}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
