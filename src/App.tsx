import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './styles/global'

import { Login } from './screens/Login/Login'
import { Dashboard } from './screens/Dashboard/Dashboard'
import { CreateBook } from './screens/CreateBook/CreateBook'
import { Redirect } from 'react-router'

function App() {
  const user = localStorage.getItem('user')

  useEffect(() => {}, [localStorage.getItem('user')])

  return (
    <Router>
      <Route path="/login" exact>
        <Login />
      </Route>
      {user ? (
        <>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/adicionar-livro" exact>
            <CreateBook />
          </Route>
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </Router>
  )
}

export default App
