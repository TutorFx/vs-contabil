import type { z } from "zod";
import FormController from "./forms/FormController";
import FormService from "./forms/FormService";
import * as Schema from "./forms/schemas"

export type ISchema = {
  [K in keyof typeof Schema]: z.infer<(typeof Schema)[K]>;
};

export const useForm = () => {
  const controller = new FormController();
  return new FormService(controller);
};

/**
 * Uses a Zod schema to compute validation errors from a reactive state.
 *
 * This function takes a Zod schema and a reactive state as input. It then computes
 * and returns any validation errors as a `ComputedRef` of an array of `z.ZodIssue` objects.
 * @param schema The key of the schema in the `ISchema` interface.
 * @param state A reactive reference holding the value to be validated against the schema.
 * @returns {globalThis.ComputedRef<z.ZodIssue[]>} A `ComputedRef` holding an array of `z.ZodIssue` objects representing validation errors.
 */
export const useZodError = (
  schema: keyof ISchema,
  state: Ref
): globalThis.ComputedRef<z.ZodIssue[]> => {
  // eslint-disable-next-line import/namespace
  const currentSchema = Schema[schema];
  type ICurrentSchema = z.infer<typeof currentSchema>;
  const result = computed(() => currentSchema.safeParse(state.value));
  const errors = computed(() => {
    if (result.value.success) {
      return [];
    }
    return (result.value.error as z.ZodError<ICurrentSchema>).issues ?? [];
  });
  return errors;
};

/**
 * Filters validation errors to find those related to a specific field path.
 *
 * Given a field path and a collection of Zod validation errors, this function will filter
 * and return only the errors that match the specified path. Useful for extracting field-specific
 * validation messages in a form.
 * @param path The dot-notated string path of the field to match in the validation errors, e.g., "user.name".
 * @param errors A `ComputedRef` holding an array of `z.ZodIssue` objects representing validation errors.
 * @returns {globalThis.ComputedRef<z.ZodIssue[]>} A `ComputedRef` holding an array of `z.ZodIssue` objects specifically related to the provided path.
 */
export const useZodFieldError = (
  path: string,
  errors: globalThis.ComputedRef<z.ZodIssue[]>
): globalThis.ComputedRef<z.ZodIssue[]> =>
  computed(() => errors.value?.filter((e) => e.path.includes(path)) ?? []);

export { Schema };
