import type TestimonialRepository from "./TestimonialRepository";

export default class TestimonialService {
  TestimonialRepository: TestimonialRepository

  constructor(TestimonialRepository: TestimonialRepository){
    this.TestimonialRepository = TestimonialRepository;
  }

  get() {
    return this.TestimonialRepository.get()
  }
}