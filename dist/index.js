function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

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

const NavigationContext = /*#__PURE__*/React.createContext(null);

if (process.env.NODE_ENV !== "production") {
  NavigationContext.displayName = "Navigation";
}

const LocationContext = /*#__PURE__*/React.createContext(null);

if (process.env.NODE_ENV !== "production") {
  LocationContext.displayName = "Location";
}

const RouteContext = /*#__PURE__*/React.createContext({
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

var getSingleRoute = function getSingleRoute(_ref) {
  var id = _ref.id,
    path = _ref.path,
    loader = _ref.loader,
    component = _ref.component;
  return React__default.createElement(Route, {
    key: id,
    path: path,
    element: React__default.createElement(React.Suspense, {
      fallback: loader
    }, component)
  });
};
function routeWrapper(path, component, loader, subComponent) {
  if (subComponent !== null && subComponent !== void 0 && subComponent.length) return React__default.createElement(Route, {
    path: path,
    element: React__default.createElement(React.Suspense, {
      fallback: loader
    }, component)
  }, subComponent.map(function (_ref2, idx) {
    var path1 = _ref2[0],
      component = _ref2[1],
      loader = _ref2[2],
      subRoutes = _ref2[3];
    if (subRoutes !== null && subRoutes !== void 0 && subRoutes.length) return React__default.createElement(Route, {
      key: idx,
      path: path1,
      element: React__default.createElement(React.Suspense, {
        fallback: loader
      }, component)
    }, subRoutes.map(function (_ref3, idy) {
      var path2 = _ref3[0],
        component = _ref3[1],
        loader = _ref3[2],
        subRoutes = _ref3[3];
      if (subRoutes !== null && subRoutes !== void 0 && subRoutes.length) return React__default.createElement(Route, {
        key: idy,
        path: path2,
        element: React__default.createElement(React.Suspense, {
          fallback: loader
        }, component)
      }, subRoutes.map(function (_ref4, idy) {
        var path3 = _ref4[0],
          component = _ref4[1],
          loader = _ref4[2],
          subRoutes = _ref4[3];
        if (subRoutes !== null && subRoutes !== void 0 && subRoutes.length) return React__default.createElement(Route, {
          key: idy,
          path: path3,
          element: React__default.createElement(React.Suspense, {
            fallback: loader
          }, component)
        }, subRoutes === null || subRoutes === void 0 ? void 0 : subRoutes.map(function (_ref5, idy) {
          var path4 = _ref5[0],
            component = _ref5[1],
            loader = _ref5[2];
          return getSingleRoute({
            path: path4,
            id: idy,
            loader: loader,
            component: component
          });
        }));
        return getSingleRoute({
          path: path3,
          id: idy,
          loader: loader,
          component: component
        });
      }));
      return getSingleRoute({
        path: path2,
        id: idy,
        loader: loader,
        component: component
      });
    }));
    return getSingleRoute({
      path: path1,
      id: idx,
      loader: loader,
      component: component
    });
  }));
  return getSingleRoute({
    path: path,
    loader: loader,
    component: component
  });
}

var useCleanRouter = function useCleanRouter(loader) {
  var mainCompoenent = function mainCompoenent(path, component, subComponents) {
    return routeWrapper(path, component, loader, subComponents);
  };
  var subComponent = function subComponent(path, component, subComponents, subLoader) {
    if (subLoader === void 0) {
      subLoader = loader;
    }
    return [path, component, subLoader, subComponents];
  };
  return [mainCompoenent, subComponent];
};

exports.useCleanRouter = useCleanRouter;
//# sourceMappingURL=index.js.map
