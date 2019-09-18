import React from 'react';
import { Container } from 'reactstrap';

type LayoutProps = { };
type LayoutState = { };

export class Layout extends React.Component<LayoutProps, LayoutState> {
    render () {
        return (
            <div>
                <Container fluid={true}>
                    {this.props.children}
                </Container>
            </div>
        )
    }
}