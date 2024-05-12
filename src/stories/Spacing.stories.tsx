import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Wrapper } from '../components/wrapper';
import { Typography } from '../components/typography';
import { CopyIcon } from '../components/copyIcon';

const SPACING_DATA = [
  {
    name: '--spacing-none',
    reference: '0px',
    value: 'var(--spacing-none)',
  },
  {
    name: '--spacing-xxs',
    reference: '2px',
    value: 'var(--spacing-xxs)',
  },
  {
    name: '--spacing-xs',
    reference: '4px',
    value: 'var(--spacing-xs)',
  },
  {
    name: '--spacing-sm',
    reference: '8px',
    value: 'var(--spacing-sm)',
  },
  {
    name: '--spacing-md',
    reference: '12px',
    value: 'var(--spacing-md)',
  },
  {
    name: '--spacing-lg',
    reference: '16px',
    value: 'var(--spacing-lg)',
  },
  {
    name: '--spacing-xl',
    reference: '20px',
    value: 'var(--spacing-xl)',
  },
  {
    name: '--spacing-2xl',
    reference: '24px',
    value: 'var(--spacing-2xl)',
  },
  {
    name: '--spacing-3xl',
    reference: '32px',
    value: 'var(--spacing-3xl)',
  },
  {
    name: '--spacing-4xl',
    reference: '48px',
    value: 'var(--spacing-4xl)',
  },
  {
    name: '--spacing-5xl',
    reference: '64px',
    value: 'var(--spacing-5xl)',
  },
];

const header = {
  title: 'Spacing',
  text: 'Just like your color scale, working from a defined spacing system allows you to work faster and more consistently. Consistent and scalable spacing helps you eliminate guesswork whilst designing and developing because you’re designing with a limited set of options.',
};

const meta: Meta = {
  title: 'Foundation/Spacing',
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
type Story = StoryObj;

export const Spacing: Story = {
  render: () => (
    <Wrapper header={header}>
      <div className="row">
        <div className="column column-small">
          <Typography className="section-title">Description</Typography>
          <Typography className="section-text">
            By default, we’re using a numeric primitives spacing with
            proportional values where one spacing unit is equal to 2px. As an
            example, 16px is twice as much spacing as 8, so they’re named 4 and
            2 respectively.
          </Typography>
        </div>
        <div className="column column-large">
          <div
            style={{
              width: '100%',
            }}
          >
            <div className="table-headers">
              <div className="table-column">
                <Typography className="table-header">Name</Typography>
              </div>
              <div className="table-column">
                <Typography className="table-header">Value</Typography>
              </div>
            </div>
            {SPACING_DATA.map((entry) => (
              <div key={entry.value} className="table-row">
                <div className="table-column">
                  <Typography className="table-cell">
                    {entry.name}&nbsp;&nbsp;
                    <CopyIcon
                      style={{
                        color: 'var(--color-base-gray)',
                      }}
                      value={entry.value}
                      size="sm"
                    />
                  </Typography>
                </div>
                <div className="table-column">
                  <Typography className="table-cell">
                    {entry.reference}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  ),
};
