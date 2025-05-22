import connectionToDatabase from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, password, age, gender } = req.body;

  await connectionToDatabase();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "Email sudah terdaftar" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    age,
    gender,
  });

  res.status(201).json({
    message: "Registrasi berhasil",
    userId: user._id,
  });
}
