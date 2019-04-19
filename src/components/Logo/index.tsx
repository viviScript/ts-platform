import React from 'react';
import {
    LogoWrapper
} from './style';
type Props = {
    name?: string,
    icon: any,
    collapsed: boolean
}
const Logo = (props: Props) => {
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