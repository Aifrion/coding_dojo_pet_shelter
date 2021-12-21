import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'

const PetDetails = (props) => {
    const [petData, setPetData] = useState({})
    const [buttonAccessibility, setButtonAccessibility] = useState(true)
    const { id } = props
    useEffect(() => {
        axios.get(`http://localhost:8001/api/pets/${id}`).then(res => {
            console.log('Success', res.data)
            setPetData(res.data)
        }).catch(err => console.log(err.response))
    }, [buttonAccessibility])
    
    const handleAdopt = (id) => {
        axios.delete(`http://localhost:8001/api/pets/${id}`).then(res => {
            console.log(res.data)
            navigate('/')
        }).catch(err => {console.log(err.response)})
    }
    
    const handleLike = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8001/api/pets/${id}`,
            { likes: petData.likes + 1 }).then(res => {
            console.log(res.data)
            setButtonAccessibility(false)
        }).catch(err => console.log(err.response))
    }
    
    return (
        <div className='container'>
            <div className='header'>
                <h1>Pet Shelter</h1>
                <Link to='/'>back to home</Link>
            </div>
            <div className='lower-heading'>
                <h3>Details about {petData.name}</h3>
                <button className='btn btn-danger' onClick={() => handleAdopt(
                    petData._id)}>Adopt {petData.name}</button>
            </div>
            <table className='table table-striped'>
                <tr>
                    <th scope='row'>Pet Type:</th>
                    <td>{petData.petType}</td>
                </tr>
                <tr>
                    <th scope='row'>Description:</th>
                    <td>{petData.description}</td>
                </tr>
                <tr>
                    <th scope='row'>Skills</th>
                    <td>
                        <p style={{
                            margin: '0',
                            padding: '0',
                        }}>{petData.firstSkill}</p>
                        <p style={{
                            margin: '0',
                            padding: '0',
                        }}>{petData.secondSkill}</p>
                        <p style={{
                            margin: '0',
                            padding: '0',
                        }}>{petData.thirdSkill}</p>
                    </td>
                </tr>
            </table>
            <span><button className='btn btn-success' disabled={buttonAccessibility ===
                false} onClick={(e) => handleLike(
                e)} style={{margin: "0 5px 0 0"}}>Like {petData.name}</button>
                {petData.likes} like(s)</span>
        </div>
    )
}

export default PetDetails