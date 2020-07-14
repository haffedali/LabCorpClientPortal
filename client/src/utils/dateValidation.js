export const dateError = (selectedDate) => {
    if (selectedDate.startDate < new Date()) {
        return "Date Must be after Today"
    }

    if (selectedDate.startDate.getDay() === 0 || selectedDate.startDate.getDay() === 6) {
        return "Closed On Weekends"
    }
}

export const startTimeError = (selectedDate) => {
    if (selectedDate.startTime.getHours() < 8) {
        return "Time must be After 8:00 AM"
    }
    if (selectedDate.startTime.getHours() > 16) {
        return "Time Must be an Hour Before 5:00 PM"
    }
}

export const endTimeError = (selectedDate) => {
    if (selectedDate.endTime.getHours() <= selectedDate.startTime.getHours()) {
        return "Choose End Time an Hour Passed Start Time"
    }
    if (selectedDate.endTime.getHours() > 17) {
        return "Choose End Time Before 5 PM"
    }
}