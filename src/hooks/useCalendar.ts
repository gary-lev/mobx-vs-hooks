import { useMemo, useState } from 'react'
import {
  addMonths,
  addWeeks,
  eachDayOfInterval,
  endOfWeek,
  isSameDay,
  isSameMonth,
  isToday,
  startOfDay,
  startOfMonth,
  startOfWeek,
} from 'date-fns'
import Day from '../types/Day'

function useCalendar(currentDate: Date = new Date()) {
  const [date, setDate] = useState<Date>(currentDate)

  const start = startOfWeek(startOfMonth(date))
  const end = endOfWeek(addWeeks(start, 5))

  const days = useMemo<Day[]>(() => (
    eachDayOfInterval({ start, end }).map((d: Date) => {
      return {
        date: startOfDay(d),
        sameMonth: isSameMonth(date, d),
        selected: isSameDay(date, d),
        today: isToday(d),
      }
    })
  ), [date])

  const weeks = useMemo<Day[][]>(() => {
    let weeksInMonth = []
    for (let i = 0, len = days.length; i < len; i += 7) {
      weeksInMonth.push(days.slice(i, i + 7))
    }

    return weeksInMonth
  }, [days]);

  const nextMonth = () => setDate(addMonths(date, 1))
  const prevMonth = () => setDate(addMonths(date, -1))

  return {
    date,
    setDate,
    days,
    end,
    start,
    weeks,
    nextMonth,
    prevMonth
  }
}

export default useCalendar
