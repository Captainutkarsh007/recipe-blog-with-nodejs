const mongoose = require("mongoose") ;

const recipeSchema = new mongoose.Schema({
    name : {
        type : String , 
        required : "This field is required."
    },
    description : {
        type : String , 
        required : "This field is required."
    },
    email : {
        type : String , 
        required : "This field is required."
    },
    ingredients : {
        type : Array , 
        required : "This field is required."
    },
    category : {
        type : String , 
        // enum is used because category can have values only out of all the values mentioned
        //in enum
        enum : ["Thai" , "American" , "Chinese" , "Mexican" , "Indian"],
        required : "This field is required."
    },
    image : {
        type : String , 
        required : "This field is required."
    },
});

//This is how we define that how the search has to be performed
//Basically here we will display all the recipes that conatin the searchTerm 
//within the name or the description of the recipe.
recipeSchema.index({ name : "text" , description : "text"}) ;

module.exports = mongoose.model("Recipe", recipeSchema) ;