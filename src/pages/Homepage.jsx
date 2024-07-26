import Home from "../Notepad/Home"
import Menu from "../Notepad/Menu"

const HomePage = () => {

  return (
<div className='text-[#9fadbc] bg-[#1d2125] pt-32  w-full flex flex-col h-[115vh] laptop:h-[100vh]'>
  <div className="laptop:container px-5 flex laptop:flex-row flex-col-reverse w-full justify-center items-start gap-14">
   <Menu/>
   <Home/>
   </div>
</div> 
  )
}

export default HomePage
