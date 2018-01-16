import React, { Component } from 'react';
import { connect } from 'react-redux';
var request = require('superagent');
import ReactGiphy from  'react-giphy';


class StarWarApiList extends Component {
    renderSwapi(swapiData) {
        const name = swapiData.name;
        const birth_year = swapiData.birth_year;
        const height = swapiData.height;
        const mass = swapiData.mass;

        return (
            <tr key={name}>
                <td>

                    <ReactGiphy tag={name} /> <br />
                    <b>Name:</b> {name} <br />
                    <b>Birth Year:</b> {birth_year} <br />
                    <b>Height:</b> {height}(cm) <br />
                    <b>Mass:</b> {mass}(kg)
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Results</th>
                </tr>
                </thead>
                <tbody>
                {this.props.swapi.map(this.renderSwapi)}
                </tbody>
            </table>

        )
    }
}

function mapStateToProps({ swapi }) {
    return { swapi };

}

export default connect(mapStateToProps)(StarWarApiList);
