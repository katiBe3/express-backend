import axios from 'axios';
import { Request, Response } from 'express';

const API_BASE_URL = 'https://openapi.somewhere.com/';
const API_ACCESS_TOKEN = process.env.API_ACCESS_TOKEN;  // Make sure to define this in your environment variables

// Function to fetch data from a generic API
export const fetchDataFromAPI = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/listings/`, {
      headers: {
        'Authorization': `Bearer ${API_ACCESS_TOKEN}`  // Ensure the Authorization header is correct for your API
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Failed to fetch data from the API:', error);
    res.status(500).json({ message: 'Failed to fetch data from the API' });
  }
};
