module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "www.linkpicture.com","lh3.googleusercontent.com",'media.istockphoto.com'],
  },
  env : {
    stripe_public_key : process.env.STRIPE_PUBLIC_KEY,
    redirect_compleate_signup : process.env.REDIRECT_COMPLEATE_SIGNUP,
    redirect_signin : process.env.REDIRECT_SIGNIN,
  }
};
