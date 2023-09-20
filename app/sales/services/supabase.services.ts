import { changeStatus } from "@/app/products/services/products.services";
import { createClient } from "@supabase/supabase-js";
import { File } from "buffer";
import { ChangeEvent } from "react";
export const supabase = createClient('https://ndfpwovnqeovyfqhphrh.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kZnB3b3ZucWVvdnlmcWhwaHJoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5Mzc5MzE1MywiZXhwIjoyMDA5MzY5MTUzfQ.BeUg5H5KZVhoUhxz3BIfbFMGqWtCIBGgTZwtckyHOKA')
