import React, { Component } from 'react';
class Counter extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-1 p-0 text-center my-auto">
                        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    </div>
                    <div className="col">
                        <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm m-1" >+</button>
                        <button onClick={() => this.props.onDecrement(this.props.counter)} className={this.getBtnClasses()}>-</button>
                        <button
                            onClick={() => this.props.onDelete(this.props.counter.id)}
                            className="btn btn-danger btn-sm m-2"
                        >
                            X
                </button>
                    </div>
                </div>
            </div>
        );
    }
    getBtnClasses() {
        let classes = "btn btn-secondary btn-sm m-1 ";
        classes += (this.props.counter.value === 0) ? "disabled" : "";
        return classes;
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value
    }
}

export default Counter;