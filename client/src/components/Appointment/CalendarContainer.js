import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Calendar } from './Calendar'
import * as scheduleActions from '../../services/Schedule/actions'

function mapStateToProps(state) {
    return {
        currentView: state.scheduleReducer.currentView
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(scheduleActions, dispatch),
    };
}

const CalendarContainer = (props) => {
    useEffect(() => {
        const { actions } = props;
        actions.switchView(view);
    }, []);

    return (
        <div>
        <Calendar {...props}/>
        </div>
    );
}

CalendarContainer.PropTypes = {
    actions: PropTypes.object
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);