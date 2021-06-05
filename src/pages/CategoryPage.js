import React from 'react'
import { Route, Switch } from 'react-router'
import Art from './category/Art'
import Collectible from './category/Collectible'
import Audio from './category/Audio'
import Video from './category/Video'
import Sport from './category/Sport'

export default function CategoryPage(props) {
  return (
    <div className="flex">
      <Switch>
        <Route path="/collection/art" component={Art} />
        <Route path="/collection/audio" component={Audio} />
        <Route path="/collection/video" component={Video} />
        <Route path="/collection/collectible" component={Collectible} />
        <Route path="/collection/sports" component={Sport} />
      </Switch>
    </div>
  )
}
