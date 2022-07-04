import { Component } from 'react';
import { BrowserRouter, Route, Routes, HashRouter} from 'react-router-dom';
// import './pages/Styles/Main.cssx';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions'
import Resources from './pages/Resources';
import Blog from './pages/Blog';
import CaseStudiesMain from './pages/CaseStudiesMain';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      active_page:'home'
    };
  }

  async componentDidMount() {
    // code
    if(window.location.pathname == '/') {
      this.setState({
        active_page:'home'
      })
    }
    else if(window.location.pathname == '/about') {
      this.setState({
        active_page:'about'
      })
    }
    else if(window.location.pathname == '/solutions') {
      this.setState({
        active_page:'solutions'
      })
    }
    else if(window.location.pathname == '/resources') {
      this.setState({
        active_page:'resources'
      })
    }
    else if(window.location.pathname == '/blog') {
      this.setState({
        active_page:'blog'
      })
    }
    else if(window.location.pathname == '/case_studies') {
      this.setState({
        active_page:'case_studies'
      })
    }
  }

  updateNav = (page) => {
    console.log('1 ', page)
    this.setState({
      active_page: page
    })
  }

  render() {
    return(
      <div>
        <div className="parent-container">
          {this.state.active_page == 'home' ?
          <Home onUpdateNav={(page) => this.updateNav(page)} />
          :
          this.state.active_page == 'about' ?
          <About />
          :
          this.state.active_page == 'solutions' ?
          <Solutions />
          :
          this.state.active_page == 'resources' ?
          <Resources />
          :
          this.state.active_page == 'blog' ?
          <Blog />
          :
          this.state.active_page == 'case_studies' ?
          <CaseStudiesMain />
          :
          <div></div>
          }
        </div>
      </div>
    )
  }
}

export default App;
