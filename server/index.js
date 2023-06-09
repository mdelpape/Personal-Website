require('dotenv').config();
const path = require('path');
const mime = require('mime');

// Set the MIME type for bundle.worker.js



const express = require('express');
const morgan = require('morgan');


const app = express();
app.use(morgan('dev'));

app.get('/bundle.worker.js', (req, res) => {
  res.type(mime.getType('js'));
  // Rest of the code to serve the file
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static(path.join(__dirname, '../Client/dist')));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server available at http://localhost:${PORT}`);
});
