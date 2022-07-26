import {Request, Response} from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response){
  const jsonResponse = CreateCourseService.execute({
    name:'NodeJS', 
    duration:10,
    educator: "Dani"
  });

  return response.json(jsonResponse);
}