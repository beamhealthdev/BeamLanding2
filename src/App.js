import { Component } from 'react';
import { BrowserRouter, Route, Routes, HashRouter} from 'react-router-dom';
// import './pages/Styles/Main.cssx';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions'
import FrequentyAskedQuestions from './pages/FrequentyAskedQuestions';
// import Blog from './pages/Blog';
import CaseStudies from './pages/CaseStudies';
import CaseStudy1 from './pages/CaseStudy1';
import CaseStudy2 from './pages/CaseStudy2';
import CaseStudy3 from './pages/CaseStudy3';
import CaseStudy4 from './pages/CaseStudy4';
import API from './pages/API';

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
    else if(window.location.pathname == '/faq') {
      this.setState({
        active_page:'faq'
      })
    }
    else if(window.location.pathname == '/blog') {
      this.setState({
        active_page:'blog'
      })
    }
    else if(window.location.pathname == '/api') {
      this.setState({
        active_page:'api'
      })
    }
    else if(window.location.pathname == '/case_studies') {
      this.setState({
        active_page:'case_studies'
      })
    }
    else if(window.location.pathname == '/case_study_1') {
      this.setState({
        active_page:'case_study_1'
      })
    }
    else if(window.location.pathname == '/case_study_2') {
      this.setState({
        active_page:'case_study_2'
      })
    }
    else if(window.location.pathname == '/case_study_3') {
      this.setState({
        active_page:'case_study_3'
      })
    }
    else if(window.location.pathname == '/case_study_4') {
      this.setState({
        active_page:'case_study_4'
      })
    }
  }

  updateNav = (page) => {
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
          this.state.active_page == 'api' ?
          <API />
          :
          this.state.active_page == 'faq' ?
          <FrequentyAskedQuestions />
          :
          this.state.active_page == 'case_studies' ?
          <CaseStudies />
          :
          this.state.active_page == 'case_study_1' ?
          <CaseStudy1 />
          :
          this.state.active_page == 'case_study_2' ?
          <CaseStudy2 />
          :
          this.state.active_page == 'case_study_3' ?
          <CaseStudy3 />
          :
          this.state.active_page == 'case_study_4' ?
          <CaseStudy4 />
          :
          <div></div>
          }
        </div>
      </div>
    )
  }
}

export default App;
