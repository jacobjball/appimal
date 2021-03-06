import React, { Fragment, } from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Form, Grid, Image, Container, Divider, Header, Button, } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';

const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';



class Profile extends React.Component {
  state = { editing: false, formValues: { favorite: '', email: '', file: '', }, };

  onDrop = (files) => {
    this.setState({ formValues: { ...this.state.formValues, file: files[0], } });
  }
  
  
  componentDidMount() {
    const { auth: { user: { favorite, email, }, }, } = this.props;
    this.setState({ formValues: { favorite, email, }, });
  }
  
  toggleEdit = () => {
    this.setState( state => {
      return { editing: !state.editing, };
    })
  }
  
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({
      formValues: {
        ...this.state.formValues,
        [name]: value,
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { formValues: { favorite, email, file, }, } = this.state;
    const { auth: { user, updateUser, }, } = this.props;
    updateUser(user.id, { favorite, email, file, });
    this.setState({
      editing: false,
      formValues: {
        ...this.state.formValues,
        file: "",
      },
    });
  }

 
  
  profileView = () => {
    const { auth: { user }, } = this.props;
    return (
      <Fragment>
        <Grid.Column width={4}>
          <Image src={user.image || defaultImage} />
        </Grid.Column>
        <Grid.Column width={8}>
          <Header as="h1">{user.favorite }</Header>
          <Header as="h1">{user.email}</Header>
        </Grid.Column>
      </Fragment>
    )
  }
  
  editView = () => {
    const { auth: { user }, } = this.props;
    const { formValues: { favorite, email } } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Grid.Column width={4}>
        <Dropzone
          onDrop={this.onDrop}
          multiple={false}
        >
          {({ getRootProps, getInputProps, isDragActive }) => {
            return (
              <div
                {...getRootProps()}
                style={styles.dropzone}
              >
                <input {...getInputProps()} />
                {
                  isDragActive ?
                    <p>Drop files here...</p> :
                    <p>Try dropping some files here, or click to select files to upload.</p>
                }
              </div>
            )
          }}
        </Dropzone>
      </Grid.Column>
        <Grid.Column width={8}>
          <Form.Input
            label="Your Pet"
            name="favorite"
            value={favorite}
            required
            onChange={this.handleChange}
          />
          <Form.Input
            label="Email"
            name="email"
            value={email}
            required
            onChange={this.handleChange}
          />
          <Button>Update</Button>
        </Grid.Column>
      </Form>
    )
  }
  
  render() {
    const { editing, } = this.state;
    return (
      <Container>
        <Divider hidden />
        <Grid>
          <Grid.Row>
            { editing ? this.editView() : this.profileView()}
            <Grid.Column>
              <Button onClick={this.toggleEdit}>{editing ? 'Cancel' : 'Edit'}</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

const styles = {
  dropzone: {
    height: "150px",
    width: "150px",
    border: "1px dashed black",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
}


const ConnectedProfile = (props) => (
  <AuthConsumer>
    { auth => 
      <Profile { ...props } auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectedProfile;
