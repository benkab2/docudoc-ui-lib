import React, { FC, CSSProperties } from 'react';
import cx from 'classnames';

import styles from './Typography.module.scss';

interface ITypography {
  children: React.ReactNode;
  uppercase?: boolean;
  className?: string;
  style?: CSSProperties;
}

const Typography: FC<ITypography> = ({
  children,
  uppercase,
  className,
  style,
}) => {
  const typographyProps = cx(
    styles.typography,
    {
      [styles['typography--uppercase']]: uppercase,
    },
    className,
  );

  return (
    <p data-testid="typography" style={style} className={typographyProps}>
      {children}
    </p>
  );
};

export type { ITypography };
export { Typography };
