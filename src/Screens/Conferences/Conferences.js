import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { Header, ListTable, Content } from "Components";

const titles = ["Abbr", "Name", "Short name"];
const contentKeys = ["abbreviation", "name", "short_name"];

export const Conferences = ({ displayedConference, fetchConference }) => {
  useEffect(() => {
    fetchConference();
  }, [fetchConference]);

  return (
    <Content>
      <Header title="Conferences" />
      <ListTable
        titleList={titles}
        loadingContent={false}
        contentKeys={contentKeys}
        contentList={displayedConference}
      />
    </Content>
  );
};

Conferences.propTypes = {
  displayedConference: PropTypes.arrayOf(
    PropTypes.shape({
      abbreviation: PropTypes.string,
      name: PropTypes.string,
      short_name: PropTypes.string
    })
  ).isRequired,
  fetchConference: PropTypes.func.isRequired
};
