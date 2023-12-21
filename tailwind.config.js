/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      height: {
        550: "550px",
        650: "650px",
        707: "707px",
        800: "800px",
        850: "850px",
        1509: "1509px",
      },
      width: {
        805: "805px",
        850: "850px",
        1035: "1035px",
        1090: "1090px",
        1120: "1120px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
