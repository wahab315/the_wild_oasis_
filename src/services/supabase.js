import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://wduugpssfgjebhydbfnw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkdXVncHNzZmdqZWJoeWRiZm53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ0MDgyOTEsImV4cCI6MjAzOTk4NDI5MX0.TWasA1kPf2Bzh6-hExF0eKlF5sGHYs3E4kpvzJ1YPVk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
