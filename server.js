const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' folder
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Stopwatch app listening at http://localhost:${port}`);
});
