export const formatDate = (input: number | Date | undefined): string => {
    return new Intl.DateTimeFormat("pt-br", {
        dateStyle: "short",
        timeStyle: "medium",
    }).format(input)
}
