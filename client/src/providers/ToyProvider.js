import React, { Component } from 'react';
import axios from 'axios';

const ToyContext = React.createContext();

export const ToyConsumer = ToyContext.Consumer;

class ToyProvider extends Component {

    state = { toys: [] }


    componentDidMount() {
      //ask rails for all todos
      axios.get(`/api/toys`)
        .then( res => {
          this.setState({ toys: res.data})
        })
        .catch( err => {
          console.log(err)
        })
    }

    addToy = (toy) => {
        axios.post('/api/toys', toy )
        .then( res => {
          const { toys } = this.state
          this.setState({ toys: [...toys, res.data]})
        })
        .catch( err => {
          console.log(err)
        })
      }

      updateToy = (id, toy) => {
        axios.patch(`/api/toys/${id}`, { toy })
        .then( res => {
          const toys = this.state.toys.map( a => {
            if ( a.id === id ) {
              return res.data
            }
            return a
          })
          this.setState({ toys })
        })
        .catch( err=> {
          console.log(err)
        })
      }
  
      deleteToy = (id) => {
        axios.delete(`/api/toys/${id}`)
          .then( res => {
            const { toys } = this.state
            this.setState({ toys: toys.filter( a => a.id !== id )})
          })
          .catch(err => {
            console.log(err)
  
          })
      }
    render() {
        return(
            <ToyContext.Provider value={{
                ...this.state, 
                addToy: this.addToy, 
                deleteToy: this.deleteToy,
                updateToy: this.updateToy
            }} >
                
                { this.props.children }</ToyContext.Provider>


            
        )
    }



  

}

export default ToyProvider;