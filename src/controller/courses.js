import CoursesService from "../Service/Courses";

/**
 *
 * @returns {courses[]}
 */

const get = async (req, res) => {
  const coursesService = new CoursesService();
  const courses = await coursesService.getCourses();
  return res.status(200).send(courses);
};
export default {
  get,
};
