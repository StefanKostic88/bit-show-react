import React from "react";

import { Form } from "react-bootstrap";

const CustomSearchBar = ({ label, onChange }) => {
  return (
    <Form.Group>
      <Form.Label className="text-light">{label}</Form.Label>
      <Form.Control onChange={onChange} />
    </Form.Group>
  );
};

export default CustomSearchBar;
