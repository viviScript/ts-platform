import React, {Component, Fragment} from 'react';
class TodoItem extends Component{
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
        const {content} = this.props
        return (
            <Fragment>
                <div onClick={this.handleClick}>
                    {content}
                </div>
            </Fragment>
        )
    }
    handleClick () {
        const {deleteItem, index}  = this.props
        deleteItem(index)
    }
}
export default TodoItem;