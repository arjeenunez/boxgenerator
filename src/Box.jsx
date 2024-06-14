import React, { Component } from "react";

class Box extends Component {
    static defaultProps = {
        width: "50px",
        height: "50px",
        backgroundColor: "black"
    }
    constructor(props) {
        super(props);
        this.handleRemBox = this.handleRemBox.bind(this);
    }
    handleRemBox(evt) {
        this.props.remBox(this.props.ident);
    }
    render() {
        const params = {...this.props.boxParams, fontSize: "10px"}
        return (
            <div style={params} onClick={this.handleRemBox}>Click to remove</div>
        )
    }
}

export default Box;