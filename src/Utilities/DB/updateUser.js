import axios from "axios"

const updateUser = (user, id) => {
    axios.put(`http://localhost:5555/user/${id}`, user)
}
export default updateUser;