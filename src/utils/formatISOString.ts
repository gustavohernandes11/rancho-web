import moment from "moment"

export const formatISOString = (
    isoString: string,
    format: string = "yyy-MM-DD"
): string => moment(new Date(isoString)).format(format)
