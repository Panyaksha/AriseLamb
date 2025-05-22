import mongoose from 'mongoose';

const SuggestionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now },
  suggestions: [String],
  generatedBy: { type: String, enum: ['system', 'admin'], default: 'system' },
});

export default mongoose.models.Suggestion || mongoose.model('Suggestion', SuggestionSchema);
