import React, { Component } from 'react';
import axios from 'axios';

const FoodContext = React.createContext();

export const FoodConsumer = FoodContext.Consumer;

class FoodProvider extends Component {

    state = { foods: [] }


    componentDidMount() {
    
      axios.get(`/api/foods`)
        .then( res => {
          this.setState({ foods: res.data})
        })
        .catch( err => {
          console.log(err)
        })
    }

    addFood = (food) => {
        axios.post('/api/foods', food )
        .then( res => {
          const { foods } = this.state
          this.setState({ foods: [...foods, res.data]})
        })
        .catch( err => {
          console.log(err)
        })
      }

      updateFood = (id, food) => {
        axios.patch(`/api/foods/${id}`, { food })
        .then( res => {
          const foods = this.state.foods.map( a => {
            if ( a.id === id ) {
              return res.data
            }
            return a
          })
          this.setState({ foods })
        })
        .catch( err=> {
          console.log(err)
        })
      }
  
      deleteFood = (id) => {
        axios.delete(`/api/foods/${id}`)
          .then( res => {
            const { foods } = this.state
            this.setState({ foods: foods.filter( a => a.id !== id )})
          })
          .catch(err => {
            console.log(err)
  
          })
      }
    render() {
        return(
            <FoodContext.Provider value={{
                ...this.state, 
                addFood: this.addFood, 
                deleteFood: this.deleteFood,
                updateFood: this.updateFood
            }} >
                
                { this.props.children }</FoodContext.Provider>
            
        )
    }


}

export default FoodProvider;