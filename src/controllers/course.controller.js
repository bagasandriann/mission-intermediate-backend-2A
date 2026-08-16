const courseService = require('../services/course.service');

async function getAll(req, res) {
  try {
    const courses = await courseService.findAll();

    res.status(200).json({
      data: courses
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Failed to get courses'
    });
  }
}

async function getById(req, res) {
  try {
    const course = await courseService.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        message: 'Course not found'
      });
    }

    res.status(200).json({
      data: course
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Failed to get course'
    });
  }
}

async function create(req, res) {
  try {
    const { category_id, tutor_id, title, price, level } = req.body;

    if (
      category_id === undefined ||
      tutor_id === undefined ||
      !title ||
      price === undefined ||
      !level
    ) {
      return res.status(400).json({
        message: 'category_id, tutor_id, title, price and level are required'
      });
    }

    if (!['BEGINNER', 'INTERMEDIATE', 'ADVANCED'].includes(level)) {
      return res.status(400).json({
        message: 'level must be BEGINNER, INTERMEDIATE or ADVANCED'
      });
    }

    if (Number(price) < 0) {
      return res.status(400).json({
        message: 'price must be greater than or equal to 0'
      });
    }

    const course = await courseService.create(req.body);

    res.status(201).json({
      message: 'Course created successfully',
      data: course
    });
  } catch (error) {
    console.error(error);

    if (error.code === 'ER_NO_REFERENCED_ROW_2') {
      return res.status(400).json({
        message: 'category_id or tutor_id does not exist'
      });
    }

    res.status(500).json({
      message: 'Failed to create course'
    });
  }
}

async function update(req, res) {
  try {
    const course = await courseService.update(req.params.id, req.body);

    if (!course) {
      return res.status(404).json({
        message: 'Course not found'
      });
    }

    res.status(200).json({
      message: 'Course updated successfully',
      data: course
    });
  } catch (error) {
    console.error(error);

    if (error.code === 'ER_NO_REFERENCED_ROW_2') {
      return res.status(400).json({
        message: 'category_id or tutor_id does not exist'
      });
    }

    res.status(500).json({
      message: 'Failed to update course'
    });
  }
}

async function remove(req, res) {
  try {
    const deleted = await courseService.remove(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        message: 'Course not found'
      });
    }

    res.status(200).json({
      message: 'Course deleted successfully'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Failed to delete course'
    });
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
