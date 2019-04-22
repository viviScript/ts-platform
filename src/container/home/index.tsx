import React, { PureComponent } from "react";
import { Layout, Icon } from "antd";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { ImmuTableProps } from "../../types";
import {
  withRouter,
  RouteComponentProps,
  Route,
  Link,
  Switch
} from "react-router-dom";
import {Logo, HomeHeader, HomeMenu, HomeBread} from '../../components'
import screenfull from "screenfull";
import { Wjgl, NoMatch } from "../index";
import {HomeBreadWrapper} from './style/style'
const { Content, Sider } = Layout;
type HomeProps = {
  list: any[];
  getResList: () => void;
  match: any;
};
type HomeStateProps = {
  collapsed: boolean;
  marginLeft: number;
};
class Home extends PureComponent<
  HomeProps & RouteComponentProps,
  HomeStateProps
> {
  constructor(props: any) {
    super(props);
    this.state = {
      collapsed: false,
      marginLeft: 200
    };
    this.toggleCollapsed = this.toggleCollapsed.bind(this);
    this.menuToUrlHandle = this.menuToUrlHandle.bind(this);
  }
  screenFull = () => {
    if (screenfull.enabled) {
      screenfull.request();
    }
  };
  toggleCollapsed = () => {
    this.setState((preState: HomeStateProps) => {
      return {
        collapsed: !preState.collapsed
      };
    });
    if (this.state.collapsed) {
      this.setState({
        marginLeft: 200
      });
    } else {
      this.setState({
        marginLeft: 80
      });
    }
  };
  menuToUrlHandle = (item_child: any) => {
    console.log(item_child.get("path"), "item_child");
  };
  public render() {
    const { list, match } = this.props;
    console.log(this.props);
    return (
      <Layout>
        <Sider
          collapsible
          onCollapse={this.toggleCollapsed}
          collapsed={this.state.collapsed}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0
          }}
        >
          <Logo
            name="指挥一体化平台"
            icon={<Icon type="deployment-unit" />}
            collapsed={this.state.collapsed}
          />
          <HomeMenu
            list={list}
            collapsed={this.state.collapsed}
            menuToUrlHandle={this.menuToUrlHandle}
          />
        </Sider>
        <Layout
          style={{ marginLeft: this.state.marginLeft, position: "relative" }}
        >
          <HomeHeader screenFull={this.screenFull} />
          
          <HomeBreadWrapper>
            <HomeBread />
          </HomeBreadWrapper>

          <Content style={{ margin: "100px 16px 0", overflow: "initial" }}>
            <div
              style={{ padding: 24, background: "#fff", textAlign: "center" }}
            >
              <Switch>
                <Route path="/home/wjgl" component={Wjgl} />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
  componentWillMount() {
    this.props.getResList();
  }
  componentDidMount() {}
}

const mapStateToProps = (state: ImmuTableProps): object => {
  return {
    list: state.get("homeReducer").get("list")
  };
};
const mapDispatchToProps = (dispatch: any): object => {
  return {
    getResList() {
      dispatch(actionCreators.ac_getMenuList());
    }
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
