import React, { Component } from "react";
import { connect } from "react-redux";

export class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <nav className="navbar fixed-top navbar-light bg-white" style={{borderBottom: '1px solid #e9ecef'}}>
                    <div className="container-fluid px-3 justify-content-center">
                        <h4 className="pt-1">요약</h4>
                    </div>
                </nav>
                <div className="container-xl px-4" style={{height: '600px', overflowY: 'auto', marginTop: '4rem'}}>
                    <div className="row pt-4 pb-3" style={{borderBottom: '1px solid #e9ecef'}}>
                        <div className="col">
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-4 pb-3" style={{borderBottom: '1px solid #e9ecef'}}>
                        <div className="col-3">
                            <h6 className="pt-2" style={{fontWeight: 'bold'}}>목표액</h6>
                        </div>
                        <div className="col" style={{textAlign: 'end'}}>
                            <h6><strong>100,000,000</strong> 원 </h6>
                            <h6 style={{fontSize: '10px'}}>(<strong>1</strong>억)</h6>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-3">
                            <h6 className="pt-2" style={{fontWeight: 'bold'}}>현재액
                                <img src="./icons/icon-down.svg" className="img-fluid" />
                            </h6>
                        </div>
                        <div className="col" style={{textAlign: 'end'}}>
                            <h6><strong>75,000,000</strong> 원 </h6>
                            <h6 style={{fontSize: '10px'}}>(<strong>7</strong>천 <strong>5</strong>백만원)</h6>
                        </div>
                    </div>
                    <div className="row pt-3 pb-2" style={{marginLeft: '20px', borderBottom: '1px solid #e9ecef'}}>
                        <div className="col-3">
                            <h6 style={{fontWeight: 'bold'}}>신한</h6>
                        </div>
                        <div className="col" style={{textAlign: 'end'}}>
                            <h6>50,000,000 원 </h6>
                        </div>
                    </div>
                    <div className="row pt-3 pb-2" style={{marginLeft: '20px', borderBottom: '1px solid #e9ecef'}}>
                        <div className="col-3">
                            <h6 style={{fontWeight: 'bold'}}>카카오</h6>
                        </div>
                        <div className="col" style={{textAlign: 'end'}}>
                            <h6>25,000,000 원 </h6>
                        </div>
                    </div>
                    <div className="row pb-2" style={{borderBottom: '1px solid #e9ecef'}}>
                    </div>
                    <div className="row pt-4 pb-3" style={{borderBottom: '1px solid #e9ecef'}}>
                        <div className="col-3">
                            <h6 className="pt-2" style={{fontWeight: 'bold'}}>남은액</h6>
                        </div>
                        <div className="col" style={{textAlign: 'end'}}>
                            <h6><strong>25,000,000</strong> 원 </h6>
                            <h6 style={{fontSize: '10px'}}>(<strong>2</strong>천 <strong>5</strong>백만원)</h6>
                        </div>
                    </div>
                    <div className="row pt-4 pb-3" style={{borderBottom: '1px solid #e9ecef'}}>
                        <div className="col-4">
                            <h6 style={{fontWeight: 'bold'}}>예상 달성일</h6>
                        </div>
                        <div className="col" style={{textAlign: 'end'}}>
                            <h6><strong>2024</strong> 년 <strong>06</strong> 월</h6>
                        </div>
                    </div>
                </div>
                <nav className="navbar fixed-bottom navbar-light bg-white" style={{borderTop: '1px solid #e9ecef'}}>
                    <div className="container-fluid px-4">
                    <a className="navbar-nav p-2" onclick="location.href='./pub-summary.html'"><img className="img-fluid" src="./icons/icon-summary-on.svg" style={{width: '24px'}} /></a>
                        <a className="navbar-nav p-2" onclick="location.href='./pub-detail.html'"><img className="img-fluid" src="./icons/icon-detail-off.svg" style={{width: '24px'}} /></a>
                        <a className="navbar-nav p-2" onclick="location.href='./pub-calendar.html'"><img className="img-fluid" src="./icons/icon-calendar-off.svg" style={{width: '24px'}} /></a>
                        <a className="navbar-nav p-2" onclick="location.href='./pub-alarm.html'"><img className="img-fluid" src="./icons/icon-alarm-off.svg" style={{width: '24px'}} /></a>
                        <a className="navbar-nav p-2" onclick="location.href='./pub-setting.html'"><img className="img-fluid" src="./icons/icon-setting-off.svg" style={{width: '24px'}} /></a>
                    </div>
                </nav>
            </div>
        )
    }
}

function _mapStateToProps(state) {
    return {

    }
}

export default connect(_mapStateToProps)(MainPage);