export function weekFilter(date){
    const week_date = new Date(date)
    const today_date = week_date.getDate()

    const week_start = new Date(week_date)
    week_start.setDate(today_date - week_date.getDay())
    week_start.setHours(0,0,0,0)

    const week_end = new Date(week_start)
    week_end.setDate(week_start.getDate() + 6)
    week_end.setHours(23,59,59,999)

    return {weekStart: week_start, weekEnd: week_end}
}

export function moodWeekFilter(moodDate,week_start, week_end){
    const mood_date = new Date(moodDate)
    return mood_date >= week_start && mood_date <= week_end
}