const BaseColor = {
    black: "#212121",
    pink: "#FF0099",
    input: "rgba(255, 255, 255, 0.06)",
    gradient: "linear-gradient(180deg, #42122F 0%, #271821 100%)",
    footer: "#212121",
    placeholder: "rgba(255, 255, 255, 0.54)"
};
const fontSize = {
    xs: "14px",
    sm: "16px",
    re: "20px",
    md: "24px",
    lg: "28px",
    xl: "32px",
    xxl: "40px",
};
const shadow = {
    sm: "0px 4px 5px rgba(0, 0, 0, 0.11);",
 };
const mixins = {
    gap: (value, direction = "row") => ` 
          & > *:not(:last-child){
              margin-${direction === "column" ? "bottom" : "right"}: ${value};
          }
      `,
    fade: (type) => `
          transition: visibility 1s, opacity 1s;
          visibility: ${type === "hide" ? "hidden" : "visible"};
          opacity: ${type === "hide" ? 0 : 1};
          pointer-events: ${type === "hide" ? "none" : "all"};
        `,
    linesLimits: (lines, lineHeight = "1.5") => `
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: ${lines};
          -webkit-box-orient: vertical;
          line-height: ${lineHeight};
      `,
    hideScroller: () => `
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
          &::-webkit-scrollbar {
              display: none;
          }
      `,
    textGradient: (colorGradient) => `
          background: ${colorGradient};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
      `,
};

export const theme = {
    ...mixins,
    fontSize: {
        ...fontSize,
    },
    shadow: {
        ...shadow,
    },
    color: {
        ...BaseColor,
    },
};