import React, { useState } from "react";
import cardPayment from "./cardPayment.png";
import upipayment from "./upipayment.webp";

function ClassSelector() {
  const [selectedClass, setSelectedClass] = useState("");
  const [showUPIOptions, setShowUPIOptions] = useState(false);
  const [selectedUPI, setSelectedUPI] = useState("");

  const classes = [
    { name: "Nursery, Jr.KG & Sr.KG", fee: "₹1,30,550" },
    { name: "I & II", fee: "₹1,42,500" },
    { name: "III & IV", fee: "₹1,52,750" },
    { name: "V & VI", fee: "₹1,70,100" },
    { name: "VII & VIII", fee: "₹1,97,000" },
    { name: "IX & X", fee: "₹2,16,350" },
  ];

  const upiOptions = ["PhonePe", "Paytm", "Google Pay", "Amazon Pay", "FamPay"];

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const selectedFee = classes.find((cls) => cls.name === selectedClass)?.fee || "";

  const handleUPIClick = () => {
    setShowUPIOptions((prev) => !prev);
  };

  // Stripe Card Payment
  const handleCardPayment = async () => {
    if (!selectedFee) {
      alert("Please select a class first!");
      return;
    }

    // Convert fee string to integer in paisa
    const amount = parseInt(selectedFee.replace(/[^0-9]/g, ""));

    try {
      const response = await fetch("http://localhost:5000/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const session = await response.json();
      // Redirect to Stripe checkout
      window.location.href = session.url;
    } catch (error) {
      console.error("Stripe checkout error:", error);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative">
      <button
        onClick={() => window.history.back()}
        className="fixed top-4 left-4 px-4 py-2 bg-gray-300 text-gray-800 rounded-lg shadow-md hover:bg-gray-400 transition"
      >
        ← Back to Fee Page
      </button>

      <h1 className="text-5xl font-bold text-gray-800 mb-20 font-sans">Review & Pay</h1>

      <div className="bg-sky-200 shadow-2xl rounded-2xl p-12 w-full max-w-4xl text-center transform scale-105">
        <select
          value={selectedClass}
          onChange={handleClassChange}
          className="w-full p-5 text-xl border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white"
        >
          <option value="">Select Your Class :- </option>
          {classes.map((cls, index) => (
            <option key={index} value={cls.name}>
              {cls.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          value={selectedFee}
          readOnly
          placeholder="Your Fee is : "
          className="w-full mt-6 p-5 text-xl border border-gray-300 rounded-xl bg-gray-50 focus:outline-none"
        />

        <div className="flex flex-col items-center gap-6 mt-10 relative">
          <div className="flex justify-center gap-20">
            {<img
              src={cardPayment}
              alt="Card Payment"
              className="h-32 w-auto object-contain cursor-pointer hover:scale-105 transition"
              onClick={handleCardPayment}
            /> }

            <div className="relative">
              { <img
                src={upipayment}
                alt="UPI Payment"
                className="h-32 w-auto object-contain cursor-pointer hover:scale-105 transition"
                onClick={handleUPIClick}
              /> }

              {showUPIOptions && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-3 border border-gray-300 rounded-xl shadow-xl w-52 text-lg bg-white">
                  {upiOptions.map((option, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setSelectedUPI(option);
                        setShowUPIOptions(false);
                        alert(`You selected ${option} for UPI payment.`);
                      }}
                      className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassSelector;