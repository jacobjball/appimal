import React, { Component } from 'react';
import { Form, Dropdown } from 'semantic-ui-react';
import { ToyConsumer } from '../../providers/ToyProvider';



class ToyForm extends Component {

  state = {errors: {length: ''}, name: '', length: '', date: '', time: '', address: '', phone: ''}

  componentDidMount() {
      if (this.props.id) {
          const { name, description } = this.props
          this.setState({ name, description})
      }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value, });

  handleChangeLength = (e, data) => {
    // console.log(data.value);
    // console.log("Hello Change Length")
    this.setState({ length: data.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
        this.props.updateToy(this.props.id, this.state)
        this.props.toggleEdit()

    } else { 
    this.props.addToy(this.state)
    }
    this.setState({name: '', description: ''})
  }

  render() {
    const { name, description } = this.state;
    

    return(
      //new client or edit client if statement
      <> 
      <Form onSubmit= {this.handleSubmit}>
        <Form.Input
        name='name'
        value={name}
        onChange={this.handleChange}
        
        required
        label='name'
          
        />
        

          {/* <Form.Input
          
          name='description'
          value={description}
          onChange={this.handleChange}
          required
          label='Description'
        />  */}
 

  
        <Form.Button color='red'>Submit</Form.Button>
      </Form>
      </>
    )
  }
}
const ConnectedToyForm = (props) => (
  <ToyConsumer>
    {value => (
        <ToyForm
        { ...props }
        addToy={value.addToy}
        updateToy={value.updateToy}
        />
    )}
  </ToyConsumer>
)

export default ConnectedToyForm;
