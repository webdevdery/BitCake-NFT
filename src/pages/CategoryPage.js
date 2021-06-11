import React from 'react';
import {Route, Switch} from 'react-router';
import Art from './category/Art';
import Collectible from './category/Collectible';
import Audio from './category/Audio';
import Video from './category/Video';
import Sport from './category/Sport';

export default function CategoryPage(props) {
  return (
    <div className="flex">
      <Switch>
        <Route path="/category/art" component={Art} />
        <Route path="/category/audio" component={Audio} />
        <Route path="/category/video" component={Video} />
        <Route path="/category/collectible" component={Collectible} />
        <Route path="/category/sports" component={Sport} />
      </Switch>
    </div>
  );
}
