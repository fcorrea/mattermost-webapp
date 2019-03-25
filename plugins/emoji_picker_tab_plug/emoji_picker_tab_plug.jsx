// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

/* eslint-disable react/no-multi-comp */

import PropTypes from 'prop-types';
import React from 'react';

export default class EmojiPickerTabPlug extends React.PureComponent {
    static propTypes = {

        /*
         * Components or actions to add as channel header buttons
         */
        components: PropTypes.array,
    }

    render() {
        const components = this.props.components || [];

        return (
            <div>
              Hoy
            </div>
        );
    }
}


/* eslint-enable react/no-multi-comp */
