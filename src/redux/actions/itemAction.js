
// import axios from "axios";
import axios from "axios";
import { server } from "../store";



export const createItemAction = ( myform ) => async (dispatch) => {

    try {
        dispatch({
            type: "createItemRequest",
        })


        const config = {
            headers: { "Content-Type": "application/json" },
           withCredentials:true,
        };
        const { data } = await axios.post(`${server}/admin/item/new`,config, myform );

        dispatch({
            type: "createItemSuccess",
            payload: data,
        })

    } catch (error) {

        dispatch({
            type: "createItemFail",
            payload: error.response.data.message,
        })
    }
}