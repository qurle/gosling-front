import React, {useRef} from 'react';
import AnimationBackground from "src/components/AnimationBackground/AnimationBackground.jsx";

import styled from './BaseLayout.module.css'

export function BasicLayout({ children }) {
    return (
            <div className={styled.BaseLayout}>
                <div className={styled.BaseLayout_Background}>
                    <AnimationBackground />
                </div>
                <div className={styled.BaseLayout_Content}>
                    <div className={styled.BaseLayout_ContentInner}></div>
                    {children}
                </div>
            </div>
        )
}