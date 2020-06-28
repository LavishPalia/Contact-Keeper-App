const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

// express server
const app = express();

// connecting to database
connectDB();

// importing backend routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const contactRoutes = require('./routes/contacts');

app.use(express.json({ extended: false }));

// backend routes
app.use('/api/users', userRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/auth', authRoutes);

// serve static assets in production

if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

// port
const PORT = process.env.PORT || 5000;

// running server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
