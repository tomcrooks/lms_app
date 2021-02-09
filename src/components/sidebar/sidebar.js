import { Menu } from "evergreen-ui";
import React from "react";
import { MenuItem } from "./menu-item";

export const Sidebar = () => (
  <Menu>
    <Menu.Group title="teams">
      <MenuItem path="/" title="Teams"></MenuItem>
      <MenuItem path="/edit" title="Add Team" />
    </Menu.Group>
    <Menu.Divider />
    <Menu.Group title="fixtures">
      <MenuItem path="/" title="Fixtures"></MenuItem>
      <MenuItem path="/edit" title="Add Fixture" />
    </Menu.Group>
    <Menu.Divider />
    <Menu.Group title="results">
      <MenuItem path="/" title="Results"></MenuItem>
      <MenuItem path="/edit" title="Add Result" />
    </Menu.Group>
    <Menu.Divider />
    <Menu.Group title="users">
      <MenuItem path="/" title="Users"></MenuItem>
      <MenuItem path="/edit" title="Add User" />
      <MenuItem path="/edit" title="Edit User" />
      <MenuItem path="/edit" title="Delete User" />
    </Menu.Group>
    <Menu.Divider />
  </Menu>
);
