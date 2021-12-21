import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'

const EditPet = (props) => {
    const [name, setName] = useState('')
    const [petType, setPetType] = useState('')
    const [description, setPetDescription] = useState('')
    const [firstSkill, setFirstSkill] = useState('')
    const [secondSkill, setSecondSkill] = useState('')
    const [thirdSkill, setThirdSkill] = useState('')
    const [errors, setErrors] = useState({})
    const { id } = props
    useEffect(() => {
        axios.get(`http://localhost:8001/api/pets/${id}`).then(res => {
            console.log(res.data)
            setName(res.data.name)
            setPetType(res.data.petType)
            setPetDescription(res.data.description)
            setFirstSkill(res.data.firstSkill)
            setSecondSkill(res.data.secondSkill)
            setThirdSkill(res.data.thirdSkill)
        }).catch(err => console.log(err.response))
    }, [])
    
    const handleUpdate = (e) => {
        e.preventDefault()
        const putData = {
            name,
            petType,
            description,
            firstSkill,
            secondSkill,
            thirdSkill,
        }
        axios.put(`http://localhost:8001/api/pets/${id}`, putData).
        then(res => {
            console.log(res.data)
            setErrors({})
            navigate('/')
        }).
        catch(err => console.log('Error', setErrors(err.response.data.errors)))
    }
    return (
        <div className='container'>
            <div className='header'>
                <h1>Pet Shelter</h1>
                <Link to='/'>back to home</Link>
            </div>
            <h3>Edit {name}</h3>
            <div className='form-container'>
                <form onSubmit={handleUpdate}>
                    <div className='input-container'>
                        <div className='info-form'>
                            <div>
                                <label htmlFor='name' className='form-label'>Pet Name:</label>
                                <input type='text' className='form-control' id='name' value={name} onChange={(e) => setName(
                                    e.target.value)} />
                                {errors.name && (
                                    <p className='error-text'>{errors.name.message}</p>)}
                            </div>
                            <div>
                                <label htmlFor='petType' className='form-label'>Pet Type:</label>
                                <input type='text' className='form-control' id='petType' value={petType} onChange={(e) => setPetType(
                                    e.target.value)} />
                                {errors.petType && (
                                    <p className='error-text'>{errors.petType.message}</p>)}
                            </div>
                            <div>
                                <label htmlFor='description' className='form-label'>Pet Description:</label>
                                <input type='text' className='form-control' id='description' value={description} onChange={(e) => setPetDescription(
                                    e.target.value)} />
                                {errors.description && (
                                    <p className='error-text'>{errors.description.message}</p>)}
                            </div>
                        </div>
                        
                        <div className='skills-form'>
                            <h3>Skills (optional)</h3>
                            <div>
                                <label htmlFor='firstSkill' className='form-label'>Skill 1:</label>
                                <input type='text' className='form-control' id='firstSkill' value={firstSkill} onChange={(e) => setFirstSkill(
                                    e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor='secondSkill' className='form-label'>Skill 2:</label>
                                <input type='text' className='form-control' id='secondSkill' value={secondSkill} onChange={(e) => setSecondSkill(
                                    e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor='thirdSkill' className='form-label'>Skill 3:</label>
                                <input type='text' className='form-control' id='thirdSkill' value={thirdSkill} onChange={(e) => setThirdSkill(
                                    e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <button className='btn btn-light'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default EditPet