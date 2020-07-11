import React, { Component } from 'react';
import axios from 'axios';
import { AuthConsumer } from '../providers/AuthProvider';
import { withRouter, Link } from 'react-router-dom';

const DogContext = React.createContext();

export const DogConsumer = DogContext.Consumer;

class DogProvider extends Component {

    state = { dogs: [] }

    getDog = (userId) =>  {

      
      axios.get(`/api/users/${userId}/dogs`)
        .then( res => {
          this.setState({ dogs: res.data})
        })
        .catch( err => {
          console.log(err)
        })
    }

    addDog = (dog, userId) => {
      

        axios.post(`/api/users/${userId}/dogs`, dog )
        .then( res => {
          const { dogs } = this.state
          this.setState({ dogs: [...dogs, res.data]})
        })
        .catch( err => {
          console.log(err)
        })
      }

      updateDog = (id, dog, userId) => {
       

        axios.patch(`/api/users/${userId}/dogs/${id}`, { dog })
        .then( res => {
          const dogs = this.state.dogs.map( a => {
            if ( a.id === id ) {
              return res.data
            }
            return a
          })
          this.setState({ dogs })
        })
        .catch(console.log)
      }
  
      deleteDog = (id, userId) => {
       

        axios.delete(`/api/users/${userId}/dogs/${id}`)
          .then( res => {
            const { dogs } = this.state
            this.setState({ dogs: dogs.filter( a => a.id !== id )})
          })
          .catch(err => {
            console.log(err)
  
          })
      }
    render() {
        return(
            <DogContext.Provider value={{
                ...this.state, 
                addDog: this.addDog, 
                deleteDog: this.deleteDog,
                updateDog: this.updateDog,
                getDog: this.getDog
            }} >
                
                { this.props.children }</DogContext.Provider>


            
        )
    }



  

}
export default DogProvider;

