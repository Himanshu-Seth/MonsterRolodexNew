import React , { Component } from 'react';
// import logo from './logo.svg';
import {Cardlist} from'./component/card-list/card-list.component';
import {SearchBox} from'./component/search-component/search-box.component';

import './App.css';
 class App extends Component{
   constructor(){
     super();
     this.state ={
      monster:[],
      searchField : ''
      };
   }
   componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(response =>response.json())
     .then(users => this.setState({monster: users}));
   }
   render(){
     const {monster, searchField} = this.state;
     const filteredMonster = monster.filter(monster => monster.name.toLocaleLowerCase()
     .includes(searchField.toLocaleLowerCase()))
     return(
     <div className='App'>
     <h1 className='h1'>Monster Rolodex </h1>
     <SearchBox
         placeholder='search monster' 
         handleChange={e =>{ this.setState({searchField:e.target.value })}}
     />
     <Cardlist monster={filteredMonster}/> 
   </div>
   )
   }
 }
export default App;
