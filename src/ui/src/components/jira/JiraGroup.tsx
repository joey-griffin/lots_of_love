import React from 'react';
import SprintTask from './models/SprintTask';

type JiraGroupProps = {
    jiraTasks: Array<SprintTask>
}
type JiraGroupState = { }

export class JiraGroup extends React.Component<JiraGroupProps, JiraGroupState> {
    render() {
        let self = this
        let currentGroup = this.props.jiraTasks[0].fields.status.name
        return (
            <div className="Box mb-3">
                <div className="Box--condensed box-header box-title">{currentGroup}</div>
                <ul className="no-mb box-item">
                    {self.props.jiraTasks.map((task, i) => {
                        return (
                            <li key={i} className="image-txt-container Box-row">
                                <p className="pr-title">
                                    <a href={task.url}>{task.key} / {task.fields.summary} </a>
                                    <br />
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}