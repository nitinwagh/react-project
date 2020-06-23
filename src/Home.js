import React from 'react';
import { Container } from 'semantic-ui-react'
import Posts from './Posts'

const Home = () => {
    return (
        <Container>
            <p>Home page</p>
            <Posts />
        </Container>
    )
}

export default Home;