const app = require('./app');
const connectDB = require('./config/db');
const { port } = require('./config/env');

// Connect to MongoDB Database
connectDB().catch((err) => {
  console.error('Failed to connect to MongoDB');
  console.error(err.message);
});

// Local Development ke liye listener start karein
if (process.env.NODE_ENV !== 'production') {
  const PORT = port || process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

// Vercel Serverless Function ke liye export lazmi hai
module.exports = app;