import moment from "moment"

export const getMonthsDiffFromISO = (ISOstring: string) =>
    moment().diff(new Date(ISOstring), "months") % 12
