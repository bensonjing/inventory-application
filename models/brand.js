import mongoose from "mongoose";
const { Schema } = mongoose;

const BrandSchema = new Schema({
  name: String,
  cars: [{ type: Schema.Types.ObjectId, ref: "Car" }],
});

BrandSchema.virtual("url").get(function () {
  return "/brand/" + this._id;
});

export default mongoose.model("Brand", BrandSchema);
