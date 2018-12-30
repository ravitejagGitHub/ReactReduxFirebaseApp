import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
const Navbar = (props) => {
    const { auth ,profile } = props;
    const navLinks = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Raviteja App</Link>
                {navLinks}
            </div>
        </nav>
    );
}
const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile,
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(Navbar);