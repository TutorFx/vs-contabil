import { MenuSchemas } from "../menu";
import MenuController from "./MenuController"

export default class MenuRepository {
  Repository: Array<MenuController> = [];

  constructor(setup: IMenuRepository) {
    if (!MenuSchemas.safeParse(setup).success) {
      throw new Error("Wrong Type on MenuRepository");
    }
    setup.forEach((item: IMenu) => this.Repository.push(new MenuController(item)));
  }

  get() {
    return this.Repository
  }
}