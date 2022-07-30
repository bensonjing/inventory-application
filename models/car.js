import mongoose from "mongoose";
const { Schema } = mongoose;

const CarSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  price: { type: Number, required: true },
  brand: { type: Schema.Types.ObjectId, ref: "Brand", require: true },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
});

CarSchema.virtual("url").get(function () {
  return "/car/" + this._id;
});

export default mongoose.model("Car", CarSchema);
