import React, { Component } from "react";
import { getMountHelper } from "../functions";

export default class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mount : 0,
            mountStr : '0',
            mountHelper : '0원'
        }

        if (props.initMount) {
            this.state.mount = props.initMount;
            this.state.mountStr = props.initMount.toLocaleString();
            this.state.mountHelper = getMountHelper(props.initMount);
        }
    }

    render() {
        const { 
            id, 
            iconName, 
            title, 
            isShowTitle = true, 
            useHelper = true,
            className,
            initMount
        } = this.props;

        const iconSrc = `./icons/${iconName}.svg`;

        return (
            <div className={className}>
                { isShowTitle &&
                <label htmlFor={id} className="form-label">
                    <img src={iconSrc} className="img-fluid pb-1 mx-1" />{ title }
                </label>
                }
                <input type="text" className="form-control" id={id} placeholder={initMount.toLocaleString()} defaultValue={this.state.mountStr} aria-describedby="amountHelper" onKeyUp={this.eventHandler} />
                { useHelper &&
                <div id="amountHelper" className="form-text mx-2">{this.state.mountHelper}</div>
                }
            </div>
        )
    }

    eventHandler = e => {
        const element = e.target;
        if (element.value.length > 13) {
            element.value = element.value.substring(0, 13);
            return;
        }

        let mount = 0;
        if (e.keyCode >= 48  && e.keyCode <= 57) {
            mount = Number(element.value.replace(/\,/gi, ''));
        } else {
            mount = Number(element.value.replace(/\D/g, '').replace(/\,/gi, ''));
        }

        const mountStr = mount.toLocaleString();
        const mountHelper = getMountHelper(mount);

        element.value = mountStr;

        this.setState({
            mount: mount,
            mountStr: mountStr,
            mountHelper: mountHelper
        });
    }
}