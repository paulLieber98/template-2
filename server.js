const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Proxy endpoint for Kaggle API
app.get('/api/datasets', async (req, res) => {
  try {
    const { query } = req.query;
    console.log('Searching Kaggle for:', query);
    
    // Validate required environment variables
    if (!process.env.KAGGLE_USERNAME || !process.env.KAGGLE_KEY) {
      throw new Error('Missing Kaggle credentials in environment variables');
    }

    const kaggleResponse = await axios.get('https://www.kaggle.com/api/v1/datasets/list', {
      params: {
        search: query
      },
      auth: {
        username: process.env.KAGGLE_USERNAME,
        password: process.env.KAGGLE_KEY
      },
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      timeout: 10000 // 10 second timeout
    });

    console.log('Kaggle API response status:', kaggleResponse.status);
    
    if (!Array.isArray(kaggleResponse.data)) {
      console.error('Unexpected Kaggle API response format:', kaggleResponse.data);
      throw new Error('Invalid response format from Kaggle API');
    }

    // Only return the first 20 results
    const results = kaggleResponse.data.slice(0, 20);
    res.json(results);
  } catch (error) {
    console.error('Error proxying Kaggle request:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
    });
    
    res.status(500).json({ 
      error: 'Failed to fetch datasets',
      details: error.response?.data || error.message
    });
  }
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
  console.log('Kaggle credentials configured:', {
    username: process.env.KAGGLE_USERNAME ? 'Set' : 'Missing',
    key: process.env.KAGGLE_KEY ? 'Set' : 'Missing'
  });
}); 