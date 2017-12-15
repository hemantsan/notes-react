import React, { Component } from 'react';
import CardComponent from '../NoteCard/CardComponent';

class ListComponent extends Component {

    constructor() {
        super();
        this.state = {
            taskList: [
                {id: 0, title: "Bring Soap", datetime: '05-Dec-2017 05:30 PM', detail: "Some quick example text to build on the card title."},
                {id: 1, title: "Recharge Internet", datetime: '05-Dec-2017 05:30 PM', detail: "Some quick example text to build on the card title."},
                {id: 2, title: "Pay Rent", datetime: '05-Dec-2017 05:30 PM', detail: "Some quick example text to build on the card title."},
                {id: 3, title: "Play Dota", datetime: '05-Dec-2017 05:30 PM', detail: "Some quick example text to build on the card title."}
            ],
            isEditing: false
        }
    }

    remove(id) {
        var tempArray = this.state.taskList.map((task, index) => {
            if(task.id == id) {
                this.state.taskList.splice(index, 1);
            }
        });
        this.setState = ({
            taskList: tempArray
        }); 
    }

    render() {
        var self = this;
        var Tasks = this.state.taskList.map((task) => {
            return (
                <CardComponent
                    key={task.id}
                    title={task.title}
                    datetime={task.datetime}
                    detail={task.detail}
                    handleEdit={self.edit}
                    handleRemove={self.remove}
                    isEditingState={this.state.isEditing}
                />
            );
        });

        return (
            <div className="row">
                {Tasks}
            </div>
        );
    }
}

export default ListComponent;
