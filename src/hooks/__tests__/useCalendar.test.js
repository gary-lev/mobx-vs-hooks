import { renderHook, act } from '@testing-library/react-hooks'
import { isSameDay } from 'date-fns'
import useCalendar from '../useCalendar'

describe('useCalendar', () => {
  test('defaults to today', () => {
    const { result } = renderHook(() => useCalendar())

    expect(isSameDay(result.current.date, new Date())).toBe(true)
  })

  test('weeks are 7 days long', () => {
    const { result } = renderHook(() => useCalendar())
    result.current.weeks.forEach(week => expect(week.length).toBe(7))
  })

  test('shows 6 weeks', () => {
    const { result } = renderHook(() => useCalendar())
    expect(result.current.weeks.length).toBe(6)
  })

  test('shows 6 weeks', () => {
    const { result } = renderHook(() => useCalendar())
    expect(result.current.weeks.length).toBe(6)
  })

  test('shows correct dates when specified', () => {
    const { result } = renderHook(() => useCalendar(new Date(2016, 9, 16)))
    expect(isSameDay(result.current.date, new Date(2016, 9, 16))).toBe(true)
    expect(isSameDay(result.current.start, new Date(2016, 8, 25))).toBe(true)
    expect(isSameDay(result.current.end, new Date(2016, 10, 5))).toBe(true)
  })

  test('goes to specified date', () => {
    const { result } = renderHook(() => useCalendar())
    expect(isSameDay(result.current.date, new Date())).toBe(true)

    act(() => {
      result.current.setDate(new Date(2016, 9, 16))
    })

    expect(isSameDay(result.current.date, new Date(2016, 9, 16))).toBe(true)
    expect(isSameDay(result.current.start, new Date(2016, 8, 25))).toBe(true)
    expect(isSameDay(result.current.end, new Date(2016, 10, 5))).toBe(true)
  })

  test('goes to previous and next month', () => {
    const { result } = renderHook(() => useCalendar(new Date(2001, 8, 11)))
    expect(isSameDay(result.current.date, new Date(2001, 8, 11))).toBe(true)

    act(() => result.current.prevMonth())
    expect(isSameDay(result.current.date, new Date(2001, 7, 11))).toBe(true)

    act(() => result.current.nextMonth())
    expect(isSameDay(result.current.date, new Date(2001, 8, 11))).toBe(true)
  })
})
