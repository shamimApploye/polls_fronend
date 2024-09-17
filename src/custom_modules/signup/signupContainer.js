import { connect } from "react-redux"
import Signup from "./Signup"
import {actions} from "./signupActions"


const mapStateToProps = (state, ownProps) => ({

})

// console.log(typeof actions.fetchPollsRequest)

const mapDispatchToProps = (dispatch, ownProps) => ({
    postData: (payload) => dispatch (actions.postData(payload))
})

export default connect (mapStateToProps, mapDispatchToProps)(Signup)