const express = require('express');

const app = express();

require('./routes/yelpRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Serve public assets
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
