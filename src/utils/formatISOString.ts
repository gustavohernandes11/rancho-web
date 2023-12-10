import moment from "moment"

export const formatISOString = (
    isoString: string,
    format: string = "yyy-MM-DD"
) => moment(new Date(isoString)).format(format)
