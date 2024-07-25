import Auth from '../../home/Auth'
import Trello101 from '../../home/Trello101'
import ScrollbarSlider from '../../home/ScrollbarSlider'
import NewWork from '../../home/NewWork'
import Development from '../../home/development'
import KeyboardControlSlider from '../../home/KeyboardControlSlider'
import Trafic from '../../home/Trafic'
import Partner from '../../home/Partner'
import Email from '../../home/Email'
import Footer from '../../home/Footer'

const HomePage = () => {
  return (
    <>
    <Auth/>
    <Trello101/>
    <ScrollbarSlider />
    <NewWork/>
    <Development/>
    <KeyboardControlSlider/>
    <Trafic/>
    <Partner/>
    <Email/>
    <Footer/>
    </>
  )
}

export default HomePage