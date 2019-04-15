import React from 'react';
import {
    LogoWrapper
} from './style';
const Logo = (props) => {
    if(props.collapsed) {
        return (
            <LogoWrapper>
                {props.icon}
            </LogoWrapper>
        )
    } else {
        return (
            <LogoWrapper>
                {props.name || ''}
            </LogoWrapper>
        )
    }

};
export default Logo;