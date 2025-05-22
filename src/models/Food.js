import mongoose from 'mongoose';

const FoodSchema = new mongoose.Schema({
  name: String,
  category: { type: String, enum: ['aman', 'pemicu'] },
  description: String,
  nutrition: {
    calories: Number,
    fat: Number,
    carbs: Number,
    protein: Number,
  },
});

export default mongoose.models.Food || mongoose.model('Food', FoodSchema);
