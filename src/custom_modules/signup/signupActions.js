// --------------------- SIGNUP ACTIONS --------------------- //


import { SUBMIT_SIGNUP_FORM } from "../../utils/constants";

const postData = (payload) => ({
    type: SUBMIT_SIGNUP_FORM,
    payload
})

export const actions = {
    postData
}