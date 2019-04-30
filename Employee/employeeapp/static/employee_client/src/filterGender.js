import React, { Component } from 'react';
import './App.css';
import logo from './pic.png'
class FilterGender extends Component {
  state = {
    todos: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/v1/filterGender/male/');
      const todos = await res.json();
      this.setState({
        todos
      });
    } catch (e) {
      console.log(e);
    }
  }

  handleClick = userId => {
    const requestOptions = {
      method: 'DELETE'
    };
  
    // Note: I'm using arrow functions inside the `.fetch()` method.
    // This makes it so you don't have to bind component functions like `setState`
    // to the component.
    fetch("http://127.0.0.1:8000/api/v1/filterGender/" + userId, requestOptions).then((response) => {
      return response.json();
    }).then((result) => {
      // do what you want with the response here
    });
  }

  render() {
    return (
      <div className='container'>
         <div class="card">
            <div class="card-body">
                <select name="" onChange={() => { this.handleClick("male") }}>
                    <option>
                        Male
                    </option>
                    <option>
                        Female
                    </option>
                </select><br/><br/>
                <button className="btn btn-primary">Get Data</button>
            </div>
        </div>
         <div className="row">
              {this.state.todos.map(item => (
                <div id="mycard" className="card m-hover">
                 <div className="card-body">
                   <div key={item.id}>
                   <img id="mylogo" className="avatar" src={logo} alt={"logo"}/> 
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

export default FilterGender ;
