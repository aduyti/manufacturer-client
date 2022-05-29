import axios from "axios"

const orderStatus = (status, id) => {
    axios.put(`https://mysterious-coast-30403.herokuapp.com/orderStatus/${id}`, { status })

}
export default orderStatus;