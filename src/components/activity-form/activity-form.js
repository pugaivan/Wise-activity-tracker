import React, { useState } from 'react';
import { createActivity } from '../../services/api';
import './activity-form.css'

const ACTIVITY_TYPES = {
    RIDE: 'Ride',
    RUN: 'Run'
}

const MONTH_NAMES = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const ActivityForm = () => {
    const [startTime, setStartTime] = useState(null);
    const [finishTime, setFinishTime] = useState(null);
    const [distance, setDistance] = useState(null);
    const [type, setType] = useState(ACTIVITY_TYPES.RUN);

    const onStartTimeChange = (event) => setStartTime(event.target.value);
    const onFinishTimeChange = (event) => setFinishTime(event.target.value);
    const onDistanceChange = (event) => setDistance(event.target.value);
    const onTypeChange = (event) => setType(event.target.value);


    const onFormSubmit = async (event) => {
        event.preventDefault()
        const startDate = new Date(startTime);
        const finishDate = new Date(finishTime);
        const msDifference = finishDate - startDate
        const startMonthAndDay = `${MONTH_NAMES[startDate.getMonth()]} ${startDate.getDay()}`

        await createActivity({
            msDifference,
            startMonthAndDay,
            distance,
            type
        })
    }

    return (
        <div className='wrapper'>
            <h3>Add new activity:</h3>
            <form onSubmit={onFormSubmit} className='activity-from'>
                <input type='datetime-local' onChange={onStartTimeChange}></input>
                <input type='datetime-local' onChange={onFinishTimeChange}></input>
                <input type='number' step='0.1' placeholder='Distance' onChange={onDistanceChange}></input>
                <select onChange={onTypeChange}>
                    <option>{ACTIVITY_TYPES.RUN}</option>
                    <option>{ACTIVITY_TYPES.RIDE}</option>
                </select>
                <button>Save</button>
            </form>
        </div>
    )
}

export default ActivityForm