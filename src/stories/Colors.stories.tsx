import React, { FC } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Wrapper } from '../components/wrapper';
import { Typography } from '../components/typography';
import { CopyIcon } from '../components/copyIcon';

const BASE_COLORS = [
  {
    text: '--color-base-white',
    textColor: 'var(--color-base-gray)',
    backgroundColor: 'var(--color-base-white)',
    reference: 'White',
    value: '#ffffff',
  },
  {
    text: '--color-base-black',
    textColor: 'var(--color-base-white)',
    backgroundColor: 'var(--color-base-black)',
    reference: 'Black',
    value: '#000000',
  },
  {
    text: '--color-base-gray',
    textColor: 'var(--color-base-white)',
    backgroundColor: 'var(--color-base-gray)',
    reference: 'Gray',
    value: '#667085',
  },
  {
    text: '--color-base-variant',
    textColor: 'var(--color-base-gray)',
    backgroundColor: 'var(--color-base-variant)',
    reference: 'Variant',
    value: '#f2f4f7',
  },
  {
    text: '--color-base-border',
    textColor: 'var(--color-base-gray)',
    backgroundColor: 'var(--color-base-border)',
    reference: 'Border',
    value: '#f0f1f1',
  },
];

const GRAY_COLORS = [
  {
    text: '--color-gray-25',
    textColor: 'var(--color-base-gray)',
    backgroundColor: 'var(--color-gray-25)',
    reference: 'Gray 25',
    value: '#fcfcfd',
  },
  {
    text: '--color-gray-50',
    textColor: 'var(--color-base-gray)',
    backgroundColor: 'var(--color-gray-50)',
    reference: 'Gray 25',
    value: '#f5f5f6',
  },
  {
    text: '--color-gray-100',
    textColor: 'var(--color-base-gray)',
    backgroundColor: 'var(--color-gray-100)',
    reference: 'Gray 100',
    value: '#f0f1f1',
  },
  {
    text: '--color-gray-200',
    textColor: 'var(--color-base-gray)',
    backgroundColor: 'var(--color-gray-200)',
    reference: 'Gray 200',
    value: '#ececed',
  },
  {
    text: '--color-gray-300',
    textColor: 'var(--color-base-gray)',
    backgroundColor: 'var(--color-gray-300)',
    reference: 'Gray 300',
    value: '#cecfd2',
  },
  {
    text: '--color-gray-400',
    textColor: 'var(--color-base-white)',
    backgroundColor: 'var(--color-gray-400)',
    reference: 'Gray 400',
    value: '#98a2b3',
  },
  {
    text: '--color-gray-500',
    textColor: 'var(--color-base-white)',
    backgroundColor: 'var(--color-gray-500)',
    reference: 'Gray 500',
    value: '#667085',
  },
  {
    text: '--color-gray-600',
    textColor: 'var(--color-base-white)',
    backgroundColor: 'var(--color-gray-600)',
    reference: 'Gray 600',
    value: '#475467',
  },
  {
    text: '--color-gray-700',
    textColor: 'var(--color-base-white)',
    backgroundColor: 'var(--color-gray-700)',
    reference: 'Gray 700',
    value: '#344054',
  },
  {
    text: '--color-gray-800',
    textColor: 'var(--color-base-white)',
    backgroundColor: 'var(--color-gray-800)',
    reference: 'Gray 800',
    value: '#182230',
  },
  {
    text: '--color-gray-900',
    textColor: 'var(--color-base-white)',
    backgroundColor: 'var(--color-gray-900)',
    reference: 'Gray 900',
    value: '#101828',
  },
  {
    text: '--color-gray-950',
    textColor: 'var(--color-base-white)',
    backgroundColor: 'var(--color-gray-950)',
    reference: 'Gray 950',
    value: '#0c111d',
  },
];

const header = {
  title: 'Colors',
  text: 'Our design system leverages a purposeful set of color styles as the perfect starting point for any brand or project. When it comes to color, contrast is critical for ensuring text is legible.',
};

const meta: Meta = {
  title: 'Foundation/Colors',
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
type Story = StoryObj;

interface IColorCard {
  text: string;
  textColor: string;
  backgroundColor: string;
  reference: string;
  value: string;
}

const ColorCard: FC<IColorCard> = ({
  text,
  textColor,
  backgroundColor,
  reference,
  value,
}) => {
  return (
    <div className="color-card">
      <div
        style={{
          backgroundColor,
        }}
        className="color-card-top-content"
      >
        <CopyIcon
          style={{
            color: textColor,
          }}
          value={`var(${text})`}
          size="md"
        />
        <Typography
          className="color-card-text"
          style={{
            color: textColor,
          }}
        >
          {text}
        </Typography>
      </div>
      <div className="color-card-bottom-content">
        <Typography className="color-card-strong-text">{reference}</Typography>
        <Typography className="color-card-light-text">
          {value?.toUpperCase()}
        </Typography>
      </div>
    </div>
  );
};

export const Colors: Story = {
  render: () => (
    <Wrapper header={header}>
      <div className="row">
        <div className="column column-small">
          <Typography className="section-title">Base</Typography>
          <Typography className="section-text">
            These are base dark and light color styles to quickly wrap out if
            you need to
          </Typography>
        </div>
        <div className="column column-large">
          <div className="cards-wrapper">
            {BASE_COLORS.map((entry) => (
              <ColorCard key={entry.value} {...entry} />
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column column-small">
          <Typography className="section-title">Gray</Typography>
          <Typography className="section-text">
            This is a variation of gray color inline with dark and light modes
          </Typography>
        </div>
        <div className="column column-large">
          <div className="cards-wrapper">
            {GRAY_COLORS.map((entry) => (
              <ColorCard key={entry.value} {...entry} />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  ),
};
