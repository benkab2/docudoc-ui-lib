import React, { FC, CSSProperties } from 'react';
interface ITypography {
    children: React.ReactNode;
    uppercase?: boolean;
    className?: string;
    style?: CSSProperties;
}
declare const Typography: FC<ITypography>;
export type { ITypography };
export { Typography };
