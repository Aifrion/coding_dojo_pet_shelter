import logo from './logo.svg'
import './App.css'
import AllPets from './Components/AllPets'
import CreatePet from './Components/CreatePet'
import { Router } from '@reach/router'
import PetDetails from './Components/PetDetails'
import EditPet from './Components/EditPet'

function App () {
    return (
        <div className='App'>
            <Router>
                <AllPets path='/' />
                <CreatePet path='/pets/new' />
                <PetDetails path = '/pets/:id'/>
                <EditPet path ='/pets/:id/edit'/>
            </Router>
        </div>
    )
}

export default App
