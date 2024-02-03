import type FeatureRepository from "./FeatureRepository";

export default class MenuService {
  FeatureRepository: FeatureRepository

  constructor(FeatureRepository: FeatureRepository){
    this.FeatureRepository = FeatureRepository;
  }

  get() {
    return this.FeatureRepository.get()
  }
}