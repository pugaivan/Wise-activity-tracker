import React from 'react';
import ActivityForm from './components/activity-form/activity-form';
import List from './components/list/list'
import TotalDistance from './components/total-distance/total-distance'
import LongestActivities from './components/longest-activities/longest-activities'
import './App.css'


const App = () => {
    return (
        <div className='activity-app'>
            <header>Activivty tracker</header>
            <ActivityForm />
            <div className='activity-data-conteiner'>
                <div className='list-conteiner'>
                    <List />
                </div>
                <div className='info-conteiner'>
                    <LongestActivities />
                    <TotalDistance />
                </div>
            </div>
        </div>
    )
}

export default App

