import axios from 'axios';
import { Request, Response } from 'express';

const ETSY_OAUTH_TOKEN = process.env.ETSY_OAUTH_TOKEN;
const ETSY_BASE_URL = 'https://openapi.etsy.com/v3';

// Function to fetch data from Etsy
export const fetchFromEtsy = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${ETSY_BASE_URL}/listings/active`, {
      headers: {
        'Authorization': `Bearer ${ETSY_OAUTH_TOKEN}`
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Failed to fetch data from Etsy:', error);
    res.status(500).json({ message: 'Failed to fetch data from Etsy' });
  }
};
