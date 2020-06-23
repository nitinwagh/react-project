import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Error from './Error'


const App = () => {

    return (
      <BrowserRouter>
        <Segment>
          <Menu fixed='top' inverted>
              <Menu.Item header>
                <Link to="/">React App</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/about">About</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/contact">Contact US</Link>
              </Menu.Item>
          </Menu>
        </Segment>
        <Segment>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route component={Error} />
          </Switch>
        </Segment>
      </BrowserRouter>
    )
}


export default App;
