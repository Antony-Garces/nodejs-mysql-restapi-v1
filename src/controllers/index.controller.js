import { pool } from '../database/db.js'

export const ping = async (req, res) => {
  const [result] = await pool.query('SELECT 1 + 1 AS resul')
  res.json(result)
}
