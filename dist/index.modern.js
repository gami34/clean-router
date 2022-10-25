import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

var getSingleRoute = function getSingleRoute(_ref) {
  var id = _ref.id,
    path = _ref.path,
    loader = _ref.loader,
    component = _ref.component;
  return React.createElement(Route, {
    key: id,
    path: path,
    element: React.createElement(Suspense, {
      fallback: loader
    }, component)
  });
};
function routeWrapper(path, component, loader, subComponent) {
  if (subComponent !== null && subComponent !== void 0 && subComponent.length) return React.createElement(Route, {
    path: path,
    element: React.createElement(Suspense, {
      fallback: loader
    }, component)
  }, subComponent.map(function (_ref2, idx) {
    var path1 = _ref2[0],
      component = _ref2[1],
      loader = _ref2[2],
      subRoutes = _ref2[3];
    if (subRoutes !== null && subRoutes !== void 0 && subRoutes.length) return React.createElement(Route, {
      key: idx,
      path: path1,
      element: React.createElement(Suspense, {
        fallback: loader
      }, component)
    }, subRoutes.map(function (_ref3, idy) {
      var path2 = _ref3[0],
        component = _ref3[1],
        loader = _ref3[2],
        subRoutes = _ref3[3];
      if (subRoutes !== null && subRoutes !== void 0 && subRoutes.length) return React.createElement(Route, {
        key: idy,
        path: path2,
        element: React.createElement(Suspense, {
          fallback: loader
        }, component)
      }, subRoutes.map(function (_ref4, idy) {
        var path3 = _ref4[0],
          component = _ref4[1],
          loader = _ref4[2],
          subRoutes = _ref4[3];
        if (subRoutes !== null && subRoutes !== void 0 && subRoutes.length) return React.createElement(Route, {
          key: idy,
          path: path3,
          element: React.createElement(Suspense, {
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
  var mainOutlet = function mainOutlet(path, component, subComponents) {
    return routeWrapper(path, component, loader, subComponents);
  };
  var subOutlet = function subOutlet(path, component, subComponents, subLoader) {
    if (subLoader === void 0) {
      subLoader = loader;
    }
    return [path, component, subLoader, subComponents];
  };
  return [mainOutlet, subOutlet];
};

export { useCleanRouter };
//# sourceMappingURL=index.modern.js.map
