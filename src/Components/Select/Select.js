import React from "react";
import PropTypes from "prop-types";
import { Form, Col, Row } from "react-bootstrap";

import { SelectWrapper } from "./styled";

export const Select = ({ name, options, withAll, ...otherProps }) => {
  const allOption = withAll ? [{ value: null, label: 'All' }] : []

  return (
  <SelectWrapper>
    <Form.Group as={Row}>
      <Form.Label column >{name}</Form.Label>
      <Col>
        <Form.Control as="select" {...otherProps}>
          {[...allOption, ...options].map(({ value, label }) => (
            <option value={value} key={value}>
              {label}
            </option>
          ))}
        </Form.Control>
      </Col>
    </Form.Group>
  </SelectWrapper>
)
          }

Select.defaultTypes = {
  withAll: false,
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    })
  ).isRequired,
  withAll: PropTypes.bool
};
