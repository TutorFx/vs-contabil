import type { ITestimonial, ITestimonialRepository } from "../testimonial"
import { TestimonialRepositorySchema } from "../testimonial"
import TestimonialController from "./TestimonialController"

export default class TestimonialRepository {
  Repository: Array<TestimonialController> = [];

  constructor(setup: ITestimonialRepository) {
    if (!TestimonialRepositorySchema.safeParse(setup).success) {
      console.warn("Error on loading TestimonialRepositorySchema")
    }
    setup.forEach((item: ITestimonial) =>
      this.Repository.push(new TestimonialController(item))
    );
  }

  get() {
    return this.Repository
  }
}
