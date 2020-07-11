import React from 'react';
import Food from './Food';
import { Grid, Container } from 'semantic-ui-react';
import { FoodConsumer } from '../../providers/FoodProvider'
import FoodForm from './FoodForm';
import { Responsive, Segment } from 'semantic-ui-react';


const FoodList = () => (
 

 <>
       <Responsive as={Segment} minWidth={900} maxWidth={2559}>

    <Container>
      <FoodForm />
          <Grid columns={3}  >
            <Grid.Row>
              <FoodConsumer>
                { value => (
                  <>
                    { value.foods.map( a =>
                      <Grid.Column>
                        <Food key={a.id}  {...a} />
                      </Grid.Column> 
                      )
                    }
                  </>             
                )}
              </FoodConsumer>
            </Grid.Row>
          </Grid>     
    </Container>
    </Responsive>
    <Responsive as={Segment} minWidth={500} maxWidth={899}>
    <Container>
      <FoodForm />
          <Grid columns={2}  >
            <Grid.Row>
              <FoodConsumer>
                { value => (
                  <>
                    { value.foods.map( a =>
                      <Grid.Column>
                        <Food key={a.id}  {...a} />
                      </Grid.Column> 
                      )
                    }
                  </>             
                )}
              </FoodConsumer>
            </Grid.Row>
          </Grid>     
    </Container>
    </Responsive>
    <Responsive as={Segment} minWidth={0} maxWidth={499}>
      <Container>
      <FoodForm />
          <Grid columns={1}  >
            <Grid.Row>
              <FoodConsumer>
                { value => (
                  <>
                    { value.foods.map( a =>
                      <Grid.Column>
                        <Food key={a.id}  {...a} />
                      </Grid.Column> 
                      )
                    }
                  </>             
                )}
              </FoodConsumer>
            </Grid.Row>
          </Grid>     
    </Container>
    </Responsive>

</>
    
)

export default FoodList;