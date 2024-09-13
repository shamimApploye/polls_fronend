import { connect } from "react-redux"
import Signup from "./Signup"


const mapStateToProps = (state, ownProps) => ({

})

// console.log(typeof actions.fetchPollsRequest)

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleSubmitForm: dispatch (actions.handleSubmitForm())
})

export default connect (mapStateToProps, mapDispatchToProps)(Signup)