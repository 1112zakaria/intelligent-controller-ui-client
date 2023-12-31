import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const getAuthToken = () => {
    return window.localStorage.getItem("auth_token");
}

export const setAuthToken = (token: string) => {
    window.localStorage.setItem("auth_token", token);
}

export const request = (method, url, data) => {
    let headers = {};
    let authToken = getAuthToken();
    console.log(headers);
    console.log(authToken);
    console.log(authToken !== 'undefined');
    if (authToken !== null && authToken !== "null" && authToken !== 'undefined') {
        headers = {"Authorization": `Bearer ${authToken}`}
    }

    return axios({
        method: method,
        headers: headers,
        url: url,
        data: data
    });
}