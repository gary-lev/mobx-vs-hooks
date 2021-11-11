import { observer  } from 'mobx-react-lite';
import Calendar from './Calendar'
import CalendarStore from '../stores/CalendarStore'

const store = new CalendarStore()

function CalendarMobx() {
  const { date, setDate, nextMonth, prevMonth, weeks } = store;

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

export default observer(CalendarMobx)
