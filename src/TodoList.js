import React, { Component } from 'react';
import TodoItems from "./TodoItems"
class TodoList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            items: []
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItems = this.deleteItems.bind(this);
    }
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input type="text"
                            placeholder="enter task"
                            ref={(a) => this._inputElement = a} />
                        <button type="submit">Submit</button>
                    </form>
                    <TodoItems
                        entries={this.state.items}
                        delete={this.deleteItems} />
                </div>
            </div>
        );
    }
    addItem(e) {
        let itemArray = this.state.items;

        if (this._inputElement.value !== "") {
            itemArray.unshift({
                text: this._inputElement.value,
                key: Date.now()
            });
        };

        this.setState({
            items: itemArray
        });

        this._inputElement.value = "";

        console.log(itemArray);

        e.preventDefault();
    }

    deleteItems(key) {
        let filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        })
    }
}



export default TodoList;