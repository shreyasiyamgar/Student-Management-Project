import React, { useState } from "react";

export default function ComplaintForm() {
  const [formData, setFormData] = useState({
    name: "",
    classGrade: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/complaint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      alert(data.message);
      setFormData({ name: "", classGrade: "", email: "", description: "" });
    } catch (err) {
      console.error("Error submitting complaint:", err);
    }
  };

  return (
    <div className="bg-[#edf4fa] m-0 min-h-screen" style={{ fontFamily: "'Roboto', Arial, sans-serif" }}>
      <div className="max-w-[410px] mt-[60px] mx-auto bg-white rounded-[16px] shadow-[0_6px_18px_rgba(60,90,120,0.1)] px-[30px] pt-[36px] pb-[20px]">
        <div className="text-[#2356a3] text-[2em] font-bold mb-[4px] text-center tracking-[1px]">
          Submit Your Complaints
        </div>
        <div className="text-center text-[#888] mb-[22px] text-[1.09em]">
          We value your feedback. Help us improve!
        </div>
        <form id="complaintForm" onSubmit={handleSubmit}>
          <div className="mb-[17px]">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="w-full p-[10px] px-[14px] border border-[#d2daed] rounded-[7px] bg-[#f8fafd]"
              required
            />
          </div>
          <div className="mb-[17px]">
            <input
              type="text"
              name="classGrade"
              value={formData.classGrade}
              onChange={handleChange}
              placeholder="Class/Grade"
              className="w-full p-[10px] px-[14px] border border-[#d2daed] rounded-[7px] bg-[#f8fafd]"
              required
            />
          </div>
          <div className="mb-[17px]">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-[10px] px-[14px] border border-[#d2daed] rounded-[7px] bg-[#f8fafd]"
              required
            />
          </div>
          <div className="mb-[17px]">
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe Your Complaint"
              className="w-full p-[10px] px-[14px] border border-[#d2daed] rounded-[7px] bg-[#f8fafd]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-[13px] bg-[#3584d6] text-white rounded-[8px] cursor-pointer font-semibold hover:bg-[#2063aa]"
          >
            Submit Complaint
          </button>
        </form>
      </div>
    </div>
  );
}