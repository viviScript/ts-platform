/**
 * Created by 叶子 on 2017/8/13.
 */
import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
// import DocumentTitle from 'react-document-title';
import AllComponents from '../container';
import routesConfig from './config';

export default class CRouter extends Component {
    render() {
        return (
            <Switch>
                {
                    Object.keys(routesConfig).map(key => {
                        console.log(key, 'routesConfig')
                        routesConfig[key].map((r, index) => {
                            console.log(r, index, '111')
                            const route = r => {
                                const Component = AllComponents[r.component];
                                return (
                                    <Route
                                        key={r.route || r.key}
                                        exact
                                        path={r.route || r.key}
                                        component={Component}
                                    />
                                )
                            };
                            debugger
                            return r.component ? route(r) : r.subs.map(r => route(r));
                        })
                        }
                    )
                }

                <Route render={() => <Redirect to="/404" />} />
            </Switch>
        )
    }
}