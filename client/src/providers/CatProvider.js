import React, { Component } from 'react';
import axios from 'axios';

const CatContext = React.createContext();

export const CatConsumer = CatContext.Consumer;

class CatProvider extends Component {

    state = { cats: [] }


    componentDidMount() {
      //ask rails for all todos
      axios.get(`/api/cats`)
        .then( res => {
          this.setState({ cats: res.data})
        })
        .catch( err => {
          console.log(err)
        })
    }

    addCat = (cat) => {
        axios.post('/api/cats', cat )
        .then( res => {
          const { cats } = this.state
          this.setState({ cats: [...cats, res.data]})
        })
        .catch( err => {
          console.log(err)
        })
      }

      updateCat = (id, cat) => {
        axios.patch(`/api/cats/${id}`, { cat })
        .then( res => {
          const cats = this.state.cats.map( a => {
            if ( a.id === id ) {
              return res.data
            }
            return a
          })
          this.setState({ cats })
        })
        .catch( err=> {
          console.log(err)
        })
      }
  
      deleteCat = (id) => {
        axios.delete(`/api/cats/${id}`)
          .then( res => {
            const { cats } = this.state
            this.setState({ cats: cats.filter( a => a.id !== id )})
          })
          .catch(err => {
            console.log(err)
  
          })
      }
    render() {
        return(
            <CatContext.Provider value={{
                ...this.state, 
                addCat: this.addCat, 
                deleteCat: this.deleteCat,
                updateCat: this.updateCat
            }} >
                
                { this.props.children }</CatContext.Provider>


            
        )
    }



  

}

export default CatProvider;