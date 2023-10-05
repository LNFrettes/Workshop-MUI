import { FC } from 'react'
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import {
  IconDefinition,
  faHome as home,
  faUser as user,
  faLock as lock,
  faClock as clock,
  faSearch as search,
  faCog as settings,
  faMobileAlt as mobile,
  faUserCheck as userCheck,
  faUserClock as userClock,
  faCheck as check,
  faTimes as times,
  faHistory as history,
  faChartBar as chartbar,
  faDesktop as desktop,
  faThLarge as modules,
  faPlus as plus,
  faPlusCircle as plusCircle,
  faEllipsisV as more,
  faEdit as edit,
  faTrashAlt as trash,
  faDownload as download,
  faCalendarAlt as calendar,
  faCheckCircle as checkCircle,
  faChevronLeft as chevronLeft,
  faChevronRight as chevronRight,
  faSignOutAlt as signOut,
  faSpinner as spinner,
  faUndo as undo,
  faFileExcel as excel,
  faFile as file,
  faQuestionCircle as tooltip,
  faEye as eye,
  faEyeSlash as eyeSlash,
  faMinusCircle as minusCircle,
  faMinus as minus,
  faRedo as redo,
  faEnvelope as mail,
  faCaretUp as caretUp,
  faCaretDown as caretDown,
  faClinicMedical as pharmacy,
  faTimesCircle as timesCircle,
  faCopy as copy,
  faCommentDots as showMoreComment,
  faFileUpload as upload,
  faSortAmountUp as order,
  faGripVertical as gripVertical,
  faGripLines as gripLines,
  faCircle as circle,
  faBell as bell,
  faPrint as print,
  faSave as save,
  faBars as bars,
  faClipboardList as clipboardList,
  faInfoCircle as infoCircle,
  faList as list,
  faColumns as columns,
  faEnvelope as envelope,
  faInbox as inbox,
  faPhone as phone,
  faExclamationCircle as exclamationCircle,
  faCalendarCheck as calendarCheck,
  faCalendarTimes as calendarTimes,
  faCaretRight as caretRight,
  faFilePdf as filePdf,
} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import {
  compose,
  space,
  SpaceProps,
  border,
  BorderProps,
  position,
  PositionProps,
  typography,
  TypographyProps,
  color,
  ColorProps,
} from 'styled-system'

const icons = {
  home,
  user,
  lock,
  clock,
  check,
  times,
  search,
  settings,
  mobile,
  userCheck,
  userClock,
  history,
  chartbar,
  desktop,
  modules,
  plus,
  plusCircle,
  more,
  edit,
  trash,
  download,
  calendar,
  checkCircle,
  chevronLeft,
  chevronRight,
  signOut,
  spinner,
  undo,
  excel,
  tooltip,
  eye,
  eyeSlash,
  minusCircle,
  minus,
  redo,
  mail,
  caretUp,
  caretDown,
  pharmacy,
  timesCircle,
  copy,
  showMoreComment,
  upload,
  order,
  gripVertical,
  gripLines,
  circle,
  bell,
  print,
  save,
  bars,
  clipboardList,
  infoCircle,
  columns,
  list,
  envelope,
  inbox,
  phone,
  exclamationCircle,
  file,
  calendarCheck,
  calendarTimes,
  caretRight,
  filePdf,
} as const

export type IconsOptions = keyof typeof icons
interface IconProps
  extends SpaceProps,
    BorderProps,
    PositionProps,
    TypographyProps,
    ColorProps,
    Omit<
      FontAwesomeIconProps,
      | `fontSize`
      | `color`
      | `height`
      | `width`
      | `opacity`
      | `fontFamily`
      | `letterSpacing`
      | `fontWeight`
      | `fontStyle`
      | `border`
      | `icon`
    > {
  spin?: boolean
  onClick?: (e: unknown) => void
  cursor?: string
  icon: IconDefinition
}

const Icon: FC<IconProps> = styled(FontAwesomeIcon)<IconProps>`
  ${compose(color, typography, space, position, border)}
  ${({ onClick = null, cursor = onClick != null ? `pointer` : `` }) =>
    `${cursor != null ? `cursor: ${cursor}` : ``}`}
`
type IIconWrapper = Omit<IconProps, `icon`> & { icon: IconsOptions }

function IconWrapper({ icon, ...props }: IIconWrapper): JSX.Element {
  return <Icon icon={icons[icon]} {...props} />
}

export default IconWrapper
