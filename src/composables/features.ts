import { z } from "zod";
import FeatureRepository from "./feature/FeatureRepository";
import FeatureService from "./feature/FeatureService";

export const FeatureSchema = z.object({
    title: z.string().min(1),
    path: z.string().min(1),
    description: z.string().min(1)
});
export const FeatureRepositorySchema = z.array(FeatureSchema);

export type IFeature = z.infer<typeof FeatureSchema>;
export type IFeatureRepository = z.infer<typeof FeatureRepositorySchema>;

/**
 * Defines a configuration for features based on the provided definition function.
 * @param defined - A function returning an `IFeatureRepository` that defines the features configuration.
 * @returns {typeof IFeatureRepository} The result of invoking the `defined` function, which is the features configuration.
 */
export const defineFeaturesConfig = (defined: () => IFeatureRepository) => {
    return defined()
}

/**
 * Creates a new instance of Feature with provided items.
 * @param items {@link IFeatureRepository} Array of Feature items to be used in the Feature.
 * @returns {typeof FeatureService.prototype} An instance of Feature.
 */
export const useFeature = (items: IFeatureRepository): typeof FeatureService.prototype => {
    const repository = new FeatureRepository(items);
    return new FeatureService(repository);
};