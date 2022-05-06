import React, { useEffect, useState } from "react";
import ListItem from "./list-item"
import { getActivities } from '../../services/api'
import './list.css'

const List = () => {
    const [activities, setActivities] = useState([])

    useEffect(() => {
        async function fetchData() {
            const { data } = await getActivities()
            setActivities(data)
        }
        fetchData()
    }, [])

    return (
        <ul>
            {activities.map((item, index) => <li key={index}><ListItem item={item}/></li>)}
        </ul>
    )
}

export default List