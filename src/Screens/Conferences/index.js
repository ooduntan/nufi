import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Conferences as Component } from "./Conferences";

import {
  fetchConference,
  updateDisplaySize,
  populateConference
} from "Actions";

const mapStateToProps = ({ conferences: { conferenceList, displayedConference } }) => ({
  conferenceList,
  displayedConference
});

const mapDispatchToProps = dispatch => ({
  fetchConference: bindActionCreators(fetchConference, dispatch),
  updateDisplaySize: bindActionCreators(updateDisplaySize, dispatch),
  populateConference: bindActionCreators(populateConference, dispatch)
});

export const Conferences = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
