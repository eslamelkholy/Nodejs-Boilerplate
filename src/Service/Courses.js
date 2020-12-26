import db from "../models";
class Courses {
  async getCourses() {
    const courses = await db.payment.findAll({});
    return courses;
  }
}

export default Courses;
