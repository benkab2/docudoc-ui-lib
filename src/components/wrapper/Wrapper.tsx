import React, { FC } from 'react';

import { Container } from '../gridLayout';
import { Typography } from '../typography';

import styles from './Wrapper.module.scss';

interface IWrapper {
  header: {
    title: string;
    text: string;
  };
  children: React.ReactNode;
  style?: any;
}

const Wrapper: FC<IWrapper> = ({ header, children, style = {} }) => {
  return (
    <div className={styles['wrapper__background']}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles['wrapper__header']}>
            <Typography className={styles['wrapper__header__title']}>
              {header.title}
            </Typography>
            <Typography className={styles['wrapper__header__text']}>
              {header.text}
            </Typography>
          </div>
          <div className={styles['wrapper__body']} style={style}>
            {children}
          </div>
        </div>
      </Container>
    </div>
  );
};

export { Wrapper };
