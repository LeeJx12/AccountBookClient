import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "../../app/components/Container";

export class CalendarPane extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Container>
                <div className="row pt-2 bg-white">
                    <div className="col m-2">
                        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked={true}/>
                            <label className="btn btn-outline-primary" htmlFor="btnradio1" style={{backgroundColor: '#40BAD2', borderColor: '#40BAD2'}}>월간</label>
                        
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
                            <label className="btn btn-outline-primary" htmlFor="btnradio2" style={{color: '#40BAD2', borderColor: '#40BAD2'}}>주간</label>
                        
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off"/>
                            <label className="btn btn-outline-primary" htmlFor="btnradio3" style={{color: '#40BAD2', borderColor: '#40BAD2'}}>일일</label>
                        </div>
                    </div>
                    <div className="col-5 m-2" style={{textAlign: 'end', alignSelf: 'center'}}>
                        지출 : 500,000 원
                    </div>
                </div>
            </Container>
        )
    }
}

function _mapStateToProps(state) {
    return {

    };
}

export default connect(_mapStateToProps)(CalendarPane);