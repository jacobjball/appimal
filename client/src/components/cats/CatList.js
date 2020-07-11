import React from 'react';
import Cat from './Cat';
import { Grid, Container } from 'semantic-ui-react';
import { CatConsumer } from '../../providers/CatProvider'
import CatForm from './CatForm'
import { Responsive, Segment } from 'semantic-ui-react'

const CatList = () => (
  <>
  <Responsive as={Segment} minWidth={900} maxWidth={2559}>
  
      <>
          <Container>
          <CatForm />
      <Grid columns={3}  >
      <Grid.Row>
        <CatConsumer>
          { value => (
            <>
            { value.cats.map( a =>
              <Grid.Column>
                <Cat key={a.id}  {...a} />
              </Grid.Column> 
              )
            }
          </>
                            
                            )}
        
        </CatConsumer>
            
      </Grid.Row>
        </Grid>     
                            </Container>
      </>
  </Responsive>
  <Responsive as={Segment} minWidth={500} maxWidth={899}>
  <>
          <Container>
          <CatForm />
      <Grid columns={2}  >
      <Grid.Row>
        <CatConsumer>
          { value => (
            <>
            { value.cats.map( a =>
              <Grid.Column>
                <Cat key={a.id}  {...a} />
              </Grid.Column> 
              )
            }
          </>
                            
                            )}
        
        </CatConsumer>
            
      </Grid.Row>
        </Grid>     
                            </Container>
      </>
  </Responsive>
  <Responsive as={Segment} minWidth={0} maxWidth={499}>
  <>
          <Container>
          <CatForm />
      <Grid columns={1}  >
      <Grid.Row>
        <CatConsumer>
          { value => (
            <>
            { value.cats.map( a =>
              <Grid.Column>
                <Cat key={a.id}  {...a} />
              </Grid.Column> 
              )
            }
          </>
                            
                            )}
        
        </CatConsumer>
            
      </Grid.Row>
        </Grid>     
                            </Container>
      </>
  </Responsive>
  </>
)

export default CatList;