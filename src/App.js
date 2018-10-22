import React, { Component } from 'react';
import './App.css';
import axios from 'axios'


class App extends Component {
  constructor() {
  super();

  this.state = {

    filterString: "",
    names: [],
    input: ''
  };
};
editNameFn=(change, id)=> {
  axios.put(`/api/name/:id`).then(results => {
    this.setState({names:results.data.names});
  })
}
deleteOne=(req,param) => {
  console.log('delete')
  axios.delete (`/api/name/:id`).then((res)=>{this.setState({names:res.data})})
}
handleChange( filter ) {
  console.log('clicked');
  this.setState({ filterString: filter })
}
handleFetch=() => {
  console.log('clicked');
axios.get (`/api/names`).then((res)=>{
  this.setState({
    names:res.data
  })
})
}
newName=(req,param)=> {
  console.log('clicked')
axios.post (`/api/name/`, {name:this.state.input}).then((res)=>{
  this.setState({
    names:res.data
  })
})

};


  render() {
    console.log(this.state.input);
    let namesToDisplay = this.state.names.filter( (element, index) => {
      return element.includes( this.state.filterString );
    }).map( (element, index) => {
      console.log(element)
      return (
      <div className="displayNames">
        <h2 key={ index }>{ element }</h2>
        <div className="options">
          <button className="deleteButton" onClick={()=> this.deleteOne()}>Delete</button>
          <button className="editButton" onClick={()=> this.editNameFn()}> Edit </button>
        </div>
      </div>)
    })
    return (
      <div className='group' style={{backgroundImage:"url(https://images.wallpaperscraft.com/image/puppy_rottweiler_dog_paws_muzzle_102644_1920x1080.jpg)"}} alt="puppies"> 
        <h1 className='title'>K-9 Name Organizer</h1>
        <img className="paw" src="https://upload.wikimedia.org/wikipedia/commons/0/09/White_paw_print.png" alt="paw"/>
        <div className='userInput'>
          <div className="container">
            <input className="nameInput" onChange={e => this.setState({input: e.target.value})} placeholder='Name' />
            <input className="filterButton" onChange={ (e) => this.handleChange( e.target.value ) } type="text" placeholder="Filter Names" />
              { namesToDisplay }
            <button className ="fetcher" onClick={() => this.handleFetch()}>Fetch Names</button>
            <button onClick={() => this.newName()}>Add New Name</button>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
