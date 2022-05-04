import React from "react";
import { msToTime } from "../../utils/helper"

const ListItem = ({ item }) => {
    const { startMonthAndDay, type, msDifference, distance } = item

    const getFormattedDistance = () => `${distance} km`
    
    const getSpeed = () => {
        const msSpeed = distance / msDifference
        const kmSpeed = (msSpeed * (1000 * 60 * 60)).toFixed(1);
        
        return kmSpeed
    }

    return (
        <div>
            <span>{startMonthAndDay}</span>
            <span>{type}</span>
            <span>{getFormattedDistance()}</span>
            <span>{msToTime(msDifference)}</span>
            <span>{getSpeed()}</span>
        </div>
    )
}

export default ListItem