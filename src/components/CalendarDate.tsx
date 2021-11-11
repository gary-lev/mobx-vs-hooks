import { HTMLProps } from 'react'
import classnames from 'clsx'
import { format, isToday } from 'date-fns'
import Day from '../types/Day'

interface Props extends HTMLProps<HTMLTableCellElement> {
  day: Day
}

function CalendarDate({ children, day, ...props }: Props) {
  const classNames = classnames({
    'bg-light text-muted': !day.sameMonth, // Lighten days in months before & after
    'bg-primary text-white': day.selected, // Highlight selected date
    'text-primary font-weight-bold': !day.selected && isToday(day.date), // Highlight today's date
  })

  return (
    <td className={classNames} role="button" style={{ minHeight: '14vw' }} {...props}>
      {format(day.date, 'd')}
      {children}
    </td>
  )
}

export default CalendarDate
