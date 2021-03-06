import React, { Component } from "react";
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";
import { connect } from "react-redux";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export class Progress extends Component {
    render() {
        const { _onProgress } = this.props;

        const prgClass = `modal-backdrop fade ${_onProgress ? 'show' : 'dp_n'}`;

        return (
            <div className={prgClass}>
                <BeatLoader color="#40BAD2" loading={_onProgress} css={override} size={15} />
            </div>
        )
    }
}

function _mapStateToProps(state) {
    const onProgress = state[`leejx2/accountbook/common`].onProgress;

    return {
        _onProgress: onProgress,
    };
}

export default connect(_mapStateToProps)(Progress);