This example was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It is linked to the clean-router package in the parent directory for development purposes.

You can run `npm install` and then `npm start` to test your package.


`
replace this:
 <Router>
       <Route path={path} element={<Suspense fallback={<loader />}>{component}</Suspense>}>
        <Route key={id} path={path} element={<Suspense fallback={loader}>{component}</Suspense>} /> />
      </Route>
  </Router>

with:

 <Router>
    mainComponent("/", <ElectionLogs />)
</Router>

`