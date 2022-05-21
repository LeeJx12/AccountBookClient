import React, { Component } from "react";
import { connect } from "react-redux";
import { TAB_TYPE_ALARM } from "../../common/constants";
import { changeTab } from "../actions";

export class Tab extends Component {
    render() {
        const { curTab, tab } = this.props;
        const iconSrc = `./icons/icon-${tab.toLowerCase().replace('tab_type_', '')}-${curTab === tab ? 'on' : 'off'}.svg`;

        return (
            <a className="navbar-nav p-2" onClick={this.onClick}>
                <img className="img-fluid" src={iconSrc} />
                {
                    TAB_TYPE_ALARM === tab &&
                    <span className="position-absolute top-5 translate-middle badge rounded-pill bg-danger">
                         99+ 
                        <span className="visually-hidden">unread messages</span>
                    </span>
                }
            </a>
        )
    }

    onClick = () => {
        const { curTab, tab, dispatch } = this.props;

        if (curTab !== tab) {
            dispatch(changeTab(tab));
        }
    }
}

function _mapStateToProps(state) {
    const tab = state[`leejx2/accountbook/tab`].tab;

    return {
        curTab: tab
    }
}

export default connect(_mapStateToProps)(Tab);