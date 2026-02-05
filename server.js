import "dotenv/config.js"
import express from "express"
import cors from "cors"
import pkg from "pg"

const { Pool } = pkg

const app = express()
app.use(cors())

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
})

app.get("/api/projects", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM public.projects ORDER BY created_at DESC"
    )
    res.json(result.rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "DB error" })
  }
})

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000")
})
