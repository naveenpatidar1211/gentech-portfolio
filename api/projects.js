import pkg from "pg"

const { Pool } = pkg

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
})

export default async function handler(req, res) {
  try {
    console.log("Connecting to DB...")

    const result = await pool.query(
      "SELECT id, title, description, technologies, image_url, live_url FROM public.projects ORDER BY id ASC"
    )

    console.log("Rows fetched:", result.rows.length)

    res.status(200).json(result.rows)

  } catch (error) {
    console.error("DB ERROR:", error)
    res.status(500).json({ error: "Database error" })
  }
}
