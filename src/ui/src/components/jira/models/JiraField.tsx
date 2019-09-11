import JiraStatus from "./JiraStatus";

export default class JiraField {
    constructor(status: JiraStatus, summary: string) {
        this.status = status
        this.summary = summary
    }
    status: JiraStatus
    summary: string
}