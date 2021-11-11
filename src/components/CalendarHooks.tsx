import Calendar from './Calendar'
import useCalendar from '../hooks/useCalendar'

function CalendarHooks() {
  const { date, setDate, nextMonth, prevMonth, weeks } = useCalendar()

  return (
    <Calendar
      date={date}
      nextMonth={nextMonth}
      prevMonth={prevMonth}
      setDate={setDate}
      weeks ={weeks}
    />
  )
}

export default CalendarHooks
