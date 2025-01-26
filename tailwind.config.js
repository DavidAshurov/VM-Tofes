/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "cookie": "'Cookie', cursive"
            },
            colors: {
                "background-blue" : "rgba(119,219,254,0.3)",
                "text-blue" : "rgba(0,40,154,1)",
            },
        },
    },
    plugins: [],
}

