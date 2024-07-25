import Home from "../Notepad/Home"
import Menu from "../Notepad/Menu"

const HomePage = () => {

  return (
<div className='text-[#9fadbc] bg-[#1d2125] pt-32  flex flex-col h-screen'>
  <div className="laptop:container px-5 flex laptop:flex-row flex-col-reverse items-start gap-14">
   <Menu/>
   <Home/>
   </div>
</div> 
  )
}

export default HomePage
