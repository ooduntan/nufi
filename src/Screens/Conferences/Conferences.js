import React, { useEffect } from "react";
import { Header, ListTable, Content } from "Components";

const titles = ["Abbr", "Name", "Short name"];
const contentKeys = [
  "abbreviation",
  "name",
  "short_name",
];

export const Conferences = ({ displayedConference, fetchConference }) => {
  useEffect(() => {
    fetchConference()
  }, [fetchConference])

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
