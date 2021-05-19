export const formatDate = (date: Date) => {
    return date.toLocaleDateString(undefined, { weekday: "long", year: "numeric", month: "long", day: "numeric" })
}

export const formatTime = (date: Date) => {
    const string = date.toLocaleDateString(undefined, { hour: "numeric", minute: "numeric", second: "numeric" })
    const dateParts = string.split(", ")
    return dateParts[1]
}

export const formatShortDate = (date: Date) => {
  return date.toLocaleDateString(undefined, { year: "numeric", month: "2-digit", day: "2-digit" })
}

export const dateNotInThePast = (date: Date, dateNow: Date) => {
  const dateNowFormatted = formatShortDate(dateNow)
  const dateFormatted = formatShortDate(date)
  return dateFormatted >= dateNowFormatted
}

export const areTheSameDay = (dateString:Date, dateString2: Date) => {
  return formatShortDate(new Date(dateString)) === formatShortDate(new Date(dateString2))
}
