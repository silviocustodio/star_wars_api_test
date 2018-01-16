import React, { Component } from 'react';
import BarStarWars from './bar';

export default class App extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                <BarStarWars />
                </MuiThemeProvider>




            </div>

        );
    }
}
