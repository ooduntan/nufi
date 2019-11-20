import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

import { Teams, Conferences } from './Screens'
import { SideNav } from './Components'
import { AppWrapper } from './BaseStyles'

export const AppRouting = () => (
  <AppWrapper>
    <SideNav />
    <Switch>
      <Redirect exact from="/" to="teams" />
      <Route exact path="/teams" component={Teams} />
      <Route exact path="/conferences" component={Conferences} />
    </Switch>
  </AppWrapper>
)