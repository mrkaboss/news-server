import mongoose from "mongoose";

const adSchema = new mongoose.Schema({
  businessName: { type: String, required: true },
  email: { type: String, required: true },
  duration: { type: Number, required: true }, // Iminsi (1, 7, 28)
  description: { type: String },
  banner: { type: String }, // URL y'ifoto
  status: { type: String, default: "pending" }, // pending, active, expired
  createdAt: { type: Date, default: Date.now },
});

const Ad = mongoose.model("Ad", adSchema);
export default Ad;