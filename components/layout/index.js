import React, { useState, Fragment } from "react";
import Head from "next/head";
import Router from "next/router";
import Link from "next/link";
import nProgress from "nprogress";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { isAuth, logOut } from "../../helpers/auth";

Router.onRouteChangeStart = (url) => nProgress.start();
Router.onRouteChangeComplete = (url) => nProgress.done();
Router.onRouteChangeError = (url) => nProgress.done();

const Layout = ({ children, pageTitle }) => {
  // const [activeSideBar, setActiveSideBar] = useState(false);

  const headSection = () => (
    <Head>
      <title>{pageTitle}</title>
    </Head>
  );
  const navigation = [
    {
      name: "NewsFeed",
      href: "/",
      current: pageTitle === "Newsfeed" ? true : false,
    },
    {
      name: "Friends",
      href: "/user/friends",
      current: pageTitle === "Friends" ? true : false,
    },
    {
      name: "Videos",
      href: "/",
      current: pageTitle === "Videos" ? true : false,
    },
    {
      name: "Saved Media",
      href: "/",
      current: pageTitle === "Saved Media" ? true : false,
    },
  ];

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <>
      {headSection()}
      <div className="sticky top-0 z-20 select-none">
        <Disclosure as="nav" className="bg-green-800">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-green-400 hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0 flex items-center hover:cursor-pointer">
                      <Link href="/">
                        <img
                          className="block lg:hidden h-8 w-auto"
                          src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                          alt="logo"
                        />
                      </Link>
                      <Link href="/">
                        <img
                          className="hidden lg:block h-8 w-auto"
                          src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                          alt="logo"
                        />
                      </Link>
                    </div>
                    <div className="hidden sm:block sm:ml-6 hover:cursor-pointer">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                          <div
                            key={item.name}
                            className={classNames(
                              item.current
                                ? "bg-green-600 text-white hover:cursor-pointer"
                                : "text-green-200 hover:bg-green-700 hover:text-white",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            <Link href={item.href}>
                              <span className="hover:cursor-pointer">
                                {item.name}
                              </span>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <Link href="/user/notifications">
                      <div className="outline-none relative">
                        <button
                          type="button"
                          className="bg-green-800 outline-none p-1 rounded-full text-green-100 hover:text-white"
                        >
                          <span className="sr-only">View notifications</span>
                          {isAuth() && (
                            <div className="absolute top-1 md:top-0 md:right-1 right-2 duration-500">
                              <span className="flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-300"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600">
                                  <span className="text-sm absolute" style={{top:"-4px", left:"3px", fontSize:"11px"}}>
                                    3
                                  </span>
                                </span>
                              </span>
                            </div>
                          )}
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </Link>
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="bg-green-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>

                          {/* <div className="bg-gray-300 rounded-3xl p-1 px-3">
                            <i className="fa fa-user text-xl"></i>
                          </div> */}

                          <img
                            className="h-10 w-10 rounded-full"
                            src="/static/images/person-placeholder.jpg"
                            alt=""
                          />

                          {/* else if user is logged in ==> <img
                            className="h-10 w-10 rounded-full"
                            src="/static/images/person-placeholder.jpg"
                            alt=""
                          /> */}
                        </Menu.Button>
                      </div>

                      {isAuth() && (
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              {({ active }) => (
                                <Link href="/user">
                                  <a
                                    className={classNames(
                                      active
                                        ? "bg-green-100"
                                        : "block px-4 py-2 text-sm text-green-700 hover:bg-green-100"
                                    )}
                                  >
                                    Your Profile
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link href="/">
                                  <a
                                    className={classNames(
                                      active
                                        ? "bg-green-100"
                                        : "block px-4 py-2 text-sm text-green-700 hover:bg-green-100"
                                    )}
                                  >
                                    Settings
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  className="hover:cursor-pointer block px-4 py-2 text-sm text-green-700 hover:bg-green-100"
                                  onClick={() => {
                                    if (
                                      window.confirm("Do you want to log out?")
                                    )
                                      logOut();
                                  }}
                                >
                                  Sign out
                                </a>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      )}
                    </Menu>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden ">
                <div className="px-2 pt-2 pb-3 space-y-1 absolute bg-green-900 w-1/2 -z-1">
                  {navigation.map((item) => (
                    <Link href={item.href} key={item.name}>
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        className={classNames(
                          item.current
                            ? " text-white hover:cursor-default"
                            : "text-green-300 hover:bg-green-700 hover:cursor-pointer hover:text-white",
                          "block px-3 py-2 rounded-md text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    </Link>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
      <div className="children_component_div">{children}</div>
    </>
  );
};

export default Layout;
