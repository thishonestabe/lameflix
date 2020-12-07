import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "./layout";

import { DashboardPage } from "./pages/DashboardPage";



export default function BasePage() {


    return (
        <Suspense fallback={<LayoutSplashScreen />}>
            <Switch>
                {

                    <Redirect exact from="/" to="/dashboard" />
                }
                <ContentRoute path="/dashboard" component={DashboardPage} />

                <Redirect to="error/error-v1" />
            </Switch>
        </Suspense>
    );
}
