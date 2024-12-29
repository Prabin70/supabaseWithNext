import { createClient } from '@supabase/supabase-js'
import { config } from "dotenv";
import path from 'path';

config({ path: '../../../.env' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;