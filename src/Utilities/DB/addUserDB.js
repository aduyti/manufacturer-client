import axios from "axios"

const addUserDB = (name, email) => {
    axios.put("http://localhost:5555/user", [name, email])
}
export default addUserDB;