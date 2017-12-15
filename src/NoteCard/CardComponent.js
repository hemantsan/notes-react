import React, { Component } from 'react';

class CardComponent extends Component {

    constructor() {
        super();
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.remove = this.remove.bind(this);
        this.state = {
            isEditing: false
        };
    }

    edit(e) {
        this.setState({
            isEditing: true
        });
    }

    save(e) {
        this.setState({
            isEditing: false
        });
    }

    remove(e) {
        e.preventDefault();
        this.props.handleRemove(this.props.id);
    }

    _renderStaticView() {
        return(
            <div className="col-md-4">
                <div className="card mb-2">
                    <div className="card-body">
                        <h4 className="card-title">{this.props.title}</h4>
                        <h6 className="card-subtitle mb-2 text-muted small">{this.props.datetime}</h6>
                        <p className="card-text">{this.props.detail}</p>
                        <button type="button" className="card-link btn-info btn" onClick={this.edit}>Edit</button>
                        <button type="button" className="card-link btn-default btn" onClick={this.remove}>Remove</button>
                    </div>
                </div>
            </div>
        );
    }

    _renderEditingView() {
        return(
            <div className="col-md-4">
                <div className="card mb-2">
                    <div className="card-body">
                        <label>Task title </label>
                        <textarea className="form-control" defaultValue={this.props.title}></textarea>
                        <button type="button" className="card-link btn-success btn mt-3" onClick={this.save}>Save</button>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        if(this.state.isEditing === false) {
            return this._renderStaticView();
        }
        else {
            return this._renderEditingView();
        }
    }
}

export default CardComponent;