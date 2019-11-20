import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchTeams, updateDisplaySize, filterByConference, fetchConference } from "Actions";

import { Teams as Component } from "./Teams";

const mapStateToProps = ({
  teams: { allTeam, displayedTeam, loading },
  conferences: { conferenceList }
}) => ({ allTeam, displayedTeam, conferenceList, loading });

const mapDispatchToProps = dispatch => ({
  fetchTeams: bindActionCreators(fetchTeams, dispatch),
  updateDisplaySize: bindActionCreators(updateDisplaySize, dispatch),
  filterByConference: bindActionCreators(filterByConference, dispatch),
  fetchConference: bindActionCreators(fetchConference, dispatch)
});

export const Teams = connect(mapStateToProps, mapDispatchToProps)(Component);
