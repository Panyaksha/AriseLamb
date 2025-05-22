import connectionToDatabase from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { email, password } = req.body;

  await connectionToDatabase();

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Email tidak ditemukan" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Password salah" });
  }

  const token = jwt.sign(
    { userId: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.status(200).json({
    message: "Login berhasil",
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  });
}
