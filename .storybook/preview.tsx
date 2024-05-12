import React, { useEffect } from 'react';
import type { Preview } from '@storybook/react';

import '../src/sass/base.scss';

const THEMES = {
  LIGHT: '#ffffff',
  DARK: 'rgb(12, 17, 29)',
};

const THEME_MODE_MAP = {
  [THEMES.LIGHT]: 'light',
  [THEMES.DARK]: 'dark',
};

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light mode',
      values: [
        {
          name: 'light mode',
          value: THEMES.LIGHT,
        },
        {
          name: 'dark mode',
          value: THEMES.DARK,
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const backgroundColor = context?.globals?.backgrounds?.value;

      useEffect(() => {
        if (backgroundColor) {
          const theme = THEME_MODE_MAP[backgroundColor];
          document.body.dataset.theme = theme;
          return;
        }

        document.body.dataset.theme = 'light';
      }, [backgroundColor]);

      return <Story />;
    },
  ],
};

export default preview;
