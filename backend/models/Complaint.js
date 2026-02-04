import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  imageUrl: String,

  status: {
    type: String,
    enum: ["Pending", "In Progress", "Resolved"],
    default: "Pending"
  },

  raisedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  resolvedAt: Date
}, { timestamps: true });

export default mongoose.model("Complaint", complaintSchema);
