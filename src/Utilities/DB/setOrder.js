import axios from "axios";

const setOrder = (order, available) => {

    axios.post('https://mysterious-coast-30403.herokuapp.com/order', [order, available])
}
export default setOrder;