const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const UserSchema = new mongoose.Schema({
    name:{type: String ,unique:true, required: true},
    password:{ type : String , required: true},


    timestamps: true
})

UserSchema.plugin(mongooseSlugPlugin,{tmpl:"<%=name%>"});

module.exports = mongoose.model("Product",UserSchema);