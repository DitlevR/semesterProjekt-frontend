import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { adminActions } from '../_actions';
class AdminPage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
        this.props.getUnregisteredUsers();
        this.props.getAllBooks();
        this.props.getOverdueBooks();
    }
    
    render() {
        const { user, admin } = this.props;
        return (
            <div className="container">
                <p className="logBtn">
                    <Link to="/login">Logout</Link>
                </p>
                <div className="col-md-6 col-md-offset-3">
                    <div>
                        <h1>Administator Page</h1>
                        <div>
                            <p>All users</p>
                                {admin.users &&
                                    <ul>
                                        {admin.users.map((user, index) =>
                                            <li key={user.id}>
                                                {user.title}
                                            </li>
                                        )}
                                    </ul>
                                }
                        </div>
                        <div>
                            <p>Unregistered Users</p>
                            {admin.unregisteredUsers &&
                                <ul>
                                    {admin.unregisteredUsers.map((user, index) =>
                                        <li key={user.id}>
                                            {user.title}
                                        </li>
                                    )}
                                </ul>
                            }
                        </div>
                        <div>
                            <p>All books</p>
                            {admin.allBooks &&
                                <ul>
                                    {admin.allBooks.map((book, index) =>
                                        <li key={book.id}>
                                            {book.title}
                                        </li>
                                    )}
                                </ul>
                            }
                        </div>
                        <div>
                            <p>Books past due date</p>
                            {admin.overdueBooks &&
                                <ul>
                                    {admin.overdueBooks.map((book, index) =>
                                        <li key={book.id}>
                                            {book.title}
                                        </li>
                                    )}
                                </ul>
                            }
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { authentication, admin } = state;
    const { user } = authentication;
    return { user, admin };
}

const actionCreators = {
    getUsers: adminActions.getUsers,
    getUnregisteredUsers: adminActions.getUnregisteredUsers,
    getAllBooks: adminActions.getAllBooks,
    getOverdueBooks: adminActions.getOverdueBooks,
    editUser:adminActions.editUser,
}

const connectedAdminPage = connect(mapState, actionCreators)(AdminPage);
export { connectedAdminPage as AdminPage };