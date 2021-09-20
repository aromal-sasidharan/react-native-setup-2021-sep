module.exports = function(api) {
  api.cache(true);
  const presets = ['babel-preset-expo'];
  const plugins = [
    ["module-resolver",
    {
      root: ["."],
      alias: {
        "app" : "./app",
      },
    }],
  ];
  return {
    presets,
    plugins
  };
};

