import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ghzspjnkkcdcttdtnlro.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdoenNwam5ra2NkY3R0ZHRubHJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUzMDA0NTgsImV4cCI6MjA5MDg3NjQ1OH0.JFS6iiF8Nv1UZ4jbWG55bRUlFJyITE9doPlD34O-ixw";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
