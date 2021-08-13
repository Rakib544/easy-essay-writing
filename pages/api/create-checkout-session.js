// const stripe = require("stripe")(
//   "sk_test_51JM8GpDBrd9LjODA5tZOTnjCANNxzKWDIYRU2iXnFdluwPTdGiO4X5li7yqfuRJEv1Xc2EJY4ulUYJC2sFZvb45D00hthz3T2T"
// );
// export default async (req, res) => {
//   try {
//     const email = req.body.customerEmail;
//     const priceKey = req.body.priceKey;

//     const session = await stripe.checkout.sessions.create({
//       customer_email: email,
//       submit_type: "pay",
//       billing_address_collection: "auto",
//       shipping_address_collection: {
//         allowed_countries: ["US", "CN"],
//       },
//       payment_method_types: ["card"],
//       line_items: [
//         {
//           price: priceKey,
//           quantity: 1,
//         },
//       ],
//       mode: "payment",
//       success_url: `${process.env.HOST}/paymentMethod`,
//       cancel_url: `${req.headers.origin}/?canceled=true`,
//     });
//     res.status(200).send(session);
//     res.redirect(303, session.url);
//   } catch (err) {
//     res.status(err.statusCode || 500).json(err.message);
//   }
// };

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  try {
    const { orderAmount, deliveryTime, customerEmail } = req.body;

    const session = await stripe.checkout.sessions.create({
      submit_type: 'pay',
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
      success_url: `${process.env.HOST}/confirmOrder`,
      cancel_url: `${process.env.HOST}/`,
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
