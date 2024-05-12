import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Wrapper } from '../components/wrapper';
import { Typography } from '../components/typography';
import { CopyIcon } from '../components/copyIcon';

const SPACING_DATA = [
  {
    name: '--radius-none',
    reference: '0px',
    value: 'var(--radius-none)',
  },
  {
    name: '--radius-xxs',
    reference: '2px',
    value: 'var(--radius-xxs)',
  },
  {
    name: '--radius-xs',
    reference: '4px',
    value: 'var(--radius-xs)',
  },
  {
    name: '--radius-sm',
    reference: '6px',
    value: 'var(--radius-sm)',
  },
  {
    name: '--radius-md',
    reference: '8px',
    value: 'var(--radius-md)',
  },
  {
    name: '--radius-lg',
    reference: '12px',
    value: 'var(--radius-lg)',
  },
  {
    name: '--radius-xl',
    reference: '16px',
    value: 'var(--radius-xl)',
  },
  {
    name: '--radius-2xl',
    reference: '20px',
    value: 'var(--radius-2xl)',
  },
  {
    name: '--radius-full',
    reference: '100%',
    value: 'var(--radius-full)',
  },
];

const header = {
  title: 'Border Radius',
  text: 'Use border radius values to quickly style the border-radius of an element. Border radius values are useful for rounding edges of images, buttons or any other element. Just like pre-defined spacing values, working from a defined border radius system allows you to work faster and more consistently.',
};

const meta: Meta = {
  title: 'Foundation/Border Radius',
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
type Story = StoryObj;

export const BorderRadius: Story = {
  render: () => (
    <Wrapper header={header}>
      <div className="row">
        <div className="column column-small">
          <Typography className="section-title">Description</Typography>
          <Typography className="section-text">
            Working from a pre-defined and limited radius system for adding
            border radiuses (or radii) to elements allows you to work faster and
            consistently. We are using a pre-defined and limited radius system
            derived from the primitive spacing values.
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
              <div className="table-column">
                <Typography className="table-header">Visual</Typography>
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
                <div className="table-column">
                  <div
                    className="table-fake-box"
                    style={{
                      borderRadius: entry.value,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  ),
};
