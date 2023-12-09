export const getBirthdateFromYearsAndMonths = (
    years: number = 0,
    months: number = 0
) => {
    const dateNow = new Date()

    var birthYear = dateNow.getFullYear() - years
    var birthMonth = dateNow.getMonth() - months

    while (birthMonth < 0) {
        birthMonth += 12
        birthYear--
    }

    return new Date(birthYear, birthMonth, dateNow.getDate()).toISOString()
}
