import React from 'react'
import { Container, Header } from 'semantic-ui-react'

const HomePage = () => (
  <div>
    <Container fluid style={{"marginTop":"50px"}}>
      <Header as='h2'>Welcome to Movie App</Header>
      <p>
      Assuming all goes to plan in the rest of 2021, 30 September should see the release of the long-delayed 25th James Bond film, No Time To Die. It was originally scheduled to come out in November 2019, but was postponed first by the departure of original director Danny Boyle and then by the global coronavirus pandemic.

      Also out by the end of 2021? Four new entries in the Marvel Cinematic Universe – Black Widow, Shang-Chi and the Legend of the Ten Rings, Eternals and Spider-Man: No Way Home, bringing the total number of theatrically-released MCU films to 27.
      </p>
    </Container>
  </div>
)

export default HomePage