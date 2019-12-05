import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute, PrivateAdminRoute } from '../_components';
import {StartPage} from '../StartPage';
import {AdminPage} from '../AdminPage';
import {PersonalPage} from '../PersonalPage';
import {OverduePage} from '../OverduePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { HomePage } from '../HomePage';

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div>
                {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={StartPage}/>
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                        <PrivateAdminRoute path="/admin" component={AdminPage}/>
                        <PrivateAdminRoute path="/home" component={HomePage}/>
                        <PrivateRoute path="/overdue" component={OverduePage}/>
                        <PrivateRoute path="/personal" component={PersonalPage}/>
                        <Redirect from="*" to="/" />
                    </Switch>
                </Router>
            </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };