import mongoose from 'mongoose';

const SymptomSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now },
  symptoms: [String],
  severity: { type: Number, min: 1, max: 10 },
  notes: String,
});

export default mongoose.models.Symptom || mongoose.model('Symptom', SymptomSchema);
