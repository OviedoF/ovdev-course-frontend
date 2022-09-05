import axios from "axios";

export const getToken = () => {
    if((Math.round(new Date().getTime()/1000) - localStorage.getItem('access-timestamp') > 86400) ) return false;

    const token = localStorage.getItem('x-access');

    if(!token) return false;

    return token;
};

export const getUserByToken = async () => {
    if(!getToken) return false;

    const token = getToken();

    const data = await axios.post('http://localhost:4000/api/auth/signin/whoiam', {
        token
    })
        .then(res => res.data)
        .catch(err => false);

    return data;
}