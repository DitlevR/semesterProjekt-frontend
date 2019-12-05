import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { overdueActions } from '../_actions';

class OverduePage extends React.Component {
    componentDidMount() {
        this.props.getOverdueDetails(this.props.user);
    }
    render() {
        const { user, overdue } = this.props;
        return (
            <div className="container">
                <p className="back"><Link to="/personal">return to personal page</Link></p>
                <div className="col-md-6 col-md-offset-3">
                    <h1>Overdue Page</h1>
                    {overdue.items &&
                    <div>
                        <div>
                            <p>The following books are overdue</p>
                                <ul>
                                    {overdue.items.map((o, index) =>
                                        <li key={o.id}>
                                            {o.title}
                                        
                                        </li>
                                    )}
                                </ul>
                        </div>
                        <div>
                            <p>You have been fined {5*overdue.items.length} dollars</p>
                        </div>
                    </div>
                    }
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { overdue, authentication } = state;
    const { user } = authentication;
    return { user, overdue };
}

const actionCreators = {
    getOverdueDetails: overdueActions.getOverdueDetails,
}

const connectedOverduePage = connect(mapState, actionCreators)(OverduePage);
export { connectedOverduePage as OverduePage };