import mongoose from "mongoose";

const animalSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    species: { type: String, required: true },
    age: { type: Number, min: 0, default: 0 },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "Owner", required: true },
    notes: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Animal", animalSchema);
