import CalendarStore from '../CalendarStore.ts'
import { isSameDay } from 'date-fns'

describe('CalendarStore', () => {  
  let store

  beforeEach(() => {
    store = new CalendarStore()
  })
  test('defaults to today', () => {
    expect(isSameDay(store.date, new Date())).toBe(true)
  })

  test('weeks are 7 days long', () => {
    store.weeks.forEach(week => expect(week.length).toBe(7))
  })

  test('shows 6 weeks', () => {
    expect(store.weeks.length).toBe(6)
  })

  test('shows 6 weeks', () => {
    expect(store.weeks.length).toBe(6)
  })

  test('shows correct dates when specified', () => {
    const oldStore = new CalendarStore(new Date(2016, 9, 16))
    expect(isSameDay(oldStore.date, new Date(2016, 9, 16))).toBe(true)
    expect(isSameDay(oldStore.start, new Date(2016, 8, 25))).toBe(true)
    expect(isSameDay(oldStore.end, new Date(2016, 10, 5))).toBe(true)
  })

  test('goes to specified date', () => {
    const oldStore = new CalendarStore()
    expect(isSameDay(oldStore.date, new Date())).toBe(true)

    oldStore.setDate(new Date(2016, 9, 16))
    expect(isSameDay(oldStore.date, new Date(2016, 9, 16))).toBe(true)
    expect(isSameDay(oldStore.start, new Date(2016, 8, 25))).toBe(true)
    expect(isSameDay(oldStore.end, new Date(2016, 10, 5))).toBe(true)
  })

  test('goes to previous and next month', () => {
    const oldStore = new CalendarStore(new Date(2001, 8, 11))
    expect(isSameDay(oldStore.date, new Date(2001, 8, 11))).toBe(true)

    oldStore.prevMonth()
    expect(isSameDay(oldStore.date, new Date(2001, 7, 11))).toBe(true)

    oldStore.nextMonth()
    oldStore.nextMonth()
    expect(isSameDay(oldStore.date, new Date(2001, 9, 11))).toBe(true)
  })
})