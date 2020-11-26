import React, { Component } from 'react'
import Navigation from './components/Landing/navigation';
import Header from './components/Landing/header';
import Features from './components/Landing/features';
import About from './components/Landing/about';
import Services from './components/Landing/services';
import Gallery from './components/Landing/gallery';
import Testimonials from './components/Landing/testimonials';
import Team from './components/Landing/Team';
import Contact from './components/Landing/contact';
import JsonData from './data/data.json';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <Features data={this.state.landingPageData.Features} />
        <About data={this.state.landingPageData.About} />
        <Services data={this.state.landingPageData.Services} />
        <Gallery />
        <Testimonials data={this.state.landingPageData.Testimonials} />
        <Team data={this.state.landingPageData.Team} />
        <Contact data={this.state.landingPageData.Contact} />         
      </div>
    )
  }
}

export default App;
