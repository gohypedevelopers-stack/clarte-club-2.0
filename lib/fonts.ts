import localFont from "next/font/local";

export const akzidenzGrotesk = localFont({
  src: [
    {
      path: "../fonts/Akzidenz Grotesk/akzidenzgroteskpro_light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Akzidenz Grotesk/akzidenzgroteskpro_lightit.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/Akzidenz Grotesk/akzidenzgroteskpro_regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Akzidenz Grotesk/akzidenzgroteskpro_it.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Akzidenz Grotesk/akzidenzgroteskpro_md.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Akzidenz Grotesk/akzidenzgroteskpro_bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Akzidenz Grotesk/akzidenzgroteskpro_boldit.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-akzidenz-grotesk",
  display: "swap",
});

export const georgia = localFont({
  src: [
    {
      path: "../fonts/Georgia/georgia.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Georgia/georgiai.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Georgia/georgiab.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Georgia/georgiaz.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-georgia",
  display: "swap",
  preload: false,
});

export const holiday = localFont({
  src: [
    {
      path: "../fonts/Holiday.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-holiday",
  display: "swap",
  preload: false,
});
