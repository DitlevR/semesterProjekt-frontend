import config from 'config';
import { authHeader } from '../_helpers';

export const overdueService = {
    getOverdueDetails
};
function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
function getOverdueDetails(user){
    const requestOptions = {
        method: 'GET',
    };
    return fetch(`http://jsonplaceholder.typicode.com/todos`, requestOptions).then(handleResponse);
}