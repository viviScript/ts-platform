import React, { PureComponent } from "react";
import { Layout, Icon } from "antd";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { ImmuTableProps } from '../../types';
import { withRouter, RouteComponentProps, Route, Link } from "react-router-dom";
import Logo from "../../components/Logo/index";
import HomeHeader from "../../components/HomeHeader";
import HomeMenu from '../../components/HomeMenu';
import screenfull from "screenfull";
import Login from '../login'
const { Content, Sider } = Layout;
interface HomeProps {
  list: any[];
  getResList(): void;
  match: any
}
interface HomeStateProps {
  collapsed: boolean;
  marginLeft: number;
}
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
  public render() {
    const { list } = this.props;
    console.log(this.props)
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
          <HomeMenu list={list} collapsed={this.state.collapsed}/>
        </Sider>
        <Layout
          style={{ marginLeft: this.state.marginLeft, position: "relative" }}
        >
          <HomeHeader screenFull={this.screenFull} />
          <Content style={{ margin: "80px 16px 0", overflow: "initial" }}>
            <div
              style={{ padding: 24, background: "#fff", textAlign: "center" }}
            >
              <Link to='/home/Login'>子集页面</Link>
              <Route path='/home/Login' exact={true} component={Login} />
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
