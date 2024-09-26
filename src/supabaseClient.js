import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qtxojnbjuzylbhuvrvjx.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0eG9qbmJqdXp5bGJodXZydmp4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNjEzNjcwMywiZXhwIjoyMDQxNzEyNzAzfQ.xMACtliGvNeOB0FrGFARnIa516bntssz8vaUQSTuRd8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
