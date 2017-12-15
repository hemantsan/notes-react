import React, { Component } from 'react';
import CardComponent from '../NoteCard/CardComponent';

class ListComponent extends Component {

    constructor() {
        super();
        this.state = {
            taskList: [
                {id: 0, title: "Bring Soap", datetime: '05-Dec-2017 05:30 PM', detail: "Some quick text to build on the card title."},
                {id: 1, title: "Recharge Internet", datetime: '05-Dec-2017 05:30 PM', detail: "Some quick build on the card title."},
                {id: 2, title: "Pay Rent", datetime: '05-Dec-2017 05:30 PM', detail: "Some quick text to build on the card title."},
                {id: 3, title: "Play Dota", datetime: '05-Dec-2017 05:30 PM', detail: "Some quick text to build on the card title."}
            ],
            isEditing: false
        }

        this.remove = this.remove.bind(this);
        this.save = this.save.bind(this);
    }   

    remove(id) {
        this.setState({
            taskList: this.state.taskList.filter((task, index) => {
                return task.id !== id
            })
        });
        console.log(this.state.taskList);
    }

    save(taskData) {
        const updatedTasks = this.state.taskList;
        updatedTasks[taskData.id].title = taskData.title;
        updatedTasks[taskData.id].detail = taskData.detail;
        this.setState({
            taskList: updatedTasks,
        });
    }

    render() {
        var self = this;
        var Tasks = this.state.taskList.map((task) => {
            return (
                <CardComponent
                    id={task.id}
                    key={task.id}
                    title={task.title}
                    datetime={task.datetime}
                    detail={task.detail}
                    handleEdit={self.edit}
                    handleRemove={self.remove}
                    handleSave={self.save}
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
