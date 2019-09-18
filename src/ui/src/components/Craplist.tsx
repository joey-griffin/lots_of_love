import React from 'react';
import Review from '../Models/Review';

type CraplistProps = {}
type CraplistState = {
    selectedName: string
    selectedReviews: Review[]
    reviews: Review[]
    names: string[]
}

export class Craplist extends React.Component<CraplistProps, CraplistState> {
    constructor(props: CraplistProps) {
        super(props)
        this.selectName = this.selectName.bind(this)
        this.state = {
            selectedName: '',
            selectedReviews: [],
            reviews: [],
            names: ['John Smith', 'Jane Doe']
        }
    }

    componentDidMount() {
        let reviews: Review[] = [
            new Review(0, 'so bad 1', 'sooooo bad text', '18/09/2019'),
            new Review(0, 'so bad 2', 'sooooo bad text', '18/09/2019'),
            new Review(1, 'so bad 1', 'sooooo bad text', '18/09/2019')
        ]

        this.setState({ reviews: reviews })
    }

    selectName(id: number, name: string) {
        let reviews: Review[] = []
        let processed = 0
        this.state.reviews.forEach((review, index, array) => {
            if (review.id === id) {
                reviews.push(review)
            }
            processed++
            if (processed === array.length) {
                this.setState({
                    selectedName: name,
                    selectedReviews: reviews
                })
            }
        });
    }

    render() {
        let self = this

        let mainContent
        if (this.state.selectedReviews.length < 1) {
            mainContent = (
                <h3 id="main-name-header">Select a name in the left panel to see what people have said</h3>
            )
        } else {
            mainContent = (
                <>
                    <h3 id="main-name-header">{this.state.selectedName}</h3>
                    <ul className="list-group list-group-flush">
                        {this.state.selectedReviews.map(function (review, i) {
                            return (
                                <li className="list-group-item" key={i}>
                                    <blockquote className="blockquote review-title">
                                        <p className="mb-0">{review.title}</p>
                                        <footer className="blockquote-footer">{review.date}</footer>
                                    </blockquote>
                                    <p className="review-text" key={i}>{review.text}</p>
                                </li>
                            )
                        })}
                    </ul>
                </>
            )
        }

        return (
            <div className="row" id="page-wrapper">
                <nav className="col-md-3">
                    <ul className="nav flex-column">
                        <li className="nav-item" id="nav-header"><h3>Craplist</h3></li>
                        {this.state.names.map(function (name, i) {
                            return (
                                <li className="nav-item nav-name" key={i} onClick={self.selectName.bind(self, i, name)}>{name}</li>
                            )
                        })}
                    </ul>
                </nav>
                <main className="col-md-9">
                    <div id="main-wrapper">
                        {mainContent}
                    </div>
                </main>
            </div>
        );
    }
}