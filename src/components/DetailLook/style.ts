import styled from 'styled-components';

export const DetailWrapper = styled.div`
    width: auto;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
`;

export const DetailItem = styled.div`
    width: auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    justify-items: center;
    height: 40px;
    line-height: 40px;
`;
export const DetailItemLabel = styled.div`
    width: ${(props: {width: string}) => props.width || 'auto'};
    text-align: right;
    color: #1890ff;
`;
export const DetailItemText = styled.div`
    width: auto;
`;