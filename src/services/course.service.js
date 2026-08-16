const pool = require('../config/db');

async function findAll() {
  const [rows] = await pool.query(`
    SELECT
      c.class_id AS id,
      c.title,
      c.price,
      c.level,
      c.category_id,
      cat.category_name,
      c.tutor_id,
      t.name AS tutor_name,
      t.job_title AS tutor_job_title,
      t.company AS tutor_company
    FROM courses c
    JOIN categories cat ON cat.category_id = c.category_id
    JOIN tutors t ON t.tutor_id = c.tutor_id
    ORDER BY c.class_id
  `);

  return rows;
}

async function findById(id) {
  const [rows] = await pool.query(`
    SELECT
      c.class_id AS id,
      c.title,
      c.price,
      c.level,
      c.category_id,
      cat.category_name,
      c.tutor_id,
      t.name AS tutor_name,
      t.job_title AS tutor_job_title,
      t.company AS tutor_company
    FROM courses c
    JOIN categories cat ON cat.category_id = c.category_id
    JOIN tutors t ON t.tutor_id = c.tutor_id
    WHERE c.class_id = ?
  `, [id]);

  return rows[0] || null;
}

async function create(data) {
  const { category_id, tutor_id, title, price, level } = data;

  const [result] = await pool.query(
    `INSERT INTO courses (category_id, tutor_id, title, price, level)
     VALUES (?, ?, ?, ?, ?)`,
    [category_id, tutor_id, title, price, level]
  );

  return findById(result.insertId);
}

async function update(id, data) {
  const allowedFields = {
    category_id: 'category_id',
    tutor_id: 'tutor_id',
    title: 'title',
    price: 'price',
    level: 'level'
  };

  const fields = [];
  const values = [];

  for (const [key, value] of Object.entries(data)) {
    if (allowedFields[key] !== undefined) {
      fields.push(`${allowedFields[key]} = ?`);
      values.push(value);
    }
  }

  if (fields.length === 0) {
    return findById(id);
  }

  values.push(id);

  const [result] = await pool.query(
    `UPDATE courses SET ${fields.join(', ')} WHERE class_id = ?`,
    values
  );

  if (result.affectedRows === 0) {
    return null;
  }

  return findById(id);
}

async function remove(id) {
  const [result] = await pool.query(
    'DELETE FROM courses WHERE class_id = ?',
    [id]
  );

  return result.affectedRows > 0;
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
};
