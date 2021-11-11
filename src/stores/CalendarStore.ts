import { makeAutoObservable } from 'mobx'
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

class CalendarStore {
  date: Date

  constructor(currentDate: Date = new Date()) {
    makeAutoObservable(this)

    this.date = currentDate
  }

  get start(): Date {
    return startOfWeek(startOfMonth(this.date))
  }

  get end(): Date {
    return endOfWeek(addWeeks(this.start, 5))
  }

  get days(): Day[] {
    return eachDayOfInterval({ start: this.start, end: this.end }).map(
      (d: Date) => {
        return {
          date: startOfDay(d),
          sameMonth: isSameMonth(this.date, d),
          selected: isSameDay(this.date, d),
          today: isToday(d),
        }
      },
    )
  }

  get weeks(): Day[][] {
    let weeksInMonth = []
    for (let i = 0, len = this.days.length; i < len; i += 7) {
      weeksInMonth.push(this.days.slice(i, i + 7))
    }

    return weeksInMonth
  }

  nextMonth = () => (this.date = addMonths(this.date, 1))
  prevMonth = () => (this.date = addMonths(this.date, -1))
  setDate = (newDate: Date) => (this.date = newDate)
}

export default CalendarStore
