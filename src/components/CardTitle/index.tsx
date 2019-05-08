import React from 'react';
import { CardTitleWrapper } from './style';
import { Button } from 'antd';
type IProps = {
    name?: string;
    titleCard?: any;
    handleBtn?: () => void;
    loading?: boolean
  };
function CardTitle(props: IProps) {
    return (
      <CardTitleWrapper>
        {props.titleCard || ""}
        <span className="title">{props.name || ""}</span>
        <Button loading={props.loading || false} onClick={props.handleBtn} size="small">刷新</Button>
      </CardTitleWrapper>
    );
  }

  export default CardTitle;