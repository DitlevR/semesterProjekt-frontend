import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class StartPage extends React.Component {
    render() {
        return (
            <div className="container">
                {this.props.user?
                <Link to="/personal">
                    <button className="btn btn-primary backBtn">Back to personal page</button>
                </Link>
                :<span></span>}
                <Link to="/login">
                    <button className="btn btn-primary logBtn">{!this.props.user?'Log In':'Log Out'}</button>
                </Link>
                <div className="col-md-6 col-md-offset-3">
                    
                    <h1>Start Page</h1>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { authentication } = state;
    const { user } = authentication;
    return { user};
}


const connectedStartPage = connect(mapState)(StartPage);
export { connectedStartPage as StartPage };