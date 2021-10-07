import React from 'react';
import { FaReact } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const IconButton = (props) => (
  <>
    <Button variant="primary" className="homeBTN">
      <FaReact /> React v16
    </Button>
  </>
);

export default IconButton;
