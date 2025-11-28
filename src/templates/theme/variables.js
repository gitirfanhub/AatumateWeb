export const colors = {
  primary: "#000000",
  secondary: "#ffffff",
  tertiary: "#7B7B7B",
  footer: "#EFEFEF",
  grey: "#CCCCCC",
  backgroundGrey: "#f4f3f4",
  red: "#AF0007"
};

export const radius = {
  rounded: "0.3rem",
  round: "1.5rem"
};

export const shadow = {
  default: "0px 2px 6px rgba(0, 0, 0, 0.23)",
  buttonShadow: "0px 2px 3px rgba(0, 0, 0, 0.15)",
  cardShadow: "0 1px 10px rgb(0 0 0 /8%)"
};

export const fontAppearance = {
  largeFont: "400 56px/1 'Neurial Grotesk Regular'",
  headerLight: "300 40px/1 'Neurial Grotesk Light'",
  headerRegular: "400 40px/1 'Neurial Grotesk Regular'",
  headerMedium: "500 40px/1 'Neurial Grotesk Medium'",
  headerSemiBold: "600 40px/1 'Neurial Grotesk Bold'",
  headerBold: "700 40px/1 'Neurial Grotesk Extra Bold'",
  subheaderLight: "400 35px/1 'Neurial Grotesk Light'",
  subheaderMedium: "500 35px/1 'Neurial Grotesk Medium'",
  subheaderBold: "700 35px/1 'Neurial Grotesk Bold'",
  titleRegular: "400 24px/1 'Neurial Grotesk Regular'",
  titleMedium: "500 24px/1 'Neurial Grotesk Medium'",
  titleBold: "700 24px/1 'Neurial Grotesk Bold'",
  contentLight: "400 14px/1 'Neurial Grotesk Light'",
  contentMedium: "500 14px/1 'Neurial Grotesk Medium'",
  contentBold: "700 14px/1 'Neurial Grotesk Bold'",
  defaultLight: "400 10px/1 'Neurial Grotesk Light'",
  defaultMedium: "500 10px/1 'Neurial Grotesk Medium'",
  defaultBold: "700 10px/1 'Neurial Grotesk Bold'",
  commonSize: "500 16px/1 'Neurial Grotesk Medium'"
};

export const gridLayout = {
  grid: ({
    rows,
    rHeight,
    minCol,
    alignItems,
    justifyContent,
    colGap,
    rowGap
  }) => {
    return `
          display: grid;
          grid: repeat(${rows}, ${rHeight}) / repeat(auto-fit, minmax(${minCol}, 1fr));
          ${alignItems ? `align-items: ${alignItems}` : ""};
          ${justifyContent ? `justify-content: ${justifyContent}` : ""};
          grid-gap: ${rowGap} ${colGap};
        `;
  }
};
