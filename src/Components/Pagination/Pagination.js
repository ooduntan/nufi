import React from "react";
import { Pagination as BootstrapPagination } from "react-bootstrap";
import PropTypes from "prop-types";

export const Pagination = ({ currentPage, totalPages, next, prev }) => (
  <BootstrapPagination>
    <BootstrapPagination.Prev onClick={prev} />
    <BootstrapPagination.Item>{`${currentPage} of ${totalPages}`}</BootstrapPagination.Item>
    <BootstrapPagination.Next onClick={next} />
  </BootstrapPagination>
);

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired
};
