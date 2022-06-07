import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import './IntroComp.css';


export default class IntroComponents extends Component {
    render() {
        return (
            <div>
                <Container className="projects-intro">
                    Hi! I'm Shamita <br></br>
                    ...ADD INTRO TEXT...
                </Container>
            </div>
        )
    }
}

