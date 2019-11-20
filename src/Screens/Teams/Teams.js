import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { Header, Select, ListTable, FilterSection, Content } from "Components";

const titles = [null, "Abbr", "School", "Mascot", "Division", "Conference"];
const contentKeys = [
  "logos",
  "abbreviation",
  "school",
  "mascot",
  "division",
  "conference"
];

export const Teams = ({
  fetchTeams,
  displayedTeam,
  loading,
  updateDisplaySize,
  filterByConference,
  conferenceList,
  fetchConference
}) => {
  useEffect(() => {
    fetchTeams(3);
    fetchConference();
  }, [fetchConference, fetchTeams]);

  return (
    <Content>
      <Header title="Teams" />
      <FilterSection>
        <Select
          name="Filters"
          withAll
          onChange={e => filterByConference(e.target.value)}
          options={conferenceList.map(({ name }) => ({
            label: name,
            value: name
          }))}
        />
      </FilterSection>
      <ListTable
        titleList={titles}
        loadingContent={loading}
        contentKeys={contentKeys}
        contentList={displayedTeam}
        updateList={e => updateDisplaySize(e.target.value)}
      />
    </Content>
  );
};

Teams.propTypes = {
  fetchTeams: PropTypes.func.isRequired,
  displayedTeam: PropTypes.arrayOf(
    PropTypes.shape({
      logos: PropTypes.string,
      abbreviation: PropTypes.string,
      school: PropTypes.string,
      mascot: PropTypes.string,
      division: PropTypes.string,
      conference: PropTypes.string
    })
  ),
  loading: PropTypes.bool.isRequired,
  updateDisplaySize: PropTypes.func.isRequired,
  filterByConference: PropTypes.func.isRequired,
  conferenceList: PropTypes.arrayOf(PropTypes.shape({})),
  fetchConference: PropTypes.func.isRequired
};
