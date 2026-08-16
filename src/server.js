const express = require('express');
require('dotenv').config();

const pool = require('./config/db');
const courseRoutes = require('./routes/course.routes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'EduCourse API is running'
  });
});

app.get('/health/db', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT 1 AS result');

    res.status(200).json({
      message: 'Database connected',
      data: rows
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Database connection failed'
    });
  }
});

app.use('/course', courseRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: 'Endpoint not found'
  });
});

const PORT = Number(process.env.PORT || 3000);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
