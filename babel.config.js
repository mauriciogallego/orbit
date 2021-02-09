module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "~": "./src",
          },
        },
      ],
    ],
  };
};
