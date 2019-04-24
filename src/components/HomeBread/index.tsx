import React from "react";
import { Breadcrumb } from "antd";
import { withRouter, RouteComponentProps, Link } from 'react-router-dom'
type HomeBreadProp = {
  location: any,
  breadcrumbNameMap: any
}
class HomeBread extends React.Component<HomeBreadProp & RouteComponentProps> {
  constructor (props: any) {
    super(props)
  }
  render() {
    // const breadcrumbNameMap = (() => {
    //   let nameMap = {
    //     '/home': '主页'
    //   }
    //   this.props.routeMap.map((item: ImmuTableProps) => {
    //     if (item.get("children")) {
    //       item.get("children").map((key: ImmuTableProps) => {
    //         nameMap[key.get('path')] = key.get('name')
    //       })
    //     }
    //   })
    //   return nameMap;
    // })()
    const { breadcrumbNameMap } = this.props;
    const pathSnippets = this.props.location.pathname.split("/").filter((i:any) => i);
    const extraBreadcrumbItems = pathSnippets.map((_:any, index: number) => {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>{breadcrumbNameMap.get(url)}</Link>
        </Breadcrumb.Item>
      );
    });
    const breadcrumbItems = [(
      <Breadcrumb.Item key="home">
        {/* <Link to="/home">主页</Link> */}
      </Breadcrumb.Item>
    )].concat(extraBreadcrumbItems);
    return (
      <Breadcrumb className="head">
        {breadcrumbItems}
      </Breadcrumb>
    );
  }
}

export default withRouter(HomeBread);
