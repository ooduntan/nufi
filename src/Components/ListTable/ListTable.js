import React, { useState, useEffect } from "react";
import { Table, Spinner } from "react-bootstrap";
import PropTypes from "prop-types";

import { Select, Pagination } from "Components";

import { TableFooter, PaginationWrapper } from "./styled";
import { getCurrentPageList } from './utils'

export const ListTable = ({
  titleList,
  contentList,
  contentKeys,
  loadingContent
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentListItem, setListItem] = useState([]);

  useEffect(() => {
    const newContentList = getCurrentPageList(
      currentPage,
      itemsPerPage,
      contentList
    );
    setListItem(newContentList);
  }, [contentList, currentPage, itemsPerPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [contentList]);

  const nextPage = () => {
    const endOfPage = Math.ceil(contentList.length / itemsPerPage);
    if (currentPage >= endOfPage) return;
    setCurrentPage(prevValue => prevValue + 1);
  };

  const prevPage = () => {
    if (currentPage <= 1) return;
    setCurrentPage(prevValue => prevValue - 1);
  };

  const getImageOrText = (contentKey, content) =>
    contentKey === "logos"
      ? makeImage(content[contentKey], content.school)
      : content[contentKey];

  const updateListSize = ({ target: { value } }) => setItemsPerPage(value);

  const makeImage = (src, alt) =>
    src ? <img width="50px" height="50px" src={src[0]} alt={alt} /> : null;

  const renderWhileLoading = () => (
    <tr>
      <td colSpan={titleList.length} align="center">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </td>
    </tr>
  );

  const renderTableList = () =>
    currentListItem.length ? (
      currentListItem.map(content => (
        <tr key={content.id}>
          {contentKeys.map(contentKey => (
            <td key={content.mascot}>{getImageOrText(contentKey, content)}</td>
          ))}
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={titleList.length} align="center">
          No Content
        </td>
      </tr>
    );

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {titleList.map(title => (
              <th key={title}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loadingContent ? renderWhileLoading() : renderTableList()}
        </tbody>
      </Table>
      <TableFooter>
        <PaginationWrapper>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(contentList.length / itemsPerPage)}
            next={nextPage}
            prev={prevPage}
          />
        </PaginationWrapper>
        <Select
          onChange={updateListSize}
          name="Page Size"
          options={[
            { label: "3", value: "3" },
            { label: "5", value: "5" }
          ]}
        />
      </TableFooter>
    </div>
  );
};

ListTable.defaultProps = {
  contentList: [],
  titleList: [],
};

ListTable.propTypes = {
  titleList: PropTypes.arrayOf(PropTypes.string),
  contentList: PropTypes.arrayOf(PropTypes.shape({}))
};
