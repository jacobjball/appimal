import React, { Component } from "react";
import Dog from "./Dog";
import { Grid, Container } from "semantic-ui-react";
import { DogConsumer } from "../../providers/DogProvider";
import DogForm from "./DogForm";
import { AuthConsumer } from "../../providers/AuthProvider";
import { withRouter, Link } from "react-router-dom";
import { Responsive, Segment } from 'semantic-ui-react'


class DogList extends Component {
  componentDidMount() {
    this.props.getDog(this.props.user.id);
  }
  render() {
    const { user } = this.props;
    const userId = user.id;
    return (
      <>
      <Responsive as={Segment} minWidth={900} maxWidth={2559}>
        <Container>
          <DogForm userId={userId}/>
          <Grid columns={3}>
            <Grid.Row>
              <>
                {this.props.dogs.map((a) => (
                  <Grid.Column>
                    <Dog key={a.id} {...a} userId={userId} />
                  </Grid.Column>
                ))}
              </>
            </Grid.Row>
          </Grid>
        </Container>
      </Responsive>
      <Responsive as={Segment} minWidth={500} maxWidth={899}>
        <Container>
          <DogForm userId={userId}/>
          <Grid columns={2}>
            <Grid.Row>
              <>
                {this.props.dogs.map((a) => (
                  <Grid.Column>
                    <Dog key={a.id} {...a} userId={userId} />
                  </Grid.Column>
                ))}
              </>
            </Grid.Row>
          </Grid>
        </Container>
      </Responsive>
      <Responsive as={Segment} minWidth={0} maxWidth={499}>
        <Container>
          <DogForm userId={userId}/>
          <Grid columns={1}>
            <Grid.Row>
              <>
                {this.props.dogs.map((a) => (
                  <Grid.Column>
                    <Dog key={a.id} {...a} userId={userId} />
                  </Grid.Column>
                ))}
              </>
            </Grid.Row>
          </Grid>
        </Container>
      </Responsive>
      </>
    );
  }
}

export class ConnectedDogList extends React.Component {
  render() {
    return (
      <DogConsumer>
        {(values) => <DogList {...this.props} {...values} />}
      </DogConsumer>
    );
  }
}

const ConnectedAuthDogList = (props) => (
  <AuthConsumer>
    {(values) => <ConnectedDogList {...props} {...values} />}
  </AuthConsumer>
);

export default withRouter(ConnectedAuthDogList);
