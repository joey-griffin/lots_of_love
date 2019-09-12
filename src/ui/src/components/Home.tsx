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
                <h1 className="display-1 text-center mt-5">Under Construction</h1>
            </>
        );
    }
}