import styled from 'styled-components';

export const HomeBreadWrapper = styled.div`
    position: fixed;
    top: 74px;
    left: ${(props) => props.collapsed ? "100px;" : "220px"};
    z-index: 200;
`;
