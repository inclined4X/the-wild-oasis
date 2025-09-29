import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://pkjysczmlqrqvfpwgiji.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBranlzY3ptbHFycXZmcHdnaWppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwODg1NjEsImV4cCI6MjA3NDY2NDU2MX0.WGN9Sr4HrOzNpPZgzIyOLg5YUKVtriB-ivPA8pfuFwQ`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
