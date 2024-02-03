import { z } from "zod";
import MenuService from "./menu/MenuService";
import MenuRepository from "./menu/MenuRepository";

export enum LinkType {
  ExternalLink,
  InternalLink,
}

// Define a schema for the object structure of RouteLocationRaw
const RouteLocationPathRawSchema = z.object({
  path: z.string(),
});

const RouteLocationNamedRawSchema = z.object({
  name: z.string(),
  params: z.record(z.string()),
});

// Define a schema that covers all possible shapes of RouteLocationRaw
const RouteLocationRawSchema = z.union([
  z.string(),
  RouteLocationPathRawSchema,
  RouteLocationNamedRawSchema,
]);

export const MenuSchema = z.object({
  LinkType: z.nativeEnum(LinkType),
  url: z.string().min(1),
  content: RouteLocationRawSchema,
});

export const MenuSchemas = z.array(MenuSchema);

export type IMenu = z.infer<typeof MenuSchema>;
export type IMenuRepository = z.infer<typeof MenuSchemas>;
export type IRouteLocationRawSchema = z.infer<typeof RouteLocationRawSchema>

/**
 * Defines a menu configuration.
 * @param defined {() => IMenuRepository} A function that returns a set of menu items.
 * @returns {IMenuRepository} The defined set of menu items.
 */
export const defineMenuConfig = (defined: () => IMenuRepository): IMenuRepository => {
  return defined();
};

/**
 * Creates a new instance of Menu with provided items.
 * @param items {@link IMenuRepository} Array of menu items to be used in the Menu.
 * @returns {typeof MenuService.prototype} An instance of Menu.
 */
export const useMenu = (items: IMenuRepository): typeof MenuService.prototype => {
  const repository = new MenuRepository(items);
  return new MenuService(repository);
};

export default defineMenuConfig;
