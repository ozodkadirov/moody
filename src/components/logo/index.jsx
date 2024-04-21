import React, { Fragment } from 'react';
import "./logo.scss";
import { Typography } from 'antd';

export default function Logo() {
    return (
        <Fragment>
            <a href="/" className='logo'>
                <Typography.Title
                    level={3}
                    className='logo__title'
                >
                    MOODY STUDIO
                </Typography.Title>
            </a>
        </Fragment>
    )
}
