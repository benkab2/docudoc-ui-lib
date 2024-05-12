import React, { FC } from 'react';
interface IWrapper {
    header: {
        title: string;
        text: string;
    };
    children: React.ReactNode;
    style?: any;
}
declare const Wrapper: FC<IWrapper>;
export { Wrapper };
