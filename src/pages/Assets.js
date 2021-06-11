import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Asset from './assets/Asset';
import New from './assets/New';

export default function Assets() {
  // const [buyNow, setbuyNow] = useState(false);
  // const [onAuction, setonAuction] = useState(false);
  // const [news, setNews] = useState(false);
  // const [hasOffers, sethasOffers] = useState(false);

  return (
    <div className="flex">
      <Switch>
        <Route path="/assets" component={Asset} />
        <Route path="/assets/new" component={New} />
      </Switch>
    </div>
  );
}
