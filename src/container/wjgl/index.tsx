import React from 'react';
import { Route } from 'react-router-dom';
function aaa () {
    return (
        <div>
            子集目录
        </div>
    )
}

class Wjgl extends React.Component{
    render () {
        return (
            <div>
                1111
                <Route path="/" component={aaa} />
            </div>
        )
    }
}

export default Wjgl;