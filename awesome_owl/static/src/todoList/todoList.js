import { Component, useState } from "@odoo/owl";
import { TodoItem } from "./todoItem";

export class TodoList extends Component {
    static template = "awesome_owl.todolist";
    static components = { TodoItem };

    setup() { 
        this.state = useState({ value: "default" });
        this.todos = useState([]);
        // useAutofocus("input")
    }

    addTodo(ev) {
        if (ev.keyCode === 13)
            return console.log(ev.target.value)
    }
}