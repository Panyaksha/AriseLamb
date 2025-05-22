import mongoose from 'mongoose';

const ReminderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  type: { type: String, enum: ['makan', 'obat'] },
  time: String, // "07:00"
  message: String,
  active: { type: Boolean, default: true },
});

export default mongoose.models.Reminder || mongoose.model('Reminder', ReminderSchema);
