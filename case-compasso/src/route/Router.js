import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import LoginPage from '../pages/LoginPage/LoginPage'
import UserPage from '../pages/UserPage/UserPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const Router = ()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                {/* <Route exact path="/login">
                    <LoginPage /> */}
                {/* </Route> */}
                <Route exact path="/:username">
                    <UserPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router