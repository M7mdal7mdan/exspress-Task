const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const ShopSchema = new mongoose.Schema({
    name: String ,
    image: String,
    Products:{type:mongoose.Schema.Types.ObjectId,ref:"Product"},

},

{
    timestamps: true
})

ShopSchema.plugin(mongooseSlugPlugin,{tmpl:"<%=name%>"});

module.exports = mongoose.model("Shop",ShopSchema);