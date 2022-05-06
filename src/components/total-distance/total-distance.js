import React, { useEffect, useState } from "react";
import { getTotalDistance } from '../../services/api'
import './total-distance.css'

const TotalDistance = () => {
    const [totalRide, setTotalRide] = useState('')
    const [totalRun, setTotalRun] = useState('')

    useEffect(() => {
        async function fetchData() {
            const { data } = await getTotalDistance()
            setTotalRide(data.totalRideDistance)
            setTotalRun(data.totalRunDistance)
        }
        fetchData()
    }, [])

    return (
        <div className="total-wrapper">
            <div className="total-distance-text">
            <span>Total ride distance: {totalRide}</span>
            <span>Total run distance: {totalRun}</span>
            </div>
        </div>
    )
}


export default TotalDistance