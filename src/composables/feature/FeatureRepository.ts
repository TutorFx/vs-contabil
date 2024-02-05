import type { IFeatureRepository } from "../features";
import FeatureController from "./FeatureController";

export default class FeatureRepository {
  Repository: Array<FeatureController> = [];

  constructor(setup: IFeatureRepository) {
    if (!FeatureRepositorySchema.safeParse(setup).success) {
      console.warn("Error on loading FeatureRepositorySchema")
    }
    setup.forEach((item: IFeature) =>
      this.Repository.push(new FeatureController(item))
    );
  }

  get() {
    return this.Repository
  }
}
