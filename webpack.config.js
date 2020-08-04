module.exports = {
  // webpack 4では、エントリーポイントを指定しなければ自動的に「src/index.js」がエントリーポイントに、出力先を指定しなければ自動的に「dist/main.js」に出力されます。
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `./src/scripts/main.tsx`,
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: "main.js"
  },
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "development",
  // ローカル開発用環境を立ち上げる
  // 実行時にブラウザが自動的に localhost を開く
  devServer: {
    contentBase: "dist",
    open: true,
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false }
          }
        ]
      },
      // Sassファイルの読み込みとコンパイル
      {
        test: /\.scss/, // 対象となるファイルの拡張子
        use: [
          // linkタグに出力する機能
          "style-loader",
          // CSSをバンドルするための機能
          {
            loader: "css-loader",
            options: {
              // オプションでCSS内のurl()メソッドの取り込みを禁止する
              url: false,
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2
            }
          },
          {
            loader: "sass-loader",
          },

        ]
      },
      {
        // 拡張子 .ts もしくは .tsx の場合
        test: /\.tsx?$/,
        // TypeScript をコンパイルする
        use: "ts-loader"
      },
    ]
  },
  // import 文で .ts や .tsx ファイルを解決するため
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  }
}
