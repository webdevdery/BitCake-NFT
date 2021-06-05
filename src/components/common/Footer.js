/* This example requires Tailwind CSS v2.0+ */

import {navigation} from '../../constants/home';
import CustomButton from './Button';

export default function Footer() {
  return (
    <footer
      className="bg-gray-800 overflow-x-hidden w-screen left-0 xl:-ml-40 lg:-ml-16 md:-ml-16 sm:-ml-20 -ml-2 sm:px-20 md:px-16 lg:px-16 xl:px-40"
      aria-labelledby="footerHeading"
    >
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="w-full">
        <div className="lg:py-16 lg:px-0 md:px-16 sm:px-2">
          <div className="flex lg:flex-nowrap flex-wrap lg:space-x-32 border-b border-gray-200 pb-8">
            <div className="mt-8 xl:mt-0 text-left lg:w-1/2 w-full sm:px-0 px-2">
              <div className="text-xl font-semibold text-white tracking-wider">
                Get the freshest BitCake updates
              </div>
              <form className="mt-6 sm:flex sm:max-w-md">
                <label htmlFor="emailAddress" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  name="emailAddress"
                  id="emailAddress"
                  autoComplete="email"
                  required
                  className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <CustomButton styled="solid" label="Sign up" />
                </div>
              </form>
            </div>
            <div className="mt-8 xl:mt-0 text-left lg:w-1/2 w-full space-y-4 sm:px-0 px-2">
              <div className="text-lg font-semibold text-white tracking-wider">
                Join the community
              </div>

              <div className="flex space-x-2">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white rounded-md"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-12 w-12" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 lg:gap-8 md:gap-4 mt-8">
            <div className="lg:mt-12 grid grid-cols-2 lg:gap-8 gap-4 xl:mt-0 lg:col-span-2 sm:px-0 px-2">
              <div className="md:grid md:grid-cols-2 lg:gap-8 gap-4">
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white tracking-wider">
                    Marketplace
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {navigation.marketplaces.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-white hover:text-primary"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white tracking-wider">
                    My Account
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {navigation.myaccount.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-white hover:text-primary"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="lg:mt-12 mt-8 text-left">
                    <h3 className="text-lg font-semibold text-white tracking-wider">
                      Stats
                    </h3>
                    <ul className="mt-4 space-y-4">
                      {navigation.stats.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-base text-white hover:text-primary"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 lg:gap-8 gap-4">
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white tracking-wider">
                    Resources
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {navigation.resources.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-white hover:text-primary"
                          target={item.option === 'download' ? '_blank' : ''}
                          rel="noreferrer"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-left md:pl-8">
                  <h3 className="text-lg font-semibold text-white tracking-wider">
                    Company
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-white hover:text-primary"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-3 xl:col-span-1 text-left mt-8 xl:mt-0 sm:px-0 px-2">
              <img
                className="h-10"
                src="/assets/images/logo-dark.png"
                alt="Company name"
              />
              <p className="text-white text-base">
                BitCake is a next generation marketplace where artists and
                collectors can create, sell and collect digital items secured
                with blockchain.
              </p>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2021 BitCake Inc. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
