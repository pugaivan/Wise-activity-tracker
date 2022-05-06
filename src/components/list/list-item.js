import React from "react";
import { msToTime } from "../../utils/helper"
import './list-item.css'

const ListItem = ({ item }) => {
    const { startMonthAndDay, type, msDifference, distance } = item

    const getFormattedDistance = () => `${distance} km`
    
    const getSpeed = () => {
        const msSpeed = distance / msDifference
        const kmSpeed = (msSpeed * (1000 * 60 * 60)).toFixed(1);
        
        return kmSpeed
    }

    return (
        <div className="list-item">
            <span>{startMonthAndDay}</span>
            <span>{type}</span>
            <span>{getFormattedDistance()}</span>
            <span>{msToTime(msDifference)}</span>
            <span>{`${getSpeed()} km/hour`}</span>
        </div>
    )
}

export default ListItem