import type {
  ITestimonial,
  ITestimonialComment,
  ITestimonialUser,
} from "../testimonial";
import { TestimonialSchema } from "../testimonial";

interface TestimonialInterface extends ITestimonial {}

export default class TestimonialController implements TestimonialInterface {
  user: ITestimonialUser;
  comment: ITestimonialComment;
  constructor(testimonial: ITestimonial) {
    if (!TestimonialSchema.safeParse(testimonial).success) {
      throw new Error("Wrong Type on Testimonial");
    }
    this.user = testimonial.user;
    this.comment = testimonial.comment;
  }
}
