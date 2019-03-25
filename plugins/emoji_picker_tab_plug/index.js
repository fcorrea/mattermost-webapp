// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import EmojiPickerTabs from './emoji_picker_tabs.jsx';

function mapStateToProps(state) {
    return {
        components: state.plugins.components.EmojiPickerTab,
    };
}

export default connect(mapStateToProps)(EmojiPickerTabs);
