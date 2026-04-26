import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";

const dev = process.env.ROLLUP_WATCH === "true";

export default {
  input: "src/yet-another-weather-card.ts",
  output: {
    file: "dist/yet-another-weather-card.js",
    format: "es",
    sourcemap: dev,
    inlineDynamicImports: true,
  },
  plugins: [
    resolve(),
    json(),
    typescript({ tsconfig: "./tsconfig.json", sourceMap: dev, inlineSources: dev }),
    !dev && terser({ format: { comments: false } }),
  ].filter(Boolean),
};
