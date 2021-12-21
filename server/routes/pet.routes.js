const petController = require('../controllers/pet.controllers')
module.exports = app => {
    app.post('/api/pets', petController.createPet)
    app.get('/api/pets', petController.getAllPets)
    app.get('/api/pets/:id', petController.getOnePet)
    app.put('/api/pets/:id', petController.updatePet)
    app.delete('/api/pets/:id', petController.deletePet)
}
