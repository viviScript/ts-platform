import React from 'react';
import Loadable from 'react-loadable';  // 异步组件加载

const LoadableComponent = Loadable({
    loader: () => import('.'), // 异步加载当前组件
    loading: () => {    // 组件加载loading
        return <div>正在加载</div>
    },
});

export default () => <LoadableComponent />