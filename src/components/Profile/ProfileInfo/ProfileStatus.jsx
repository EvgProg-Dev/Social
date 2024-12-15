import React from "react";
import style from "./ProfileInfo.module.css";

export class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    };

    activateEditMode = () => {
        this.setState({
            editMode: true,
        });
    };
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);
    };
    onStatusChange = (e) => {
        this.setState({
            status: e.target.value,
        });
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                state: this.props.status,
            });
        }

        console.log("componentDidUpdate");
    }
    render() {
        return (
            <div className={style.status__wrapper}>
                {this.state.editMode ? (
                    <input
                        onChange={this.onStatusChange}
                        autoFocus={true}
                        className={style.status__input}
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}
                        type="text"
                    />
                ) : (
                    <span onDoubleClick={this.activateEditMode}>
                        {this.props.status
                            ? this.props.status
                            : "Add status..."}
                    </span>
                )}
            </div>
        );
    }
}
