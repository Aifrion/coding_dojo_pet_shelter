const Pet = require('../models/pet.model')

const createPet = (req, res) => {
    Pet.create(req.body).
    then((createdPet) => res.json(createdPet)).
    catch(err => res.status(400).json(err))
}

const getAllPets = (req, res) => {
    Pet.find().
    then(allPets => res.json(allPets)).
    catch(err => res.status(400).json(err))
}

const getOnePet = (req, res) => {
    Pet.findOne({ _id: req.params.id }).
    then(onePet => res.json(onePet)).
    catch(err => res.status(400).json(err))
}

const updatePet = (req, res) => {
    Pet.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true, runValidators: true,
    }).
    then(updatedPet => res.json(updatedPet)).
    catch(err => res.status(400).json(err))
}

const deletePet = (req, res) => {
    Pet.findOneAndDelete({ _id: req.params.id }).
    then(result => res.json(result)).
    catch(err => res.status(400).json(err))
}

module.exports = {
    createPet,
    getAllPets,
    getOnePet,
    updatePet,
    deletePet
}