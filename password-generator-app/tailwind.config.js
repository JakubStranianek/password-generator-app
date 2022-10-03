/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "myGrey": "#24232C",
        "mySilver": "#817D92",
        "myWhite": "#E6E5EA",
        "myBlack": "#18171F",
        "myGreen": "#A4FFAF",
        "myRed": "#F64A4A",
        "myOrange": "#FB7C58",
        "myYellow": "#F8CD65"
      },

      fontSize: {
        "headingL": ['32px', {
          fontWeight: 'bold',
          lineHeight: '43px'
        }],
        "headingM": ['24px', {
          fontWeight: 'bold',
          lineHeight: '31px'
        }],
        "body": ['18px', {
          fontWeight: 'bold',
          lineHeight: '23px'
        }]
      },

      backgroundImage: {
        "copyGreen" : "url(./assets/copy_green.png)", 
        "copyWhite" : "url(./assets/copy_white.png)"
      }
    },
  },
  plugins: [],
}