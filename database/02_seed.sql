USE edu_course;

INSERT INTO categories (category_id, category_name) VALUES
(1, 'Backend Development'),
(2, 'Frontend Development'),
(3, 'Database'),
(4, 'DevOps');

INSERT INTO tutors (tutor_id, name, job_title, company) VALUES
(1, 'Andi Pratama', 'Senior Backend Engineer', 'Tech Nusantara'),
(2, 'Sinta Maharani', 'Frontend Engineer', 'Digital Labs'),
(3, 'Budi Santoso', 'Database Engineer', 'DataWorks');

INSERT INTO users (user_id, full_name, email, password, phone, role) VALUES
(1, 'Bagas Student', 'bagas.student@example.com', 'dummy-password-1', '081234567890', 'STUDENT'),
(2, 'Dina Student', 'dina.student@example.com', 'dummy-password-2', '081234567891', 'STUDENT'),
(3, 'Admin EduCourse', 'admin@educourse.local', 'dummy-password-3', '081234567892', 'ADMIN');

INSERT INTO courses (class_id, category_id, tutor_id, title, price, level) VALUES
(1, 1, 1, 'Node.js REST API Fundamental', 150000.00, 'BEGINNER'),
(2, 1, 1, 'Advanced Express.js Backend', 250000.00, 'INTERMEDIATE'),
(3, 2, 2, 'Modern Frontend with JavaScript', 200000.00, 'INTERMEDIATE'),
(4, 3, 3, 'MySQL Database Fundamental', 175000.00, 'BEGINNER'),
(5, 4, 1, 'Docker for Backend Developer', 225000.00, 'INTERMEDIATE');

INSERT INTO pretests (pretest_id, class_id, title) VALUES
(1, 1, 'Node.js Basic Pretest'),
(2, 2, 'Express.js Pretest'),
(3, 3, 'JavaScript Frontend Pretest'),
(4, 4, 'MySQL Basic Pretest'),
(5, 5, 'Docker Basic Pretest');

INSERT INTO modules (module_id, class_id, title, module_order) VALUES
(1, 1, 'Introduction to Node.js', 1),
(2, 1, 'Building REST API', 2),
(3, 1, 'Connecting MySQL', 3),
(4, 2, 'Express Architecture', 1),
(5, 2, 'Middleware and Error Handling', 2),
(6, 3, 'JavaScript Fundamentals', 1),
(7, 4, 'SQL Fundamentals', 1),
(8, 5, 'Container Fundamentals', 1);

INSERT INTO materials (material_id, module_id, type, title) VALUES
(1, 1, 'VIDEO', 'What is Node.js?'),
(2, 1, 'DOCUMENT', 'Node.js Setup Guide'),
(3, 2, 'VIDEO', 'Creating Your First REST API'),
(4, 3, 'VIDEO', 'Connecting Node.js to MySQL'),
(5, 4, 'VIDEO', 'Express Project Structure'),
(6, 5, 'ARTICLE', 'Express Error Handling'),
(7, 6, 'VIDEO', 'Modern JavaScript Syntax'),
(8, 7, 'DOCUMENT', 'SQL Query Cheat Sheet'),
(9, 8, 'VIDEO', 'Docker Container Basics');

INSERT INTO my_classes (my_class_id, user_id, class_id, progress, completed_at, certificate_url) VALUES
(1, 1, 1, 75.00, NULL, NULL),
(2, 1, 4, 100.00, '2026-08-10 15:00:00', 'https://example.com/certificates/1'),
(3, 2, 2, 20.00, NULL, NULL);

INSERT INTO reviews (review_id, user_id, class_id, rating, comment) VALUES
(1, 1, 1, 5, 'Materinya jelas dan cocok untuk pemula.'),
(2, 2, 2, 4, 'Pembahasannya cukup dalam dan praktiknya bagus.'),
(3, 1, 4, 5, 'Belajar SQL jadi lebih mudah.');

INSERT INTO orders (order_id, user_id, order_date, status, grand_total) VALUES
(1, 1, '2026-08-01 10:00:00', 'PAID', 150000.00),
(2, 1, '2026-08-05 11:30:00', 'COMPLETED', 175000.00),
(3, 2, '2026-08-07 14:00:00', 'PENDING', 250000.00);

INSERT INTO payments (payment_id, order_id, method, amount, status, paid_at) VALUES
(1, 1, 'E_WALLET', 150000.00, 'SUCCESS', '2026-08-01 10:05:00'),
(2, 2, 'BANK_TRANSFER', 175000.00, 'SUCCESS', '2026-08-05 11:40:00'),
(3, 3, 'CREDIT_CARD', 250000.00, 'PENDING', NULL);
