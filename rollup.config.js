import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import analyze from "rollup-plugin-analyzer";
import copy from "rollup-plugin-copy";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "esm",
    preserveModules: true,
    preserveModulesRoot: "src",
  },
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.build.json",
    }),
    postcss({
      extract: true,
      modules: false,
      use: ["sass"],
    }),
    // babel({
    //   presets: [["@babel/preset-env"], ["@babel/preset-react", { runtime: "automatic" }]],
    //   extensions: [".js", ".jsx", ".ts", ".tsx"],
    //   exclude: "node_modules/**",
    // }),
    analyze(),
    copy({
      targets: [{ src: "src/assets/**/*", dest: "dist/assets" }],
    }),
  ],
};
