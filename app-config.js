// Supabase 프로젝트 정보를 여기에 붙여넣으세요.
// Supabase 대시보드 > Project Settings > API 에서 확인할 수 있습니다.
const SUPABASE_URL = "https://bmcgakgatahsavpoqogi.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtY2dha2dhdGFoc2F2cG9xb2dpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgyMzU1OTcsImV4cCI6MjEwMzgxMTU5N30.ag-1iTzDifZrMel39Fv-tU64Ghp_OHme-ZdKKG1LqIY";
const db = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
