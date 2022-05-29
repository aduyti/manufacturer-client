import axios from "axios"

const updateUser = (user, id) => {
    axios.put(`https://mysterious-coast-30403.herokuapp.com/user/${id}`, user)
}
export default updateUser;