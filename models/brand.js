import mongoose from "mongoose";
const { Schema } = mongoose;

const BrandSchema = new Schema({
  name: String,
});

BrandSchema.virtual("url").get(function () {
  return "/brand/" + this._id;
});

const Brand = mongoose.model("Brand", BrandSchema);

export default Brand;
