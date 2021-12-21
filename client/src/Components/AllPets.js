import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from '@reach/router'

const AllPets = (props) => {
    const [PetResponseFromApi, setPetResponseFromApi] = useState([])
    const [triggerRequest, setTriggerRequest] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:8001/api/pets').
        then(res => setPetResponseFromApi(res.data)).
        catch(err => console.log(err))
    }, [triggerRequest])
    return (
        <div className='container'>
            <div className='header'>
                <h1>Pet Shelter</h1>
                <Link to='/pets/new'>add a pet to the shelter</Link>
            </div>
            <h3>These pets are looking for a good home</h3>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Type</th>
                    <th scope='col'>Actions</th>
                </tr>
                </thead>
                {PetResponseFromApi && PetResponseFromApi.map((element) => {
                    return (
                        <tr key={element._id}>
                            <td>{element.name}</td>
                            <td>{element.petType}</td>
                            <td>
                                <span>
                                    <Link to={`/pets/${element._id}`}>details</Link> | <Link to={`/pets/${element._id}/edit`}>edit</Link></span>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default AllPets