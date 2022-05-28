import axios from "axios";

const getjwt = async (email) => {
    const result = await axios.post('http://localhost:5555/login', email);
    localStorage.setItem('accessToken', result.data.token);
}
export default getjwt;