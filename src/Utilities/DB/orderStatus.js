import axios from "axios"

const orderStatus = (status, id) => {
    axios.put(`http://localhost:5555/orderStatus/${id}`, { status })

}
export default orderStatus;