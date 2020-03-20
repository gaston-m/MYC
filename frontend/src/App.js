import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

//            COMPONENTS

import Navigation from './Components/Navigation';
import Login from './Components/Login';
import Signup from './Components/Signup';


export default class  App extends Component {

  constructor() {

    super();

    this.state = {

      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      token: '',
      isAthenticate: false

    }

    this.onSubmitSignup = this.onSubmitSignup.bind(this);
    this.onSubmitLogin = this.onSubmitLogin.bind(this);
    this.onChange = this.onChange.bind(this);
    
      
  }

//// ------------------------------   LOGIN  ----------------


  onSubmitLogin = async (e) => {

    e.preventDefault();

    const user = {
        strategy: 'local',
        email: this.state.email,
        password: this.state.password 

    }

    console.log(user);
    const res = await axios.post('http://127.0.0.1:3030/authentication', user);

    if (res.data.accessToken){
      console.log('Usuario Logueado con Exito. Token: ', res.data )
      this.setState({
        
        token: res.data.accessToken,
        isAthenticate: true

      })
    } else {

      console.log(res)
    }

  }


  onSubmitSignup = async (e) => {

    e.preventDefault();
  
    console.log('estado:',  this.state.name, this.state.email, this.state.password);

    var errors = [];

    if (  this.state.name.length < 0 || this.state.email < 0 || this.state.password < 0 || this.state.confirmPassword < 0){

      errors.push({ message: 'Todos los Campos deben Contener Datos'})
    }

    if (this.state.password < 4 ) {

      errors.push({ message: 'La Contraseña debe contener al menos 4 Digitos'})

    }

    if (this.state.password != this.state.confirmPassword) {

        errors.push({ message: 'Las Contraseñas Deben Coincidir'})

    }

    if ( errors.length > 0) {

      console.log('errors.length > 0')
      window.location.href='/signup'      

      ///return (<Redirect to={{ pathname: '/login' }}/>)   ver Documentacion ==> asi no funciona!!
      
    } else {

    const newUser = {

      name: this.state.name, 
      email: this.state.email,
      password: this.state.password

    }

    console.log(newUser);


    //const res = await axios.get('https://127.0.0.1:3030/users', { headers:{ Authorization: '7766'}})
  
    axios.post('http://127.0.0.1:3030/users', newUser)
      .then(response => {
          console.log(response)
          window.location.href='/login';
        })
      .catch((error) => {console.log(error)} )
      }  
  }



  btnOnClick =  (e) => {

    console.log('btnOnClick');
    e.preventDefault();

    const userId = '5e69d5f5ff72893790121d6d';
    const token= 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE1ODQ0MTk4MzIsImV4cCI6MTU4NDUwNjIzMiwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiNWU2OWQ1ZjVmZjcyODkzNzkwMTIxZDZkIiwianRpIjoiMzQzMTVhOGEtNTRkYy00YjYwLThjZGUtMTFmOGZmODQ1YzQ2In0.qp-WRDFjJaNE2WGoW58upIPWKjRk3yNV-oDkf9aykvg';


    axios.get('http://127.0.0.1:3030/companys?userId=' + userId, {headers : { Authorization: token }})
      .then(response => console.log(response.data))
      .catch(err => console.log(err.error))
  }

  onChange = async (e) => {

    const value = e.target.value;
    

    await this.setState({

        [e.target.name] : e.target.value

    })

    console.log(this.state);
    console.log('estado: ', this.state.name, this.state.email, this.state.password)

  }

  

 render() {

  return (
    <Router>
      <div>
        <Navigation />
        <Route path='/login'> 
            <Login onChange={this.onChange} onSubmit={this.onSubmitLogin}  btnOnClick={this.btnOnClick} />
        </Route>
        <Route path='/signup'> 
            <Signup onChange={this.onChange} onSubmit={this.onSubmitSignup}/>
        </Route>
      </div>
    </Router>
  )
 }
}
