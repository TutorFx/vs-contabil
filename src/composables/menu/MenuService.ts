import type MenuRepository from "./MenuRepository";

export default class MenuService {
  MenuRepository: MenuRepository

  constructor(MenuRepository: MenuRepository){
    this.MenuRepository = MenuRepository;
  }

  get() {
    return this.MenuRepository.get()
  }
}