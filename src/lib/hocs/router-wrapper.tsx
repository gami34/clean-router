/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react'
import { Route } from 'react-router-dom'

const getSingleRoute = ({ id, path, loader, component }: { id?: number; path: string; loader: React.ReactElement; component: React.ReactElement }) => <Route key={id} path={path} element={<Suspense fallback={loader}>{component}</Suspense>} />

export default function routeWrapper(
  path: string,
  component: React.ReactElement,
  loader: React.ReactElement,
  subComponent?: Array<[string, React.ReactElement, React.ReactElement, Array<[string, React.ReactElement, React.ReactElement, Array<[string, React.ReactElement, React.ReactElement, Array<[string, React.ReactElement, React.ReactElement]>?]>?]>?]>
) {
  if (subComponent?.length)
    return (
      <Route path={path} element={<Suspense fallback={loader}>{component}</Suspense>}>
        {subComponent.map(([path1, component, loader, subRoutes], idx) => {
          if (subRoutes?.length)
            return (
              <Route key={idx} path={path1} element={<Suspense fallback={loader}>{component}</Suspense>}>
                {subRoutes.map(([path2, component, loader, subRoutes], idy) => {
                  if (subRoutes?.length)
                    return (
                      <Route key={idy} path={path2} element={<Suspense fallback={loader}>{component}</Suspense>}>
                        {subRoutes.map(([path3, component, loader, subRoutes], idy) => {
                          if (subRoutes?.length)
                            return (
                              <Route key={idy} path={path3} element={<Suspense fallback={loader}>{component}</Suspense>}>
                                {subRoutes?.map(([path4, component, loader], idy) =>
                                  getSingleRoute({
                                    path: path4,
                                    id: idy,
                                    loader,
                                    component
                                  })
                                )}
                              </Route>
                            )
                          return getSingleRoute({
                            path: path3,
                            id: idy,
                            loader,
                            component
                          })
                        })}
                      </Route>
                    )
                  return getSingleRoute({
                    path: path2,
                    id: idy,
                    loader,
                    component
                  })
                })}
              </Route>
            )
          return getSingleRoute({ path: path1, id: idx, loader, component })
        })}
      </Route>
    )
  return getSingleRoute({ path, loader, component })
}
