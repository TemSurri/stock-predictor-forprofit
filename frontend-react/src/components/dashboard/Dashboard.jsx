import React, {useEffect} from 'react'
import axios from 'axios'
import axiosInstance from '../../axiosinstance.js'

const Dashboard = () => {
    useEffect(() => {

        const fetchData = async () => {
            try{
                const response = await axiosInstance.get('/protected-view/')
                console.log("Protected data", response.data)
            }catch(error) {
                console.error("Error fetching protected data", error)
            } 
        }
        fetchData();
        }, []    )
    return (
        <>
            <h1>D - Board</h1>
        </>
    )
}

export default Dashboard