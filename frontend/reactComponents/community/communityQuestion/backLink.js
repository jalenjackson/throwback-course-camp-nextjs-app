import React from 'react';
import {Link} from "../../../../routes";
import {Icon} from "antd";

const BackLink = () => (
  <p>
    <Link to='/community'>
      <a>
        <Icon type="arrow-left" /> Back
      </a>
    </Link>
  </p>
);

export default BackLink