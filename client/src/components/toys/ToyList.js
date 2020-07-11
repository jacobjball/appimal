import React from 'react';
import Toy from './Toy';
import { Grid, Container } from 'semantic-ui-react';
import { ToyConsumer } from '../../providers/ToyProvider'
import ToyForm from './ToyForm'
import { Responsive, Segment } from 'semantic-ui-react'


const ToyList = () => (
 

 <>
  <Responsive as={Segment} minWidth={900} maxWidth={2559}>
    <Container>
      <ToyForm />
      <Grid columns={3}>
        <Grid.Row>
          <ToyConsumer>
            { value => (
              <>
                { value.toys.map( a =>
                  <Grid.Column>
                    <Toy key={a.id}  {...a} />
                  </Grid.Column> 
                  )
                }
              </>                            
            )}
          </ToyConsumer>  
        </Grid.Row>
      </Grid>     
    </Container>
  </Responsive>
  <Responsive as={Segment} minWidth={500} maxWidth={899}>
    <Container>
        <ToyForm />
        <Grid columns={2}>
          <Grid.Row>
            <ToyConsumer>
              { value => (
                <>
                  { value.toys.map( a =>
                    <Grid.Column>
                      <Toy key={a.id}  {...a} />
                    </Grid.Column> 
                    )
                  }
                </>                            
              )}
            </ToyConsumer>  
          </Grid.Row>
        </Grid>     
    </Container>
  </Responsive>
  <Responsive as={Segment} minWidth={0} maxWidth={499}>
  <Container>
        <ToyForm />
        <Grid columns={1}>
          <Grid.Row>
            <ToyConsumer>
              { value => (
                <>
                  { value.toys.map( a =>
                    <Grid.Column>
                      <Toy key={a.id}  {...a} />
                    </Grid.Column> 
                    )
                  }
                </>                            
              )}
            </ToyConsumer>  
          </Grid.Row>
        </Grid>     
    </Container>
  </Responsive>  
</>
    
)

export default ToyList;