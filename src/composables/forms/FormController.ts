import { ZodError } from "zod";
import { FetchError } from "ofetch";
import { type ISchema, useZodError } from "../forms";

export default class FormController {

  private status = reactive({
    touched: false,
    pending: false,
    success: false,
  })

  private store = reactive<ISchema["form"]>({
    email: "",
    name: "",
    phone: "",
    message: "" 
  });

  async send(){
    try {
      this.status.touched = true;
      this.status.pending = true;
      // Validate Field
      Schema.form.parse(this.store)
      // Send Request
      await $fetch("/api/v1/handleform", {
        method: "POST",
        body: this.store
      });
      this.status.success = true
    } catch (e) {
      if (e instanceof ZodError) {
        console.error('Invalid Form Data')
      };
      if (e instanceof FetchError) {
        console.error('Server Error')
      };
    } finally {
      this.status.pending = false;
    }
  }

  state(){
    return computed(() => this.store);
  }

  validation(){
    const state = toRefs(this.state().value)

    return computed(() => ({
      name: useZodError('name', state.name),
      email: useZodError('email', state.email),
      phone: useZodError('phone', state.phone),
      message: useZodError('message', state.message)
    }))
  }

  getStatus(){
    return toRefs(this.status)
  }
}
