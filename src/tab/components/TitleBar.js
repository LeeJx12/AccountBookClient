import React, { Component } from "react";
import { connect } from "react-redux";
import { TAB_TYPE_ALARM, TAB_TYPE_CALENDAR, TAB_TYPE_DETAIL, TAB_TYPE_SETTING, TAB_TYPE_SUMMARY } from "../../common/constants";

class TitleBar extends Component {
    render() {
        const { _tab } = this.props;

        let title = '';
        if (TAB_TYPE_SUMMARY === _tab) title = '요약';
        else if (TAB_TYPE_DETAIL === _tab) title = '상세';
        else if (TAB_TYPE_CALENDAR === _tab) title = '지출 달력';
        else if (TAB_TYPE_ALARM === _tab) title = '알림';
        else if (TAB_TYPE_SETTING === _tab) title = '개인설정';

        return (
            <nav className="navbar fixed-top navbar-light bg-white">
                <div className="container-fluid px-3 justify-content-center">
                    <h4 className="pt-1">{title}</h4>
                </div>
            </nav>
        )
    }
}

function _mapStateToProps(state) {
    const tab = state[`leejx2/accountbook/tab`].tab;

    return {
        _tab: tab
    }
}

export default connect(_mapStateToProps)(TitleBar);