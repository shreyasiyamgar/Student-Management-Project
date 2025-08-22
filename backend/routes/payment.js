const express = require("express");
const router = express.Router();
const Stripe = require("stripe");


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
// POST route for adding attendance
router.post("/", async(req, res) => {
    const { amount } = req.body; // in paisa

  if (!amount) {
    return res.status(400).json({ error: "Amount is required" });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: { name: "School Fee Payment" },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `http://localhost:3000/success?amount=${amount}`,
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
