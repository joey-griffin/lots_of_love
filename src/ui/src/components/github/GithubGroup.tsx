import React from 'react';
import PR from './models/PR';

type GithubGroupProps = {
    openPRs: Array<PR>
}
type GithubGroupState = {}

export class GithubGroup extends React.Component<GithubGroupProps, GithubGroupState> {

    render() {
        let self = this
        let repoUrl = `https://github.com/${this.props.openPRs[0].repo}`
        return (
            <div>
                <div className="Box mb-3">
                    <div className="Box--condensed box-header box-title"><a href={repoUrl}>{this.props.openPRs[0].repo}</a></div>
                    <ul className="no-mb box-item">
                        {self.props.openPRs.map((pr, i) => {
                            let approvalContent
                            if (pr.hasApprovals) {
                                approvalContent = <>
                                    <span>Approvals: </span>
                                    {
                                        pr.reviews.map((review, i) => {
                                            return (
                                                <span><img src={review.user.avatar_url} alt={review.user.login} title={review.user.login}
                                                    className="rounded-avatar" /></span>
                                            )
                                        })
                                    }
                                </>
                            } else {
                                approvalContent = <span>Pending approvals</span>
                            }
                            return (
                                <li key={i} className="image-txt-container Box-row">
                                    <img width="40px" height="40px" src={pr.user.avatar_url} alt={pr.user.login} title={pr.user.login} className="pr-avatar" />
                                    <p className="pr-title">
                                        <a href={pr.html_url}>{pr.title}</a>
                                        <br />
                                        {approvalContent}
                                        <br />
                                    </p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div >
        )
    }
}