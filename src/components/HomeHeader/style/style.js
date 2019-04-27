import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    background: #fff;
    padding: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 200;
    .ant-layout-header {
        display: flex;
        justify-content: flex-end;
    }
    .ant-menu-dark {
        line-height: 64px;
    }
    .ant-menu.ant-menu-dark .ant-menu-item-selected, .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
        background-color: transparent;
    }
`
export const HeaderAvater = styled.span`
    position: relative;
    display: inline-block;
    width: 40px;
    line-height: 1;
    border-radius: 500px;
    white-space: nowrap;
    font-weight: bold;
    i {
        position: absolute;
        left: 0;
        top: 0;
        width: 10px;
        height: 10px;
        margin: 1px;
        border-width: 2px;
        border-style: solid;
        border-radius: 100%;
        &.bottom {
        left: auto;
        top: auto;
        bottom: 0;
        right: 0;
        }
        &.on {
        background-color: #6cc788;
        }
    }
    img {
        border-radius: 500px;
        width: 100%;
    }
`