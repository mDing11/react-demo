import React, { Component } from "react";
import { Input, Button, List } from "antd";
import store from "./store";
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteAction,
  getInitList
} from "./store/actionCreators";
import "antd/dist/antd.less";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInptuChange = this.handleInptuChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    store.subscribe(this.handleStoreChange);
  }

  componentDidMount() {
    // const action = getTodoList();
    // store.dispatch(action);
    const action = getInitList();
    console.log(action);
  }

  handleInptuChange(e) {
    const action = getInputChangeAction(e.target.value);

    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleButtonClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleDelete(index) {
    const action = getDeleteAction(index);

    store.dispatch(action);
  }

  render() {
    return (
      <div>
        <Input
          value={this.state.inputValue}
          placeholder="todo info"
          onChange={this.handleInptuChange}
          style={{ width: "300px", marginRight: "10px" }}
        />
        <Button type="primary" onClick={this.handleButtonClick}>
          提交
        </Button>
        <List
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleDelete.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default TodoList;
