/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom right, #00a795 -500px, rgba(255, 0, 0, 0) 150px, #00a795 500px)",
        "custom-gradient1":
          "linear-gradient(to bottom right, #00a795 -900px, rgba(255, 0, 0, 0) 400px, #00a795 900px)",
      },
    },
  },
  plugins: [],
};

// module.exports = {
//   theme: {
//     extend: {
//       backgroundImage: {
//         "custom-gradient":
//           "linear-gradient(to bottom right, #00a795 -500px, rgba(255, 0, 0, 0) 150px, #00a795 500px)",
//       },
//     },
//   },
//   plugins: [],
// };
