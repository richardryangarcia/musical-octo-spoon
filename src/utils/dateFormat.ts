export const formatDate = (date: Date) => {
    return date.toLocaleDateString(undefined, { weekday: "long", year: "numeric", month: "long", day: "numeric" })
  }

export const formatTime = (date: Date) => {
    const string = date.toLocaleDateString(undefined, { hour: "numeric", minute: "numeric", second: "numeric" })
    const dateParts = string.split(", ")
    return dateParts[1]
}