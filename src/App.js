import './App.css';
import React, {useEffect} from 'react';
import {
  Route,
  Switch,
  BrowserRouter,
  useHistory,
  Redirect,
} from 'react-router-dom';
import Header from './components/common/Header';
import Home from './pages/Home';
import Footer from './components/common/Footer';
import Assets from './pages/Assets';
import CategoryPage from './pages/CategoryPage';
import AuctionPage from './pages/AuctionPage';
import CollectionPage from './pages/collectionPage';
import CollectionsPage from './pages/CollectionsPage';
import ArtistsPage from './pages/artistsPage';
import ArtistPage from './pages/artistPage';
import CreatePage from './pages/CreatePage';
import ChartsPage from './pages/stats/charts';
import ActivityPage from './pages/stats/activity';
import LoginPage from './pages/account/login';
import AccountPages from './pages/account/account';
import {getUser} from './redux/auth/action';
import {useDispatch} from 'react-redux';
import Spinner from './components/common/spinner';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
require('dotenv').config();

export const createNotification = (type, content) => {
  switch (type) {
    case 'info':
      NotificationManager.info(content);
      break;
    case 'success':
      NotificationManager.success(content, 'Success', 3000);
      break;
    case 'warning':
      NotificationManager.warning(content, 'Warning', 3000);
      break;
    case 'error':
      NotificationManager.error(content, 'Error', 5000);
      break;
  }
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div className="App">
      {/* <div className="fixed w-screen h-screen z-60">
        <Spinner active={true} />
      </div> */}
      <BrowserRouter>
        <Header></Header>
        <div className="mt-16 absolute w-full overflow-x-hidden sm:px-20 md:px-16 xl:px-40 px-2">
          <Switch>
            <Route path="/account" component={AccountPages} />

            <Route exact path="/" component={Home} />
            <Route exact path="/collection" component={Assets} />
            <Route path="/collection" component={CategoryPage} />
            <Route path="/auction/:id" component={AuctionPage} />
            <Route exact path="/artists" component={ArtistsPage} />
            <Route exact path="/collections" component={CollectionsPage} />
            <Route path="/artists/:id" component={ArtistPage} />
            <Route path="/collections/:id" component={CollectionPage} />
            <Route path="/create" component={CreatePage} />
            <Route path="/charts" component={ChartsPage} />
            <Route path="/activity" component={ActivityPage} />
            <Route exact path="/login" component={LoginPage} />
            <Redirect to="/login" />
          </Switch>
          <Footer></Footer>
        </div>
        <NotificationContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
