import React, { FC } from 'react';
interface ISection {
    children: React.ReactNode;
    className?: string;
    alignment?: 'left' | 'center' | 'right';
}
declare const Section: FC<ISection>;
interface IColumn {
    children: React.ReactNode;
    className?: string;
    size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '11' | '12';
    noMargin?: boolean;
    noMarginLeft?: boolean;
    noMarginRight?: boolean;
}
declare const Column: FC<IColumn>;
interface IContainer {
    children: React.ReactNode;
    className?: string;
}
declare const Container: FC<ISection>;
export type { ISection, IColumn, IContainer };
export { Section, Column, Container };
