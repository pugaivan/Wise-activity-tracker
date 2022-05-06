import React, { useState, useEffect } from "react";
import { getLongestActivities } from '../../services/api'
import { msToTime } from '../../utils/helper'
import './longest-activities.css'


const LongestActivities = () => {
    const [longestRide, setLongestRide] = useState(null)
    const [longestRun, setLongestRun] = useState(null)

    useEffect(() => {
        async function fetchData() {
            const { data } = await getLongestActivities()
            setLongestRide(data.longestRide)
            setLongestRun(data.longestRun)
        }
        fetchData()
    }, [])


    return (
        <div className="longest-activities">
            {longestRide && (
                <div className="longest-ride-activity">
                    <h3>Longest ride:</h3>
                    <div className="longest-content-text">
                    <span>{longestRide.startMonthAndDay}</span>
                    <span>{longestRide.distance} km</span>
                    <span>{msToTime(longestRide.msDifference)}</span>
                    </div>
                </div>
            )}
            {longestRun && (
                <div className="longest-run-activity"> 
                    <h3>Longest run:</h3>
                    <div className="longest-content-text">
                    <span>{longestRun.startMonthAndDay}</span>
                    <span>{longestRun.distance} km</span>
                    <span>{msToTime(longestRun.msDifference)}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default LongestActivities