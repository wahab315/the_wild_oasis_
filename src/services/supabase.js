import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qaxavbjszwpinaetgrxd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFheGF2YmpzendwaW5hZXRncnhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMyMzg4ODcsImV4cCI6MjAzODgxNDg4N30.YASLf1JQGnFUtFdYTEs1XNXa4cBPmWXjqCnzIBjUBpI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
