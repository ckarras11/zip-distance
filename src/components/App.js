import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Form from './form';
import Distance from './distance';
import Loader from './loader';
import { setZip1, setZip2, fetchLocations} from '../actions';

function mapStateToProps(state) {
  return {
    zip1: state.zip1,
    zip2: state.zip2,
    distance: state.distance,
    location1: state.location1,
    location2: state.location2,
    loading: state.loading
  };
}

class App extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleZip1 = this.handleZip1.bind(this);
    this.handleZip2 = this.handleZip2.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    if(this.props.zip1.length !== 5 || this.props.zip2.length !== 5) {
      alert('Please make sure the zipcodes are valid')
    } else {
      this.props.dispatch(fetchLocations(parseInt(this.props.zip1, 10), parseInt(this.props.zip2, 10)))
    }
  }
  handleZip1(e) {
    this.props.dispatch(setZip1(e.target.value))
  }
  handleZip2(e) {
    this.props.dispatch(setZip2(e.target.value))
  }

  render() {
    let distance;
    let loading;
    if(this.props.distance !== null) {
      distance = <Distance miles={this.props.distance} loc1={this.props.location1} loc2={this.props.location2}/>
    }
    if(this.props.loading) {
      loading = <Loader />
    }
    return (
      <div className="App">
        <h1 className="title">How Far Away Are You?</h1>
        <Form handleZip1={this.handleZip1} handleZip2={this.handleZip2} onSubmit={this.handleSubmit}/>
        {loading}
        {distance}
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
