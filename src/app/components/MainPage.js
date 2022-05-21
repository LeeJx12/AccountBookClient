import React, { Component } from "react";
import { connect } from "react-redux";
import { AlarmPane } from "../../alarm";
import { CalendarPane } from "../../calendar";
import { TAB_TYPE_ALARM, TAB_TYPE_CALENDAR, TAB_TYPE_DETAIL, TAB_TYPE_SETTING, TAB_TYPE_SUMMARY } from "../../common/constants";
import { DetailPane } from "../../detail";
import { SettingPane } from "../../setting";
import { SummaryPane } from "../../summary";
import { TabBar, TitleBar } from "../../tab";

class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { curTab } = this.props;

        return (
            <div>
                <TitleBar/>
                { TAB_TYPE_SUMMARY === curTab && <SummaryPane/> }
                { TAB_TYPE_DETAIL === curTab && <DetailPane/> }
                { TAB_TYPE_CALENDAR === curTab && <CalendarPane/> }
                { TAB_TYPE_ALARM === curTab && <AlarmPane/> }
                { TAB_TYPE_SETTING === curTab && <SettingPane/> }
                <TabBar/>
            </div>
        )
    }
}

function _mapStateToProps(state) {
    const tab = state[`leejx2/accountbook/tab`].tab;

    return {
        curTab: tab
    }
}

export default connect(_mapStateToProps)(MainPage);