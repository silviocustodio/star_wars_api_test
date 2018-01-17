import React, { Component } from 'react';
import BarStarWars from './app_bar';
import SearchBar from '../containers/search_bar';
import SwapiList from '../containers/swapi_list';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';



export default class App extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <BarStarWars />
                </MuiThemeProvider>
                <MuiThemeProvider  >
                    <SearchBar />
                </MuiThemeProvider >
                <SwapiList />
            </div>
        );
    }
}
