// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import EmojiPickerTabPlug from './emoji_picker_tab_plug.jsx';

function mapStateToProps(state) {
    return {
        components: state.plugins.components.EmojiPickerTab,
    };
}

export default connect(mapStateToProps)(EmojiPickerTabPlug);
