const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Pet name is required'],
        minLength: [3, 'Author name must have at least 3 characters'],
        unique: true
    },
    petType: {
        type: String,
        required: [true, 'Pet type is required'],
        minLength: [3, 'Pet type must be at least 3 characters']
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minLength: [3, 'Description must have at least 3 characters']
    },
    firstSkill: {
        type: String,
    },
    secondSkill: {
        type: String,
    },
    thirdSkill: {
        type: String,
    },
    likes:{
        type: Number,
        default: 0,
    }
})

// PetSchema.path('name').
// validate(async (name) => {
//         const nameCount = await mongoose.models.Pet.countDocuments({ name })
//         return !nameCount
//     },
//     'Name' +
//     ' Already' +
//     ' Exists')

PetSchema.plugin(uniqueValidator, {message: 'Name already exists.'});

const Pet = mongoose.model('Pet', PetSchema)
module.exports = Pet