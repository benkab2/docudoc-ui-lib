import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/preset-scss',
    '@storybook/addon-webpack5-compiler-babel',
    '@chromatic-com/storybook',
    '@storybook/addon-controls',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config, { configType }) => {
    // get index of css rule
    const ruleCssIndex = config?.module?.rules?.findIndex(
      // @ts-ignore
      (rule) => rule?.test.toString() === '/\\.css$/',
    );

    // @ts-ignore
    // map over the 'use' array of the css rule and set the 'module' option to true
    config?.module?.rules?.[ruleCssIndex].use.map((item) => {
      if (item.loader && item.loader.includes('/css-loader/')) {
        item.options.modules = {
          mode: 'local',
          localIdentName:
            configType === 'PRODUCTION'
              ? '[local]__[hash:base64:5]'
              : '[name]__[local]__[hash:base64:5]',
        };
      }

      return item;
    });

    return config;
  },
};

export default config;
