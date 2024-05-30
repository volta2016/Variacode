import css from "rollup-plugin-css-only";

export default {
  //... otras configuraciones...
  plugins: [
    css({
      output: "styles.css", // nombre del archivo de salida
    }),
  ],
};