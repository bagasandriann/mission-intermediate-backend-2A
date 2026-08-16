# EduCourse Backend

Node.js + Express + MySQL implementation for the intermediate backend mission.

## 1. Environment

Copy `.env.example` to `.env` and set your MySQL password.

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=YOUR_MYSQL_PASSWORD
DB_NAME=edu_course
DB_PORT=3306
PORT=3000
```

## 2. Database

Run these files in MySQL Workbench or MySQL CLI:

```text
database/01_schema.sql
database/02_seed.sql
```

The schema follows the supplied EduCourse ERD. The `courses` table represents the ERD's Produk/Kelas entity and uses `class_id` as its primary key.

## 3. Install

```bash
npm install
```

## 4. Run

```bash
npm run dev
```

## 5. Endpoints

| Method | Endpoint    | Purpose               |
| ------ | ----------- | --------------------- |
| GET    | /course     | List all courses      |
| GET    | /course/:id | Get one course        |
| POST   | /course     | Add course            |
| PATCH  | /course/:id | Update course         |
| DELETE | /course/:id | Delete course         |
| GET    | /health/db  | Test MySQL connection |

### POST /course

```json
{
  "category_id": 1,
  "tutor_id": 1,
  "title": "REST API with Node.js",
  "price": 180000,
  "level": "BEGINNER"
}
```

### PATCH /course/:id

Only send fields that need to change:

```json
{
  "price": 200000,
  "level": "INTERMEDIATE"
}
```

All SQL values are parameterized with `?` placeholders to avoid SQL injection.
