import React, { Component } from "react";

class Newboxform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: "",
            height: "",
            backgroundColor: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState(st => ({
            [evt.target.name]: evt.target.value
        }))
    }s
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.genBoxes(this.state);
        this.setState(st => ({width: "", height: "", backgroundColor: ""}))
    }
    render() {
        const { width, height, backgroundColor } = this.state;
        return (
            <div>
                <form>
                    <label htmlFor="width">Width:</label>
                    <input type="text" name="width" id="width" onChange={this.handleChange} value={ width }/>
                    <label htmlFor="height">Height:</label>
                    <input type="text" name="height" id="height" onChange={this.handleChange} value={ height }/>
                    <label htmlFor="backgroundColor">Background color:</label>
                    <input type="text" name="backgroundColor" id="backgroundColor" onChange={this.handleChange} value={ backgroundColor }/>
                    <button onClick={this.handleSubmit}>Generate</button>
                </form>
            </div>
        )
    }
}

export default Newboxform;