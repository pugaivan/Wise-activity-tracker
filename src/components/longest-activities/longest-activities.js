import React, {useState,useEffect} from "react";
import { getLongestActivities } from '../../services/api'
import {msToTime} from  '../../utils/helper'


const LongestActivities = () => {
    const [longestRide, setLongestRide] = useState({})
    const [longestRun, setLongestRun] = useState({})

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
            <div>
                <h3>Longest ride:</h3>
                <span>{longestRide.date}</span>
                <span>{longestRide.distance} km</span>
                <span>{msToTime(longestRide.time)}</span>
            </div>
            <div>
                <h3>Longest run:</h3>
                <span>{longestRun.date}</span>
                <span>{longestRun.distance} km</span>
                <span>{msToTime(longestRun.time)}</span>
            </div>
        </div>
    )
}

export default LongestActivities