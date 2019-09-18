import React from 'react';
import ReviewRequest from '../Models/ReviewRequest';
import { Redirect } from 'react-router';

type HomeProps = {}
type HomeState = {
    reviewRequest: ReviewRequest
    toCraplist: boolean
}

export class Home extends React.Component<HomeProps, HomeState> {

    constructor(props: HomeProps) {
        super(props)
        this.emailTextOnChange = this.emailTextOnChange.bind(this)
        this.titleTextOnChange = this.titleTextOnChange.bind(this)
        this.nameTextOnChange = this.nameTextOnChange.bind(this)
        this.textTextOnChange = this.textTextOnChange.bind(this)
        this.submit = this.submit.bind(this)
        this.state = {
            reviewRequest: new ReviewRequest('', '', '', ''),
            toCraplist: false
        }
    }

    emailTextOnChange(event: any) {
        let updated = this.state.reviewRequest;
        let email = event.target.value;
        updated.email = email;
        this.setState({ reviewRequest: updated });
    }

    titleTextOnChange(event: any) {
        let updated = this.state.reviewRequest;
        let title = event.target.value;
        updated.title = title;
        this.setState({ reviewRequest: updated });
    }

    nameTextOnChange(event: any) {
        let updated = this.state.reviewRequest;
        let name = event.target.value;
        updated.name = name;
        this.setState({ reviewRequest: updated });
    }

    textTextOnChange(event: any) {
        let updated = this.state.reviewRequest;
        let text = event.target.value;
        updated.text = text;
        this.setState({ reviewRequest: updated });
    }

    submit() {
        fetch(`http://localhost:9341/api/reviews`, {
            method: 'POST',
            body: JSON.stringify(this.state.reviewRequest),
            headers: { "Content-Type": "application/json" }
        }).then(() => {
            this.setState({ reviewRequest: new ReviewRequest('', '', '', '') })
            if (window.confirm(`Thanks for submitting your experience. Would you like to view the craplist?`)) {
                this.setState({ toCraplist: true })
            }
        }).catch(error => console.error(error));
    }

    render() {

        if (this.state.toCraplist) {
            return <Redirect to='/' />
        }

        return (
            <>
                <h3 className="text-center mt-5">Welcome to Really Crap</h3>
                <p className="text-center mt-5"><b>Anonymously</b> share a crappy experience you've had.<br></br>Use of <b>real names is encouraged</b> with the sole purpose of helping readers avoid a similar fate.</p>

                <div className="container mt-5">
                    <div className="row justify-content-md-center">
                        <div className="col col-lg-6">
                            <form>
                                <div className="form-group">
                                    <label>Email address, <i>optional</i> (used to receive a notification when your text is published, and in no other manner).</label>
                                    <input type="email" className="form-control" id="emailTextbox" placeholder="name@example.com"
                                        value={this.state.reviewRequest.email} onChange={this.emailTextOnChange.bind(this)} />
                                </div>
                                <div className="form-group">
                                    <label>Title.</label>
                                    <input type="text" className="form-control" id="titleTextbox" placeholder="Won't stop calling me, help!"
                                        value={this.state.reviewRequest.title} onChange={this.titleTextOnChange.bind(this)} />
                                </div>
                                <div className="form-group">
                                    <label>Names e.g. Name of a person, people, a company, or place.</label>
                                    <input type="text" className="form-control" id="nameTextbox" placeholder="Adithya Ramesh"
                                        value={this.state.reviewRequest.name} onChange={this.nameTextOnChange.bind(this)} />
                                </div>
                                <div className="form-group">
                                    <label>Describe your experience.</label>
                                    <textarea className="form-control" id="descriptionTextbox" rows={5}
                                        value={this.state.reviewRequest.text} onChange={this.textTextOnChange.bind(this)}></textarea>
                                </div>
                                <button type="button" className="btn btn-primary mt-5" onClick={this.submit.bind(this)}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}