


import { Fragment} from 'react'
import Hero from '../components/hero/Hero'
import Pizza from '../components/pizza/Pizza'
import Sushi from '../components/sushi/Sushi'
import Zakuski from '../components/zakuski/Zakuski'
import Desert from '../components/Desert/Desert'
import Napitki from '../components/Napitki/Napitki'
import Sous from '../components/Sous/Sous'

const HomePage = () => {

  return (
    <Fragment>
      <Hero />
      <Pizza />
      <Sushi />
      <Zakuski />
      <Desert />
      <Napitki />
      <Sous />
    </Fragment>
    
  )
}

export default HomePage