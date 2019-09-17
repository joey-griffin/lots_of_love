import React from 'react';

type HomeProps = {
    stories: []
}

type HomeState = {
    stories: [],
    edit: string,
    redirect: boolean
}

export class Home extends React.Component<HomeProps, HomeState> {

    render() {
        return (
            <>
                <h3 className="text-center mt-5">Welcome to Really Crap</h3>
                <p className="text-center mt-3"><b>Anonymously</b> share a crappy experience you've had. The use of <b>real names is encouraged</b> with the sole purpose of helping readers avoid a similar fate.</p>
            </>
        );
    }
}