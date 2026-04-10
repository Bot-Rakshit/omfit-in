import { neon } from "@neondatabase/serverless"

const DATABASE_URL =
  "postgresql://neondb_owner:npg_hzwyft9rj7MO@ep-small-voice-am6os8mm-pooler.c-5.us-east-1.aws.neon.tech/neondb?sslmode=require"

export const sql = neon(DATABASE_URL)
