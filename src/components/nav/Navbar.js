// Imports
//////////

// Base dependencies
import React from 'react';

// Redux
import { connect } from 'react-redux';


// Navbar component
///////////////////

const Navbar = (props) => {

    // Generate auth functionality
    let authFunctionality = "";
    if (props.auth.isAuthenticated) {
        authFunctionality = <a className="nav-link" href="#" onClick={props.logout}>Logout</a>
    } else {
        authFunctionality = <a className="nav-link" href="#" onClick={props.login}>Login</a>
    }

    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">SuperDuperNews</a>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    {authFunctionality}
                </li>
            </ul>
        </nav>
    );
};



// Map the Redux state to props
const mapStateToProps = state => ({
    auth: state.auth
});


// Map the Redux dispatches to props
const mapDispatchToProps = dispatch => ({
    login: () => dispatch({type: "LOGIN"}),
    logout: () => dispatch({type: "LOGOUT"})
});


// Export
/////////

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)