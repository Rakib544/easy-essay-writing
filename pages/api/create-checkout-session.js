const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  try {
    const { orderAmount, deliveryTime, customerEmail } = req.body;

    const session = await stripe.checkout.sessions.create({
      submit_type: "pay",
      payment_method_types: ["card"],
      shipping_address_collection: {
        allowed_countries: ["US", "CN"],
      },
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Delivery within ${deliveryTime} Days`,
            },
            unit_amount: orderAmount * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `https://www.easyessaywriting.com/confirmOrder`,
      cancel_url: `https://www.easyessaywriting.com/`,
      metadata: {
        customerEmail,
      },
    });

    res.status(200).json({
      id: session.id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};
