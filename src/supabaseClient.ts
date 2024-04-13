// Importing createClient from supabase
import { createClient } from '@supabase/supabase-js';

// Environment variables for Supabase URL and KEY
const SUPABASE_URL: string = process.env.SUPABASE_URL as string;
const SUPABASE_KEY: string = process.env.SUPABASE_KEY as string;

// Create an instance of the Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
