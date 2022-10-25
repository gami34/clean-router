# clean-router

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/clean-router.svg)](https://www.npmjs.com/package/clean-router) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save clean-router
```

## Usage

```tsx
import React, { Component } from 'react'
import { useCleanRouter } from 'clean-router'

class Example extends Component {
  
  const [mainRouteHandler, subRouteHandler] = useCleanRouter(<Loader />)

  render() {
    return (
      <Router>
        {mainRouteHandler("/dash", <DashOutlet>, [
            subRouteHandler("", <Home />),                       // /dash/          
            subRouteHandler("settings", <Home />),               // /dash/settings  
            subRouteHandler("profile", <Profile />),             // /dash/profile   
            subRouteHandler("email", <EmailOutlet />, [
                subRouteHandler("", <Inbox />),                  // /dash/email
                subRouteHandler("spam", <Spam />),               // /dash/email/spam
            ]),
            subRouteHandler("kanban", <Kanban />,                // /dash/kanban
            subRouteHandler("account", <AccountOutlet />, [
                subRouteHandler("", <AccountHome />),            // /dash/account   
                subRouteHandler("credit", <CreditOutlet />, [
                    subRouteHandler("internal", <Inbox />),      // /dash/account/credit/internal
                    subRouteHandler("external", <Spam />),       // /dash/account/credit/external
                ]),                    
          ]),
        ])}
      </Router>)
  }
}
```

## Note

The utility can handle up to 4 level deep routes with param and text counting as one, e.g "user/:userId" is considered as a single count. also "acount/:accountId/:planId" is also a single count"

example of a 4 level deep routes as mentioned above
/dash/account/credit/internal

## Contributions and Suggestion

you can contribute to the utility as that will be greately appreciated.

## License

MIT © [gami34](https://github.com/gami34)
