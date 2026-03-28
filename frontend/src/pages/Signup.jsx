import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [contact, setContact] = useState("");
  const [otp, setOtp] = useState("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    email: "",
    phone: "",
    institution_name: "",
    institution_type: "",
    city: "",
    loan_book_size: "",
  });

  // SEND OTP
  const sendOtp = async () => {
    try {
      setLoading(true);
      setError("");

      await axios.post("https://vitto-ai-project.onrender.com/api/auth/send-otp", {
        contact,
      });

      setStep(2);
    } catch (err) {
      setError("Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // VERIFY OTP
  const verifyOtp = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.post(
        "https://vitto-ai-project.onrender.com/api/auth/verify-otp",
        { contact, otp }
      );

      setToken(res.data.token);
      setStep(3);
    } catch (err) {
      setError("Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  // SUBMIT FORM
  const submitForm = async () => {
    try {
      setLoading(true);
      setError("");

      await axios.post("https://vitto-ai-project.onrender.com/api/leads", form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setStep(4);
    } catch (err) {
      setError("Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1A1A2E] text-white px-4">
      <div className="bg-[#16213E] p-8 rounded-xl w-full max-w-md shadow-lg">

        {/* ERROR MESSAGE */}
        {error && (
          <p className="bg-red-500 text-white p-2 rounded mb-4 text-center">
            {error}
          </p>
        )}

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Enter Email or Phone
            </h2>

            <input
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Email or Phone"
              className="w-full p-3 rounded bg-[#0F172A] text-white outline-none mb-4"
            />

            <button
              onClick={sendOtp}
              disabled={loading}
              className="w-full bg-red-600 py-3 rounded-lg hover:bg-red-700 transition"
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Enter OTP
            </h2>

            <input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full p-3 rounded bg-[#0F172A] text-white outline-none mb-4"
            />

            <button
              onClick={verifyOtp}
              disabled={loading}
              className="w-full bg-red-600 py-3 rounded-lg hover:bg-red-700 transition"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Organisation Details
            </h2>

            <div className="space-y-3">
              <input
                placeholder="Email"
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full p-3 rounded bg-[#0F172A]"
              />

              <input
                placeholder="Phone"
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                className="w-full p-3 rounded bg-[#0F172A]"
              />

              <input
                placeholder="Institution Name"
                onChange={(e) =>
                  setForm({
                    ...form,
                    institution_name: e.target.value,
                  })
                }
                className="w-full p-3 rounded bg-[#0F172A]"
              />

              <input
                placeholder="Institution Type (NBFC/Bank)"
                onChange={(e) =>
                  setForm({
                    ...form,
                    institution_type: e.target.value,
                  })
                }
                className="w-full p-3 rounded bg-[#0F172A]"
              />

              <input
                placeholder="City"
                onChange={(e) =>
                  setForm({ ...form, city: e.target.value })
                }
                className="w-full p-3 rounded bg-[#0F172A]"
              />

              <input
                placeholder="Loan Book Size"
                onChange={(e) =>
                  setForm({
                    ...form,
                    loan_book_size: e.target.value,
                  })
                }
                className="w-full p-3 rounded bg-[#0F172A]"
              />
            </div>

            <button
              onClick={submitForm}
              disabled={loading}
              className="w-full mt-4 bg-red-600 py-3 rounded-lg hover:bg-red-700 transition"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <h2 className="text-center text-2xl font-bold">
            ✅ Our team will reach out within 24 hours
          </h2>
        )}

      </div>
    </div>
  );
};

export default Signup;