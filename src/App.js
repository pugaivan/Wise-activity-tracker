import React from 'react';
import ActivityForm from './components/activity-form/activity-form';
import List from './components/list/list'
import TotalDistance from './components/total-distance/total-distance'


const App = () => {
    return (
        <div>
            <ActivityForm/>
            <List/>
            <TotalDistance/>
        </div>
    )
}

export default App

