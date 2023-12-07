const commonTheme = {
    screen: {
        mobile: "40rem",
        tablet: "48rem",
        laptop: "64rem",
        desktop: "80rem",
    },
}
export const lightTheme = {
    color: {
        background: "#FFFFFF",
        surface: "#EFEFEF",
        text: "#000000",
        secondaryText: "#696969",
        primary: "#56A763",
        secondary: "#4a8954",
        border: "#D9D9D9",
        danger: "#E25555",
        icon: "#3F3F3F",
        iconSecondary: "#848484",
    },
    ...commonTheme,
}
export const darkTheme = lightTheme // need to create the dark theme
export type ITheme = typeof lightTheme
