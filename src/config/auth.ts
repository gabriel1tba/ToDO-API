interface JWT {
  jwt: {
    secret: string;
    expiresIn: string;
  };
}

export default <JWT>{
  jwt: {
    secret: process.env.APP_SECRET,
    expiresIn: '1d',
  },
};
