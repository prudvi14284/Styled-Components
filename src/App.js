import {Heading, CustomButton} from './styledComponents'
import './App.css'

const App = () => (
  <>
    <Heading>Hello World</Heading>
    <CustomButton type="button">Click here</CustomButton>
    <CustomButton type="button" outline={true}>
      Click here
    </CustomButton>
  </>
)

export default App
