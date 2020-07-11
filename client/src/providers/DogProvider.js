import React, { Component } from 'react';
import axios from 'axios';
import { AuthConsumer } from '../providers/AuthProvider';
import { withRouter, Link } from 'react-router-dom';

const DogContext = React.createContext();

export const DogConsumer = DogContext.Consumer;

class DogProvider extends Component {

    state = { dogs: [] }

    componentDidMount() {

      const { auth: { user }} = this.props;
      axios.get(`/api/users/${user.id}/dogs`)
        .then( res => {
          this.setState({ dogs: res.data})
        })
        .catch( err => {
          console.log(err)
        })
    }

    addDog = (dog) => {
        axios.post(`/api/users/${user.id}/dogs`, dog )
        .then( res => {
          const { dogs } = this.state
          this.setState({ dogs: [...dogs, res.data]})
        })
        .catch( err => {
          console.log(err)
        })
      }

      updateDog = (id, dog) => {
        axios.patch(`/api/users/${user.id}/dogs/${id}`, { dog })
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
  
      deleteCat = (id) => {
        axios.delete(`/api/users/${user.id}/${id}`)
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
                updateDog: this.updateDog
            }} >
                
                { this.props.children }</DogContext.Provider>


            
        )
    }



  

}

export class ConnectedDogProvider extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <DogProvider { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedDogProvider);
