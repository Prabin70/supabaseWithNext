import { createClient } from '@supabase/supabase-js'


const supabaseUrl = "https://zcolkplfjismxyilacsb.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpjb2xrcGxmamlzbXh5aWxhY3NiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU0MDMzNzksImV4cCI6MjA1MDk3OTM3OX0.t9I-g7-3zrqMnK20VbjabNiXfQ3PNvYG0Hhri5Mqncg"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;