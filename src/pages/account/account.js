import React from 'react'
import { Redirect, Route, Switch, useHistory } from 'react-router'
import ProfilePage from "./profile/profile";
import SettingsPage from "./settings/settings";
import MyCollectionsPage from "./collection/collection";
import { userSelector } from '../../redux/auth/selector';
import { useSelector } from "react-redux";
import LogoutPage from './LogoutPage';

export default function AccountPages() {
  const user = useSelector(userSelector)
  if( !user ) {
    return <Redirect to="/login" />;
  }
  
  return (
    <Switch>
      <Route exact path="/account/profile" component={ProfilePage} />
      <Route exact path="/account/collections" component={MyCollectionsPage} />
      <Route exact path="/account/favorites" component={ProfilePage} />
      <Route exact path="/account/settings" component={SettingsPage} />
      <Route exact path="/account/logout" component={LogoutPage} />
    </Switch>
  )
}
