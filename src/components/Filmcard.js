import React, {Component} from 'react';


class Filmcard extends Component {
    render() {
    let filmJson = this.props.movies;

    return <h6>{filmJson[0].score.toString() }</h6>
    }
}
export default Filmcard;