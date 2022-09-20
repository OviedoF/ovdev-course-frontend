import axios from "axios";

export const getToken = () => {
    if((Math.round(new Date().getTime()/1000) - localStorage.getItem('access-timestamp') > 86400) ) return 'token expired';

    const token = localStorage.getItem('x-access');

    if(!token) return false;

    return token;
};

export const getUserByToken = async () => {
    const token = getToken();

    if(token == 'token expired') return 'token expired';

    const data = await axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/api/auth/signin/whoiam`, {
        token
    })
        .then(res => res.data)
        .catch(err => false);

    if(!data) return false;

    return data;
}