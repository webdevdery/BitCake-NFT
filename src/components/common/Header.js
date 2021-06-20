import {useState} from 'react';
import {Disclosure} from '@headlessui/react';
import {SearchIcon} from '@heroicons/react/solid';
import {
  MenuIcon,
  XIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/outline';
import {Link, useLocation} from 'react-router-dom';
import SubMenu from './SubMenu';
import RedirectMenu from './RedirectMenu';
import CustomButton from './Button';
import {useDispatch, useSelector} from 'react-redux';
import {userSelector} from '../../redux/auth/selector';
import {login} from '../../redux/auth/action';

export default function Header() {
  const [showMarketplaceMenu, setshowMarketplaceMenu] = useState(false);
  const [showStatsMenu, setshowStatsMenu] = useState(false);
  const [showResourcesMenu, setshowResourcesMenu] = useState(false);
  const [showAccountMenu, setshowAccountMenu] = useState(false);
  const handleMarketplaceHover = () => {
    setshowMarketplaceMenu(true);
  };
  const handleMarketplaceLeave = () => {
    setshowMarketplaceMenu(false);
  };
  const handleStatsHover = () => {
    setshowStatsMenu(true);
  };
  const handleStatsLeave = () => {
    setshowStatsMenu(false);
  };
  const handleResourcesHover = () => {
    setshowResourcesMenu(true);
  };
  const handleResourcesLeave = () => {
    setshowResourcesMenu(false);
  };
  const handleAccountHover = () => {
    setshowAccountMenu(true);
  };
  const handleAccountLeave = () => {
    setshowAccountMenu(false);
  };
  const marketPlaceMenus = [
    {
      value: 'All NFTs',
      link: '/collections',
      svgPath: '/assets/icons/nav/all.png',
    },
    {
      value: 'Audio',
      link: '/collections/audio',
      svgPath: '/assets/icons/nav/audio.png',
    },
    {
      value: 'Video',
      link: '/collections/video',
      svgPath: '/assets/icons/nav/video.png',
    },
    {
      value: 'Digital Art',
      link: '/collections/art',
      svgPath: '/assets/icons/nav/art.png',
    },
    {
      value: 'Artists',
      link: '/artists',
      svgPath: '/assets/icons/nav/artist.png',
    },
    {
      value: 'All Collections',
      link: '/collections',
      svgPath: '/assets/icons/nav/gallery.png',
    },
  ];
  const statsMenus = [
    // {
    //   value: 'Charts',
    //   link: '/charts',
    //   svgPath: '',
    // },
    {
      value: 'Activity',
      link: '/activity',
      svgPath: '',
    },
  ];
  const resourcesMenu = [
    {
      value: 'Help Center',
      link: 'https://bitcake.freshdesk.com/support/home',
      svgPath: '',
    },
    {
      value: 'BitCake (BCK) White Paper',
      link: '',
      svgPath: '',
    },
    {
      value: 'Design an NFT',
      link: 'https://cakeshoplabs.com',
      svgPath: '',
    },
    {
      value: 'Telegram Community',
      link: 'https://t.me/bitcakeclub',
      svgPath: '',
    },
    {
      value: 'Become a Partner',
      link: 'partners@bitcake.io',
      svgPath: '',
    },
    // {
    //   value: 'Subscribe to Newsletter',
    //   link: '',
    //   svgPath: '',
    // },
  ];
  const accountMenu = [
    {
      value: 'My Profile',
      link: '/account/profile',
      svgPath: '',
    },
    {
      value: 'My Collections',
      link: '/account/collections',
      svgPath: '',
    },
    {
      value: 'My Favorites',
      link: '/account/favorites',
      svgPath: '',
    },
    {
      value: 'My Account Settings',
      link: '/account/settings',
      svgPath: '',
    },
    {
      value: 'Logout',
      link: '/account/logout',
      svgPath: '',
    },
  ];

  const location = useLocation();
  const {pathname} = location;

  const dispatch = useDispatch();

  const user = useSelector(userSelector);
  return (
    <Disclosure
      as="div"
      className="bg-white shadow z-30 fixed w-full xl:px-40 lg:px-16 md:px-16 sm:px-20 px-2"
    >
      {({open}) => (
        <>
          <div className="">
            <div className="flex justify-between h-16">
              {/* Logo */}
              <div className="flex px-2 lg:px-0 w-40">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="/assets/images/logo-mobile.png"
                      alt="Workflow"
                    />
                  </Link>
                  <Link to="/">
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src="/assets/images/logo-white.png"
                      alt="Workflow"
                    />
                  </Link>
                </div>
              </div>
              <div className="flex w-full">
                {/* Search Bar */}
                <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                  <div className="max-w-lg w-full lg:max-w-md">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-primary sm:text-sm"
                        placeholder="Search"
                        type="search"
                      />
                    </div>
                  </div>
                </div>
                {/* Nav Menu */}
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  <nav className="flex space-x-2">
                    <div className="mt-auto font-bold text-gray-700">
                      <div
                        className={`cursor-pointer relative border-b-2 border-white text-gray-500 hover:border-primary hover:text-gray-600 text-md p-3 ${
                          pathname.startsWith('/collection') ||
                          pathname.startsWith('/artists')
                            ? 'border-primary text-gray-600'
                            : ''
                        }`}
                        onMouseEnter={handleMarketplaceHover}
                        onMouseLeave={handleMarketplaceLeave}
                      >
                        <Link to="/collection">Marketplace</Link>
                        <SubMenu
                          menuItems={marketPlaceMenus}
                          isShow={showMarketplaceMenu}
                          orientation="right"
                        />
                      </div>
                    </div>
                    <div className="mt-auto font-bold text-gray-700">
                      <div
                        className={`cursor-pointer relative border-b-2 border-white text-gray-500 hover:border-primary hover:text-gray-600 text-md p-3 ${
                          pathname.startsWith('/charts') ||
                          pathname.startsWith('/activity')
                            ? 'border-primary text-gray-600'
                            : ''
                        }`}
                        onMouseEnter={handleStatsHover}
                        onMouseLeave={handleStatsLeave}
                      >
                        <Link to="/charts">Stats</Link>
                        <SubMenu
                          menuItems={statsMenus}
                          isShow={showStatsMenu}
                          orientation="right"
                        />
                      </div>
                    </div>
                    <div className="mt-auto font-bold text-gray-700">
                      <div
                        className={`cursor-pointer relative border-b-2 border-white text-gray-500 hover:border-primary hover:text-gray-600 text-md p-3 ${
                          pathname.startsWith('/resoureces')
                            ? 'border-primary text-gray-600'
                            : ''
                        }`}
                        onMouseEnter={handleResourcesHover}
                        onMouseLeave={handleResourcesLeave}
                      >
                        <Link to="/resoureces">Resources</Link>
                        <RedirectMenu
                          menuItems={resourcesMenu}
                          isShow={showResourcesMenu}
                          orientation="right"
                        />
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Profile */}
              <div
                className="hidden w-36 lg:flex lg:items-center relative cursor-pointer border-b-2 border-white text-gray-500 hover:border-primary hover:text-gray-600 text-md p-3 flex items-end font-bold"
                onMouseEnter={handleAccountHover}
                onMouseLeave={handleAccountLeave}
              >
                <Link to="/account/profile" className="h-full w-full">
                  <div className="h-full w-36 flex items-end">
                    My Account
                    {showAccountMenu ? (
                      <ChevronUpIcon className="w-5 h-5 ml-2 mb-0.5" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5 ml-2 mb-0.5" />
                    )}
                  </div>
                </Link>
                <SubMenu menuItems={accountMenu} isShow={showAccountMenu} />
              </div>

              {/* Wallet */}
              {!user.address ? (
                <div className="hidden lg:flex lg:items-center w-64 ml-2">
                  <CustomButton
                    label="Connect to Wallet"
                    styled="solid"
                    onClick={() => {
                      if (!user.address) {
                        dispatch(login());
                      }
                    }}
                  />
                </div>
              ) : (
                <div className="hidden lg:flex lg:items-center w-20 ml-2">
                  <img
                    src={`${process.env.REACT_APP_API_PATH}/${user.avatar}`}
                    className="rounded-full w-12 h-12 object-cover"
                    alt="avatar"
                  />
                </div>
              )}
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Disclosure as="div" className="w-full">
                {({open}) => (
                  <>
                    <Disclosure.Button className="w-full h-10 flex justify-between px-2 py-1 border-b border-gray-400 items-center focus:outline-none">
                      <div className="flex items-center space-x-2">
                        Marketplace
                      </div>
                      <ChevronDownIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-5 h-5`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel>
                      {marketPlaceMenus.map((item, index) => {
                        return (
                          <Link to={item.link} key={index} className="bg-red">
                            <div className="text-left p-3 font-medium flex items-center hover:bg-blue-50 hover:shadow-md border-b border-primary-light bg-white z-50">
                              {item.svgPath && (
                                <img
                                  alt="MenuImage"
                                  src={item.svgPath}
                                  className="w-6 h-6"
                                ></img>
                              )}
                              <span className="ml-3">{item.value}</span>
                            </div>
                          </Link>
                        );
                      })}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="w-full">
                {({open}) => (
                  <>
                    <Disclosure.Button className="w-full h-10 flex justify-between px-2 py-1 border-b border-gray-400 items-center focus:outline-none">
                      <div className="flex items-center space-x-2">Stats</div>
                      <ChevronDownIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-5 h-5`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel>
                      {statsMenus.map((item, index) => {
                        return (
                          <Link to={item.link} key={index} className="bg-red">
                            <div className="text-left p-3 font-medium flex items-center hover:bg-blue-50 hover:shadow-md border-b border-primary-light bg-white z-50">
                              {item.svgPath && (
                                <img
                                  alt="MenuImage"
                                  src={item.svgPath}
                                  className="w-6 h-6"
                                ></img>
                              )}
                              <span className="ml-3">{item.value}</span>
                            </div>
                          </Link>
                        );
                      })}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="w-full">
                {({open}) => (
                  <>
                    <Disclosure.Button className="w-full h-10 flex justify-between px-2 py-1 border-b border-gray-400 items-center focus:outline-none">
                      <div className="flex items-center space-x-2">
                        Resources
                      </div>
                      <ChevronDownIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-5 h-5`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel>
                      {resourcesMenu.map((item, index) => {
                        return (
                          <Link to={item.link} key={index} className="bg-red">
                            <div className="text-left p-3 font-medium flex items-center hover:bg-blue-50 hover:shadow-md border-b border-primary-light bg-white z-50">
                              {item.svgPath && (
                                <img
                                  alt="MenuImage"
                                  src={item.svgPath}
                                  className="w-6 h-6"
                                ></img>
                              )}
                              <span className="ml-3">{item.value}</span>
                            </div>
                          </Link>
                        );
                      })}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
