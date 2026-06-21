import { createClient } from '@supabase/supabase-js'

const express = require('express');
const supabaseUrl = 'https://hpryrakhigrduskaqyci.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwcnlyYWtoaWdyZHVza2FxeWNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgyMzU1MzMsImV4cCI6MjAyMzgxMTUzM30.wQj_SPW8C_mmNMTIZQoRK_0JKH36VhIgcqlEsE-w40E'

export const app = express();
export const supabase = createClient(supabaseUrl, supabaseKey)