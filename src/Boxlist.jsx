import React, { Component } from "react";
import Box from "./Box"
import Newboxform from "./Newboxform";
import { v4 as uuid } from 'uuid';

class Boxlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        }
        this.genBoxes = this.genBoxes.bind(this);
        this.remBox = this.remBox.bind(this);
    }
    genBoxes(newBox) {
        this.setState(st => ({
            boxes: [...st.boxes, newBox]
        }));
    }
    remBox(boxIndex) {
        this.setState(st => ({
            boxes: st.boxes.filter((el, i) => i !== boxIndex)
        }))
    }
    render() {
        // console.log(this.state.boxes);
        return (
            <div>
                <Newboxform genBoxes={this.genBoxes} />
                {this.state.boxes.map((el, i) => (
                    <Box boxParams={el} ident={i} key={uuid()} remBox={this.remBox} />
                ))}
            </div>
        )
    }
}

export default Boxlist;