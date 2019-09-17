import React from 'react';
import Topic from '../Models/Topic';

type HomeProps = {}
type HomeState = {}

export class Home extends React.Component<HomeProps, HomeState> {



    render() {

        let topics: Topic[] = [new Topic('Tech Recruiters', '1'), new Topic('Co-workers', '2')]

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
                                    <input type="email" className="form-control" id="emailTextbox" placeholder="name@example.com" />
                                </div>
                                <div className="form-group">
                                    <label>Select a topic.</label>
                                    <select className="form-control" id="topicDropdown">
                                        {topics.map(function (topic) {
                                            return (
                                                <option key={topic.id} value={topic.id}>{topic.name}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Title e.g. Name of a person, or a company, or place.</label>
                                    <input type="text" className="form-control" id="titleTextbox" placeholder="Reece Graves" />
                                </div>
                                <div className="form-group">
                                    <label>Describe your experience.</label>
                                    <textarea className="form-control" id="descriptionTextbox"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary mt-5">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}