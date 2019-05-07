import React from "react";
// import { Row, Col } from "antd";
import { DetailWrapper, DetailItem, DetailItemLabel, DetailItemText } from './style';
interface Iprops {
  data: any,
  labelWidth?: string
}
function ModalLook(props: Iprops) {
  const { data, labelWidth = '90px' } = props;
  return (
    <div>
      <DetailWrapper>
        <DetailItem>
          <DetailItemLabel width={labelWidth}>应用名称：</DetailItemLabel>
          <DetailItemText>{data.name || ""}</DetailItemText>
        </DetailItem>
        <DetailItem>
          <DetailItemLabel width={labelWidth}>应用类型：</DetailItemLabel>
          <DetailItemText>{data.yylx || ""}</DetailItemText>
        </DetailItem>
        <DetailItem>
          <DetailItemLabel width={labelWidth}>应用编码：</DetailItemLabel>
          <DetailItemText>{data.yybm || ""}</DetailItemText>
        </DetailItem>
        <DetailItem>
          <DetailItemLabel width={labelWidth}>登录地址：</DetailItemLabel>
          <DetailItemText>{data.fwlj || ""}</DetailItemText>
        </DetailItem>
        <DetailItem>
          <DetailItemLabel width={labelWidth}>应用上下文：</DetailItemLabel>
          <DetailItemText>{data.yysxw || ""}</DetailItemText>
        </DetailItem>
        <DetailItem>
          <DetailItemLabel width={labelWidth}>位置序号：</DetailItemLabel>
          <DetailItemText>{data.pxbh || ""}</DetailItemText>
        </DetailItem>
        <DetailItem>
          <DetailItemLabel width={labelWidth}>创建人：</DetailItemLabel>
          <DetailItemText>{data.cjr || ""}</DetailItemText>
        </DetailItem>
        <DetailItem>
          <DetailItemLabel width={labelWidth}>创建时间：</DetailItemLabel>
          <DetailItemText>{data.cjsj || ""}</DetailItemText>
        </DetailItem>
      </DetailWrapper>
    </div>
  );
}

export default ModalLook;
