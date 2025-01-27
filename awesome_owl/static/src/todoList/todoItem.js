import { Component, useState } from "@odoo/owl";

export class TodoItem extends Component {
    static template = "awesome_owl.todoitem";
    static props = {
        todo: {
            type: Object,
            shape: {
                id: Number,
                description: {type: String},
            }
        }
    };

    setup() {
        this.id = 0
        this.description = "Alcides"
        this.id = false
    }
}