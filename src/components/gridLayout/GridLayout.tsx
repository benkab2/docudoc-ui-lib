import React, { FC } from 'react';
import cx from 'classnames';

import styles from './GridLayout.module.scss';

interface ISection {
  children: React.ReactNode;
  className?: string;
  alignment?: 'left' | 'center' | 'right';
}

const Section: FC<ISection> = ({ children, className, alignment = 'left' }) => {
  const sectionProps = cx(
    styles.section,
    {
      [styles[`section--${alignment}`]]: true,
    },
    className,
  );

  return (
    <div data-testid="section" className={sectionProps}>
      {children}
    </div>
  );
};

interface IColumn {
  children: React.ReactNode;
  className?: string;
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '11' | '12';
  noMargin?: boolean;
  noMarginLeft?: boolean;
  noMarginRight?: boolean;
}

const Column: FC<IColumn> = ({
  children,
  className,
  size = '12',
  noMargin,
  noMarginLeft,
  noMarginRight,
}) => {
  const columnProps = cx(
    styles.column,
    {
      [styles['column--no-margin']]: noMargin,
      [styles['column--no-margin-left']]: noMarginLeft,
      [styles['column--no-margin-right']]: noMarginRight,
      [styles[`column--${size}`]]: true,
    },
    className,
  );

  const columnStyle = {
    maxWidth: `calc(100% / (12/${size}))`,
  };

  return (
    <div data-testid="column" className={columnProps} style={columnStyle}>
      {children}
    </div>
  );
};

interface IContainer {
  children: React.ReactNode;
  className?: string;
}

const Container: FC<ISection> = ({ children, className }) => {
  const containerProps = cx(styles.container, className);

  return (
    <div data-testid="container" className={containerProps}>
      {children}
    </div>
  );
};

export type { ISection, IColumn, IContainer };
export { Section, Column, Container };
