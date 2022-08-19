// npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
// npm install @craco/craco --force
// package.json の書き換え
//   "scripts": {
//     "start": "craco start",
//     "build": "craco build",
//     "test": "craco test",
//     "eject": "react-scripts eject"
//   },
// craco.config.js の追加
// module.exports = {}
// npx tailwindcss init の実行(tailwindcssの初期化)
// tailwind.config.js の設定変更
// purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
// index.css 修正

export const TailwindCss = (props) => {

    const {title} = props

    return (
        <div className="border border-gray-400 rounded-2xl p-2 m-2 flex justify-around items-center">
            <p className="m-0 text-gray-400">{title}</p>
            <button className="bg-gray-300 border-0 p-2 rounded-md hover:bg-gray-400 hover:text-white">Button</button>
        </div>
    )
}