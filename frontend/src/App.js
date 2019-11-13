import React, { Component } from 'react';
import UserData from './components/Userdata';
import Heads from './components/head';
import Projects from './components/projects'
import Skills from './components/skills';
class App extends Component {
    render() {
        return (
            <>
                <UserData />
                <Heads />
                <Skills />
                <Projects />
            </>

        )
    }
}

export default App;