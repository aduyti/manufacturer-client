import axios from "axios"

const addUserDB = (name, email) => {
    axios.put("https://mysterious-coast-30403.herokuapp.com/user", [name, email])
}
export default addUserDB;