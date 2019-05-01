import React, { Component } from 'react';
import './App.css';
import logo from './assets/pic.png';
import queryString from 'query-string';
class EmployeeInfo extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
  const values = queryString.parse(this.props.location.search)
  console.log(values.id) // "top"
  console.log(values.origin) // "im"
  }

  async componentDidMount() {
    // console.log(this.props.match.params.id);
    try {
      const res = await fetch("http://127.0.0.1:8000/api/v1/Studentdetail/" + this.props.match.params.id,);
      const todos = await res.json();
      this.setState({
        todos
      });
    } catch (e) {
      console.log(e);
    }
  }
   
  render(){
    return (
      <div className='container'>
        <div className="row">
              {this.state.todos.map(item => (
                <div id="mycard" className="card m-hover">
                  <div className="card-body">
                     <div key={item.id}>
                       <h4 className="text-center">{item.username}</h4>
                       <div className="row text-center m-center">
                        <p className="text-center">{item.gender}</p><i className="fas fa-restroom"></i>
                       </div>
                       <div className="row text-center m-center">
                        <i class="fas fa-building"></i><span>{item.city}</span><i class="fas fa-globe-americas"></i><span>{item.country}</span>
                       </div>
                     </div>
                  </div> 
               </div>
              ))}
        </div>
      </div>
    );
  }
}

export default EmployeeInfo ;
