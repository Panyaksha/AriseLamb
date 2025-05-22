import mongoose from 'mongoose';

const MealSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now },
  time: String, // "pagi", "siang", "malam"
  foods: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Food' }],
  notes: String,
});

export default mongoose.models.Meal || mongoose.model('Meal', MealSchema);
