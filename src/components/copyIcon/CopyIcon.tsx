import React, { FC, CSSProperties, useState } from 'react';
import { Copy, Check } from 'react-feather';

import styles from './CopyIcon.module.scss';

const ICON_SIZE_MAP = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
};

interface ICopyIcon {
  value: string;
  style?: CSSProperties;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

const CopyIcon: FC<ICopyIcon> = ({ value, style, size = 'sm' }) => {
  const [copied, setCopied] = useState(false);

  const onCopyValue = () => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((error) => {
        alert(`Failed to copy value to clipboard: ${error}`);
      });
  };

  return (
    <span
      data-testid="copy-icon"
      onClick={onCopyValue}
      className={styles['copy-icon']}
    >
      {copied ? (
        <Check size={ICON_SIZE_MAP[size]} style={style} />
      ) : (
        <Copy size={ICON_SIZE_MAP[size]} style={style} />
      )}
    </span>
  );
};

export type { ICopyIcon };
export { CopyIcon };
