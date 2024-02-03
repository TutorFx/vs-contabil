import type { IFeatureRepository } from "../features";
import FeatureController from "./FeatureController";

export default class FeatureRepository {
  Repository: Array<FeatureController> = [];

  constructor(setup: IFeatureRepository) {
    if (!FeatureSchema.safeParse(setup).success) {
      throw new Error("Wrong Type on FeatureRepository");
    }
    setup.forEach((item: IFeature) =>
      this.Repository.push(new FeatureController(item))
    );
  }

  get() {
    return this.Repository
  }
}
