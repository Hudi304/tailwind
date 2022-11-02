import { FC, memo } from "react"
import "./Icon.scss"
import {
  ExclamationIcon,
  SaveIcon,
  ClipboardCheckIcon,
  BellIcon,
  UserIcon,
  HomeIcon,
  PlusCircleIcon,
  ChartSquareBarIcon,
  DocumentSearchIcon,
  ClipboardListIcon,
  StatusOnlineIcon,
  HeartIcon,
  CursorClickIcon,
  FlagIcon,
  FireIcon,
  KeyIcon,
  PhotographIcon,
  ThumbUpIcon,
  CheckIcon,
  XIcon,
  CogIcon,
  EyeIcon,
  TrashIcon,
  ClipboardCopyIcon,
  PencilIcon,
  ArrowRightIcon,
  FilterIcon,
  ViewBoardsIcon,
  SearchIcon,
  SaveAsIcon,
  TagIcon,
  DownloadIcon,
  ShareIcon,
  StarIcon,
  DocumentDuplicateIcon,
  PaperAirplaneIcon,
  PlusIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  MenuIcon,
  MenuAlt4Icon,
  DocumentDownloadIcon,
  InformationCircleIcon,
  ArrowSmRightIcon,
  ChartBarIcon,
  CubeIcon,
  LibraryIcon,
  PresentationChartLineIcon,
  PaperClipIcon,
  CloudUploadIcon,
} from "@heroicons/react/outline"

import {
  ChevronDownIcon as ChevronDownSolid,
  ChevronUpIcon as ChevronUpSolid,
  PlusCircleIcon as PlusCircleSolidIcon,
  ExclamationIcon as ExclamationSolidIcon,
  ChartSquareBarIcon as ChartSquareBarSolidIcon,
  ChartBarIcon as ChartBarSolidIcon,
  TrendingDownIcon as TrendingDownIconSolid,
  TrendingUpIcon as TrendingUpIconSolid,
} from "@heroicons/react/solid"

export const ICONS = {
  SAVE: SaveIcon,
  BELL: BellIcon,
  USER: UserIcon,
  HOME: HomeIcon,
  PAPER_CLIP: PaperClipIcon,

  CHART_SQUARE_BAR: {
    OUTLINED: ChartSquareBarIcon,
    SOLID: ChartSquareBarSolidIcon,
  },

  CLOUD_UPLOAD: CloudUploadIcon,

  CHART_BAR: {
    OUTLINED: ChartBarIcon,
    SOLID: ChartBarSolidIcon,
  },
  TRENDING_UP: TrendingUpIconSolid,
  TRENDING_DOWN: TrendingDownIconSolid,

  CUBE: CubeIcon,
  LIBRARY: LibraryIcon,
  PRESENTATION_CHART_LINE: PresentationChartLineIcon,

  EXCLAMATION: ExclamationIcon,
  EXCLAMATION_SOLID: ExclamationSolidIcon,
  PLUS_CIRCLE: PlusCircleIcon,
  PLUS_CIRCLE_SOLID: PlusCircleSolidIcon,
  PLUS: PlusIcon,
  STATUS_ONLINE: StatusOnlineIcon,
  HEARTH: HeartIcon,
  CURSOR_CLICK: CursorClickIcon,
  FLAG: FlagIcon,
  EQUALS: MenuAlt4Icon,
  CHEVRON_RIGHT: ChevronRightIcon,
  CHEVRON_LEFT: ChevronLeftIcon,
  CHEVRON_DOWN: ChevronDownIcon,
  CHEVRON_UP: ChevronUpIcon,
  CHEVRON_UP_SOLID: ChevronUpSolid,
  CHEVRON_DOWN_SOLID: ChevronDownSolid,
  VIEW: EyeIcon,
  PENCIL: PencilIcon,
  DELETE: TrashIcon,
  CANCEL: XIcon,
  CHECK: CheckIcon,
  COPY: ClipboardCopyIcon,
  FIRE: FireIcon,
  PHOTOGRAPH: PhotographIcon,
  THUMBS_UP: ThumbUpIcon,
  KEY: KeyIcon,
  COG: CogIcon,
  ARROW_RIGHT: ArrowRightIcon,
  FILTER: FilterIcon,
  VIEW_BOARDS: ViewBoardsIcon,
  SEARCH: SearchIcon,
  SAVE_AS: SaveAsIcon,
  TAG: TagIcon,
  DOWNLOAD: DownloadIcon,
  SHARE: ShareIcon,
  FEATURED: StarIcon,
  DOCUMENT_DUPLICATE: DocumentDuplicateIcon,
  PAPER_AIRPLANE: PaperAirplaneIcon,
  MENU: MenuIcon,
  DOCUMENT_DOWNLOAD: DocumentDownloadIcon,
  INFORMATION_CIRCLE_OUTLINED: InformationCircleIcon,
  ARROW_SM_RIGHT: ArrowSmRightIcon,
}

type Props = {
  icon: any
  className?: string
  size?: number
}

export const Icon: FC<Props> = memo(({ icon, className, size = 5 }: Props) => {
  const IconComp = icon
  if (!icon) return null
  return (
    <IconComp
      className={className}
      style={{
        width: `${size * 4}px`,
        height: `${size * 4}px`,
      }}
    />
  )
})
