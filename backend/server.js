const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3001; // You can change the port as needed

app.use(cors());

// Configure Multer for handling file uploads
const storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post('/upload', upload.single('image'), (req, res) => {
  res.status(201).json({ message: 'Image uploaded successfully' });
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
