import { Button, Table } from 'reactstrap'
import { format } from 'date-fns'
import CalendarDate from '../components/CalendarDate'
import Day from '../types/Day'

type Props = {
  date: Date
  nextMonth: () => void
  prevMonth: () => void
  setDate: (date: Date) => void
  weeks: Day[][]
}

function Calendar({ date, setDate, nextMonth, prevMonth, weeks }: Props) {
  return (
    <Table>
      <thead>
        <tr>
          <th colSpan={7} className="px-0">
            <div className="d-flex justify-content-between align-items-center">
              <Button color="light" onClick={prevMonth}>
                ◀︎
              </Button>
              {format(date, 'MMMM yyyy')}
              <Button color="light" onClick={nextMonth}>
                ▶︎
              </Button>
            </div>
          </th>
        </tr>
        <tr>
          {weeks[0].map((day, i) => (
            <th key={i} className="text-center">
              {format(day.date, 'EEE')}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {weeks.map((days, w) => (
          <tr key={w}>
            {days.map((day) => (
              <CalendarDate day={day} onClick={() => setDate(day.date)} />
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default Calendar
