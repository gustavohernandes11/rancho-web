import moment from "moment"

export const getYearsDiffFromISO = (ISOstring: string) =>
    moment().diff(new Date(ISOstring), "years")
