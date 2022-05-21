import React, { Component } from "react";
import { TAB_TYPE_ALARM, TAB_TYPE_CALENDAR, TAB_TYPE_DETAIL, TAB_TYPE_SETTING, TAB_TYPE_SUMMARY } from "../../common/constants";
import Tab from "./Tab";

export default class TabBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar fixed-bottom navbar-light bg-white">
                <div className="container-fluid px-4">
                    { this.renderTabList() }
                </div>
            </nav>
        )
    }

    renderTabList() {
        const tabList = [ TAB_TYPE_SUMMARY, TAB_TYPE_DETAIL, TAB_TYPE_CALENDAR, TAB_TYPE_ALARM, TAB_TYPE_SETTING ];

        return tabList.map(tab => <Tab tab={tab} key={tab}/>);
    }
}