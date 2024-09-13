import { connect } from "react-redux"
import Polls from "./Polls"
import { actions } from "./pollsActions"

const mapStateToProps = (state, ownProps) => ({
    pollsList: state.polls.polls,
    pollsError: state.polls.error,
    pollsLoading: state.polls.loading
})

// console.log(typeof actions.fetchPollsRequest)

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchPolls: () => dispatch (actions.fetchPollsRequest()),
})

export default connect (mapStateToProps, mapDispatchToProps)(Polls)