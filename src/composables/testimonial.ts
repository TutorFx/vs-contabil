import { z } from "zod";

export const TestimonialUserSchema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  org: z.string().min(1),
  image: z.string().min(1),
});

export const TestimonialCommentSchema = z.object({
  title: z.string().min(1),
  message: z.string().min(1),
});

export const TestimonialSchema = z.object({
  user: TestimonialUserSchema,
  comment: TestimonialCommentSchema,
});

export const TestimonialRepositorySchema = z.array(TestimonialSchema);

export type ITestimonialComment = z.infer<typeof TestimonialCommentSchema>;
export type ITestimonialUser = z.infer<typeof TestimonialUserSchema>;
export type ITestimonial = z.infer<typeof TestimonialSchema>;
export type ITestimonialRepository = z.infer<
  typeof TestimonialRepositorySchema
>;

/**
 * Defines a configuration for testimonials.
 * @param defined - A function that returns an instance of `ITestimonialRepository`.
 * @returns {ITestimonialRepository} The defined set of menu items.
 */
export const defineTestimonialsConfig = (
  defined: () => ITestimonialRepository
): ITestimonialRepository => {
  return defined();
};

export default defineTestimonialsConfig;