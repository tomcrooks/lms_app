import { Menu, useTheme } from "evergreen-ui";
import React from "react";
import { Link } from 'react-router-dom'

export const MenuItem = ({ path, title }) => {
  return (
      <Link to={path}>
        <Menu.Item>{title}</Menu.Item>
      </Link>
  );
};
