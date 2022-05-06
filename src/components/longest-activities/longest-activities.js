import React, { useState, useEffect } from "react";
import { getLongestActivities } from '../../services/api'
import { msToTime } from '../../utils/helper'


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
        <div>
            {longestRide && (
                <div>
                    <h3>Longest ride:</h3>
                    <span>{longestRide.startMonthAndDay}</span>
                    <span>{longestRide.distance} km</span>
                    <span>{msToTime(longestRide.msDifference)}</span>
                </div>
            )}
            {longestRun && (
                <div>
                    <h3>Longest run:</h3>
                    <span>{longestRun.startMonthAndDay}</span>
                    <span>{longestRun.distance} km</span>
                    <span>{msToTime(longestRun.msDifference)}</span>
                </div>
            )}
        </div>
    )
}

export default LongestActivities