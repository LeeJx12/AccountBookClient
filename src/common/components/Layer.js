import React, { Component } from "react";
import { connect } from "react-redux";
import { hideLayer } from "../functions";

export class Layer extends Component {
    render() {
        const { _onShow, _title, _content } = this.props;

        const modalClass= `modal fade ${_onShow ? 'show' : ''}`;
        const modalStyle = _onShow ? { display: 'block' } : { display : 'none' };

        return (
            <div className={modalClass} id="layer" tabIndex="-1"
                aria-labelledby="layerLabel"
                aria-hidden={_onShow ? 'false' : 'true'}
                aria-modal={_onShow ? 'true' : 'false'}
                style={modalStyle}
            >
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{_title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.onClose}></button>
                        </div>
                        <div className="modal-body">
                            { _content }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    onClose = () => {
        const { dispatch } = this.props;
        
        hideLayer(dispatch);
    }
}

function _mapStateToProps(state) {
    const { onShow, title, content } = state[`leejx2/accountbook/common`].layer;

    return {
        _onShow: onShow,
        _title: title,
        _content: content
    }
}

export default connect(_mapStateToProps)(Layer);