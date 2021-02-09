import './App.css';
import React from "react";
import { Pane, majorScale,  } from "evergreen-ui";
import { Theme } from "./theme";
import { Route, Switch } from 'react-router-dom'

import { Sidebar } from './components/sidebar/sidebar.js'
import { TeamList } from './components/teams/team-list'
import { EditTeam } from './components/teams/edit-team'
// import AddTeam from './components/add-team'
// import CreateUser from './components/create-user'

const App = () => (
  <Theme>
    <title>Last Man Standing</title>
    <link href="/favicon.ico" rel="icon" />
    <Pane display="flex" flex={1} overflowY="hidden">
        <Pane borderRight overflowY="auto" width={majorScale(32)}>
          <Sidebar/>
          <br/>
        </Pane>
        <Pane
            display="flex"
            flex={1}
            flexDirection="column"
            overflowY="auto"
        >
        <Switch>
          <Route path="/" component={TeamList} exact />
          <Route path="/edit" component={EditTeam} />
        </Switch>
        </Pane>
    </Pane>
  </Theme>
);

export default App
