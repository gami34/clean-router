import routeWrapper from './lib/hocs/router-wrapper'

export const useCleanRouter = (loader: React.ReactElement) => {
  const mainCompoenent = (path: string, component: React.ReactElement, subComponents?: Array<[string, React.ReactElement, React.ReactElement, Array<[string, React.ReactElement, React.ReactElement]>?]>) =>
    routeWrapper(path, component, loader, subComponents)

  const subComponent = (path: string, component: React.ReactElement, subComponents?: Array<[string, React.ReactElement, React.ReactElement]>, subLoader = loader): any => [path, component, subLoader, subComponents]
  return [mainCompoenent, subComponent]
}
