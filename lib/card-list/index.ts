export {
  CARD_ICON_NAMES,
  CARD_ICON_NAME_SET,
  DEFAULT_CARD_ICON,
  isCardIconName,
  resolveCardIconName,
  type CardIconName,
} from './icons'

export {
  CARD_LIST_KINDS,
  CARD_LIST_LIMITS,
  CARD_LIST_SECTION_BY_ID,
  CARD_LIST_SECTION_IDS,
  CARD_LIST_SECTIONS,
  DEFAULT_EMPTY_SECTION_MODE,
  EMPTY_SECTION_MODES,
  createCardItemId,
  emptySectionModeSchema,
  equipmentCardItemSchema,
  equipmentItemsSchema,
  featureCardItemSchema,
  featureGridItemsSchema,
  getItemsSchemaForKind,
  iconListItemSchema,
  iconListItemsSchema,
  numberedStepsItemsSchema,
  parseEmptyModeForRead,
  parseEmptyModeForWrite,
  parseItemsJsonForRead,
  parseItemsJsonForWrite,
  serializeItems,
  type CardItem,
  type CardListKind,
  type CardListSectionConfig,
  type CardListSectionId,
  type EmptySectionMode,
  type EquipmentCardItem,
  type FeatureCardItem,
  type IconListItem,
} from './schema'

export {
  DEFAULT_ABOUT_EQUIPMENT,
  DEFAULT_HOME_CADCAM_POINTS,
  DEFAULT_HOME_FEATURES,
  DEFAULT_ITEMS_BY_SECTION,
  DEFAULT_PRODUCTS_FLOW,
  DEFAULT_PRODUCTS_REASONS,
  DEFAULT_PRODUCTS_TELESCOPE,
  createBlankCardItem,
} from './defaults'

export {
  normalizeLegacyCardItems,
  resolveCardList,
  type CardListResolveSource,
  type ResolvedCardList,
} from './legacy'
