import React from 'react';
import ActivityForm from './components/activity-form/activity-form';
import List from './components/list/list'
import TotalDistance from './components/total-distance/total-distance'
import LongestActivities from './components/longest-activities/longest-activities'


const App = () => {
    return (
        <div>
            <ActivityForm/>
            <List/>
            <TotalDistance/>
            <LongestActivities/>
        </div>
    )
}

export default App

