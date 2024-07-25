
const TrelloQuote = ({text,name,sponsor,link,discount,img}) => {
    return (
      <div className=" laptop:container flex flex-col laptop:flex-row gap-10 justify-between h-[800px]  items-start p-6 bg-gray-100 rounded-lg max-w-3xl mx-auto">
        <div className="mb-6 flex flex-col justify-between h-full">
          <p className="text-[25px] font-bold max-w-[1300px] text-gray-800">
           {text}
          </p>
          <div className="text-2xl">
          <p className="mt-2 text-xl italic text-gray-600">
            {name}
          </p>
          <p>{sponsor}</p>
          <div className="flex justify-between mr-6">
          <img width={100} height={80} src={img} alt="" />
          <a className="text-blue-500 underline" href="#">Подробнее</a>
          </div>
          </div>
        </div>
        <div className=" w-full laptop:w-1/2 bg-gradient-to-tr h-full flex flex-col justify-between from-purple-800   text-white to-purple-400 p-1 rounded-lg">
         
            <h3 className=" text-[38px]  ">{discount}</h3>
             <a href="#" className="self-center underline text-[20px]">Опрос TechValidate для Trello</a>
        
        
        </div>
      </div>
    );
  };
  
  export default TrelloQuote;
  