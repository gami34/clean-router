import React, { createContext, Suspense } from 'react';

/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

const NavigationContext = /*#__PURE__*/createContext(null);

if (process.env.NODE_ENV !== "production") {
  NavigationContext.displayName = "Navigation";
}

const LocationContext = /*#__PURE__*/createContext(null);

if (process.env.NODE_ENV !== "production") {
  LocationContext.displayName = "Location";
}

const RouteContext = /*#__PURE__*/createContext({
  outlet: null,
  matches: []
});

if (process.env.NODE_ENV !== "production") {
  RouteContext.displayName = "Route";
}

function invariant(cond, message) {
  if (!cond) throw new Error(message);
}

/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/docs/en/v6/api#route
 */
function Route(_props) {
   process.env.NODE_ENV !== "production" ? invariant(false, "A <Route> is only ever to be used as the child of <Routes> element, " + "never rendered directly. Please wrap your <Route> in a <Routes>.") : invariant(false) ;
}
//# sourceMappingURL=index.js.map

const getSingleRoute = ({
  id,
  path,
  loader,
  component
}) => React.createElement(Route, {
  key: id,
  path: path,
  element: React.createElement(Suspense, {
    fallback: loader
  }, component)
});
function routeWrapper(path, component, loader, subComponent) {
  if (subComponent !== null && subComponent !== void 0 && subComponent.length) return React.createElement(Route, {
    path: path,
    element: React.createElement(Suspense, {
      fallback: loader
    }, component)
  }, subComponent.map(([path1, component, loader, subRoutes], idx) => {
    if (subRoutes !== null && subRoutes !== void 0 && subRoutes.length) return React.createElement(Route, {
      key: idx,
      path: path1,
      element: React.createElement(Suspense, {
        fallback: loader
      }, component)
    }, subRoutes.map(([path2, component, loader, subRoutes], idy) => {
      if (subRoutes !== null && subRoutes !== void 0 && subRoutes.length) return React.createElement(Route, {
        key: idy,
        path: path2,
        element: React.createElement(Suspense, {
          fallback: loader
        }, component)
      }, subRoutes.map(([path3, component, loader, subRoutes], idy) => {
        if (subRoutes !== null && subRoutes !== void 0 && subRoutes.length) return React.createElement(Route, {
          key: idy,
          path: path3,
          element: React.createElement(Suspense, {
            fallback: loader
          }, component)
        }, subRoutes === null || subRoutes === void 0 ? void 0 : subRoutes.map(([path4, component, loader], idy) => getSingleRoute({
          path: path4,
          id: idy,
          loader,
          component
        })));
        return getSingleRoute({
          path: path3,
          id: idy,
          loader,
          component
        });
      }));
      return getSingleRoute({
        path: path2,
        id: idy,
        loader,
        component
      });
    }));
    return getSingleRoute({
      path: path1,
      id: idx,
      loader,
      component
    });
  }));
  return getSingleRoute({
    path,
    loader,
    component
  });
}

const useCleanRouter = loader => {
  const mainCompoenent = (path, component, subComponents) => routeWrapper(path, component, loader, subComponents);
  const subComponent = (path, component, subComponents, subLoader = loader) => [path, component, subLoader, subComponents];
  return [mainCompoenent, subComponent];
};

export { useCleanRouter };
//# sourceMappingURL=index.modern.js.map
