const express = require("express");
const router = express.Router();

console.log("Loaded GROQ_API_KEY:", process.env.GROQ_API_KEY ? "✅ Key found" : "❌ Key missing");

// POST route for adding attendance
router.post("/",async (req, res) => {
  const { question, className, subject } = req.body;
  if (!question) return res.status(400).json({ error: 'Question is required' });

  try {
    const prompt = `You are an expert ${subject} teacher for class ${className}. Answer the following question clearly and step-by-step:\n\n${question}`;
    const apiKey = process.env.GROQ_API_KEY;
    console.log("Authorization header:", `Bearer ${apiKey}`);

    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile", // updated
        messages: [
          { role: "system", content: "You are a helpful and knowledgeable teacher." },
          { role: "user", content: prompt }
        ],
        temperature: 0.7
      })
    });

    const data = await groqRes.json();
    if (!groqRes.ok) {
      return res.status(groqRes.status).json({ error: data.error?.message || "Groq API error" });
    }

    const answer = data.choices?.[0]?.message?.content || "No answer found.";
    res.json({ answer });
  } catch (error) {
    console.error("Groq API Error:", error);
    res.status(500).json({ error: "Failed to get answer from Groq API" });
  }

});

module.exports = router;
