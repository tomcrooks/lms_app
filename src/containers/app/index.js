// import { AppProps } from "next/app";
// import Head from "next/head";
import React from "react";
import { Pane, majorScale,  } from "evergreen-ui";
// import { ApolloClient } from "./apollo-client";
// import { Cookies } from "./cookies";
// import { Portals } from "./portals";
import { Theme } from "./theme";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Sidebar } from './layouts/sidebar/sidebar.js'
import TeamList from './components/team-list'
import EditTeam from './components/edit-team.js'
import AddTeam from './components/add-team'
import CreateUser from './components/create-user'

export const AppContainer = ({ Component, pageProps }) => (
    <Theme>
        <title>Pimberly | Product Information Management</title>
        <link href="/favicon.ico" rel="icon" />
        <Pane display="flex" flex={1} overflowY="hidden">
            <Pane borderRight overflowY="auto" width={majorScale(32)}>
                <Router>
                    <Sidebar>
                        <br />
                        <Route path="/" component={TeamList} />
                        <Route path="/edit/:id" component={EditTeam} />
                        <Route path="/create" component={AddTeam} />
                        <Route path="/user" component={CreateUser} />
                    </Sidebar>
                </Router>
            </Pane>
            <Pane
                display="flex"
                flex={1}
                flexDirection="column"
                overflowY="auto"
            >
            </Pane>
        </Pane>
    </Theme>
);
