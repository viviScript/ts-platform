import React from "react";
import { Row, Col } from "antd";
import { DetailWrapper, DetailItem, DetailItemLabel, DetailItemText } from './style';
function ModalLook(props) {
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
      {/* <Row>

      <Row>
        <Col span={24}>应用编码：{data.yybm || ""}</Col>
      </Row>
      <Row>
        <Col span={24}>登录地址：{data.fwlj || ""}</Col>
      </Row>

      <Row>
        <Col span={24}>应用上下文：{data.yysxw || ""}</Col>
      </Row>

      <Row>
        <Col span={24}>位置序号：{data.pxbh || ""}</Col>
      </Row>

      <Row>
        <Col span={24}>创建人：{data.cjr || ""}</Col>
      </Row>
      <Row>
        <Col span={24}>创建时间：{data.cjsj || ""}</Col>
      </Row> */}
    </div>
  );
}

export default ModalLook;
