module.exports = (api) => {
  const node = api.caller((caller) => {
    return caller && caller.target === 'node';
  });

  const web = api.caller((caller) => {
    return caller && caller.target === 'web';
  });

  const plugins = [
    '@babel/plugin-syntax-dynamic-import',
    '@loadable/babel-plugin',
    '@babel/plugin-transform-runtime',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ];

  if (node) {
    plugins.push('@babel/plugin-proposal-optional-chaining');
  }

  return {
    plugins,
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'entry',
          corejs: 3,
          // caller.target will be the same as the target option from webpack
          targets: node ? { node: 'current' } : {},
        },
      ],
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
  };
};
