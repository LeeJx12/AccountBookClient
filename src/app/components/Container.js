import React, { Component } from "react";

export default class Container extends Component {
    render() {
        const scrollStyle = {
            height: `${window.screen.height - 120}px`
        }
        return (
            <div className="container-xl">
                <div className="scroll" style={scrollStyle}>
                    { this.props.children }
                </div>
            </div>
        )
    }
}