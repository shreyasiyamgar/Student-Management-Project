import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Success() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const amount = params.get("amount");

    if (amount) {
      const formattedAmount =`₹${parseInt(amount, 10).toLocaleString()}`;
      alert(`Payment Successful! Amount Paid: ${formattedAmount}`);
    } else {
      alert("Payment Successful!");
    }

    // Redirect after 10 seconds if no manual click
    const timer = setTimeout(() => {
      navigate("/");
    }, 10000);

    return () => clearTimeout(timer);
  }, [location, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-5">
          Payment Successful ✅
        </h1>
        <p className="text-lg text-green-800">
          Thank you! Your payment has been completed.
        </p>
        <p className="text-base text-green-700 mt-4">
          You will be redirected to the home page in 10 seconds...
        </p>

        {/* Done Button */}
        <button
          onClick={() => navigate("/payonline")}
          className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-lg font-medium"
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default Success;