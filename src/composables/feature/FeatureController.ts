import type { IFeature } from "../features";
import { FeatureSchema } from "../features";

interface FeatureInterface extends IFeature {}

export default class FeatureController implements FeatureInterface {
  title: string;
  path: string;
  description: string;
  constructor(feature: IFeature) {
    if (!FeatureSchema.safeParse(feature).success) {
      throw new Error("Wrong Type on FeatureController");
    }

    this.title = feature.title;
    this.path = feature.path;
    this.description = feature.description;
  }
}
