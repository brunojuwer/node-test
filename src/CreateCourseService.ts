
interface Course {
  name: string;
  duration: number;
  educator: string;
}

class CreateCourseService {

  execute({name, duration, educator}: Course) {
    return {name, duration, educator};
  }
}

export default new CreateCourseService();