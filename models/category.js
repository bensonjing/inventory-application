import mongoose from "mongoose";
const { Schema } = mongoose;

const CategorySchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  description: { type: String, required: true },
});

CategorySchema.virtual("url").get(function () {
  return "/category/" + this._id;
});

export default mongoose.model("Category", CategorySchema);
