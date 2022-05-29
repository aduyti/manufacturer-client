import axios from "axios";

const getjwt = async (email) => {
    const result = await axios.post('https://mysterious-coast-30403.herokuapp.com/login', email);
    localStorage.setItem('accessToken', result.data.token);
}
export default getjwt;