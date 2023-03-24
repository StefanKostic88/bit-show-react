import React from "react";

import { Form } from "react-bootstrap";

const CustomSearchBar = ({ label, onChange, value }) => {
  return (
    <Form.Group>
      <Form.Label className="text-light">{label}</Form.Label>
      <Form.Control onChange={onChange} value={value} />
    </Form.Group>
  );
};

export default CustomSearchBar;
