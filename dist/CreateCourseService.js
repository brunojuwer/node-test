"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute({ name, duration, educator }) {
        return { name, duration, educator };
    }
}
exports.default = new CreateCourseService();
