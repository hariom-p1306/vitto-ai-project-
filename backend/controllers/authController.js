import jwt from "jsonwebtoken";
import Otp from "../models/Otp.js";
import nodemailer from "nodemailer";

// SEND OTP (already exists)
export const sendOtp = async (req, res) => {
  try {
    const { contact } = req.body;

    if (!contact) {
      return res.status(400).json({ message: "Contact required" });
    }

    // 🔥 delete old OTPs (VERY IMPORTANT)
    await Otp.deleteMany({ contact });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await Otp.create({ contact, otp });

    console.log("OTP:", otp);

    res.json({ message: "OTP sent successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// 🔥 VERIFY OTP
export const verifyOtp = async (req, res) => {
  try {
    const { contact, otp } = req.body;

    if (!contact || !otp) {
      return res.status(400).json({ message: "All fields required" });
    }

    const existingOtp = await Otp.findOne({ contact }).sort({ createdAt: -1 });

    if (!existingOtp || existingOtp.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    // generate token
    const token = jwt.sign({ contact }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // delete OTP after verification
    await Otp.deleteOne({ _id: existingOtp._id });

    res.json({
      message: "OTP verified",
      token,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your_email@gmail.com",
    pass: "your_app_password",
  },
});