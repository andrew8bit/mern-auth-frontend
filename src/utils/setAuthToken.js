import axios from 'axios';

// This utility will add the authorized user's JWT to the request header
// Any routes that are protected will require the JWT in order to access them.

const setAuthToken = (token) => {
    // Apply this token to every request header
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
        console.log('================> HEADERS <==================');
        console.log(axios.defaults.headers.common);

    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}

export default setAuthToken;