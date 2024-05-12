import { FC, CSSProperties } from 'react';
interface ICopyIcon {
    value: string;
    style?: CSSProperties;
    size?: 'xs' | 'sm' | 'md' | 'lg';
}
declare const CopyIcon: FC<ICopyIcon>;
export type { ICopyIcon };
export { CopyIcon };
