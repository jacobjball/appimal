import React, { Component } from 'react';
import { Form, Dropdown } from 'semantic-ui-react';
import { DogConsumer } from '../../providers/DogProvider';



class DogForm extends Component {

  state = {errors: {length: ''}, name: '', length: '', date: '', time: '', address: '', phone: ''}

  componentDidMount() {
      if (this.props.id) {
          const { name, breed, cost } = this.props
          this.setState({ name, breed, cost})
      }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value, });



  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
        this.props.updateDog(this.props.id, this.state)
        this.props.toggleEdit()

    } else { 
    this.props.addDog(this.state)
    }
    this.setState({name: '', cost: '', color: ''})
  }

  render() {
    const { name, breed, age } = this.state;

    return(
      
      <> 
      <Form onSubmit= {this.handleSubmit}>
        <Form.Input
        name='name'
        value={name}
        onChange={this.handleChange}
        
        required
        label='name'
          
        />

        
          <Form.Input
          
          name='breed'
          value={breed}
          onChange={this.handleChange}
          required
          label='Breed'
        /> 
 


          <Form.Input
          
          name='age'
          value={age}
          onChange={this.handleChange}
          required
          label='Age'
        />
 
  
        <Form.Button color='red'>Submit</Form.Button>
      </Form>
      </>
    )
  }
}
const ConnectedDogForm = (props) => (
  <DogConsumer>
    {value => (
        <DogForm
        { ...props }
        addDog={value.addDog}
        updateDog={value.updateDog}
        />
    )}
  </DogConsumer>
)

export default ConnectedDogForm;
