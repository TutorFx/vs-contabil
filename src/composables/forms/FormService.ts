import type FormController from "./FormController"

export default class FormService {
    FormController: FormController;

    constructor(FormController: FormController){
        this.FormController = FormController;
    }

    send() {
        this.FormController.send()
    }

    getState() {
        return toRefs(this.FormController.state().value)
    }

    getStatus() {
        return this.FormController.getStatus()
    }

    getValidation() {
        return this.FormController.validation().value
    }
}