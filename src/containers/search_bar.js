import React, { Component } from 'react';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSwapi } from '../actions/index';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import IconButton from 'material-ui/IconButton';


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchSwapi(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <TextField
                    hintText="Type a name"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <span className="input-group-btn">


               <RaisedButton
                    label="Search"
                    default={true}
                    type="submit">
               </RaisedButton>


        </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchSwapi }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
