import { useState } from "react";

const Trello101 = () => {
  const [slider, setSlider] = useState(0);

  const accardSlider = (index) => {
    if (slider !== index) {
      setSlider(index);
    } else {
      setSlider(index);
    }
  };

  return (
    <>
      <div className="bg-cyan-50 w-full">
        <div className="flex flex-col gap-3 pt-10 laptop:container mx-auto">
          <b className="text-3xl font-bold">TRELLO 101</b>
          <h2 className="text-xl laptop:text-5xl tablet:w-[650px]  font-semibold">
            Источник повышения производительности
          </h2>
          <p className="text-lg px-3 laptop:w-1/2 ">
            Простые, с гибкими настройками и широкими возможностями. Доски,
            колонки и карточки дают исчерпывающее представление о том, кто чем
            занимается и что нужно выполнить. Подробнее см. в нашем{" "}
            <span className="border-b border-blue-700 text-blue-700 cursor-pointer">
              руководстве по началу работы.
            </span>
          </p>

          <div className="flex flex-col-reverse  laptop:flex-row justify-between gap-4  items-center mt-10">
            <div className="flex w-full laptop:w-1/2 flex-col gap-2 laptop:gap-7">
              <div
                onClick={() => accardSlider(0)}
                className={`laptop:w-[350px] border-l-8 border-blue-400 p-2 ${
                  slider === 0
                    ? "border-l-8 border-blue-400 bg-white rounded-lg shadow-lg"
                    : "border-none"
                }
             cursor-pointer p-3 transition-all duration-300  text-xl`}
              >
                <b className="text-2xl font-bold">Доски</b>
                <p>
                  Благодаря доскам Trello задания упорядочиваются, а работа
                  движется. Достаточно одного взгляда, чтобы увидеть все
                  задачи, от запланированных до выполненных.
                </p>
              </div>
              <div
                onClick={() => accardSlider(1)}
                className={`laptop:w-[350px] p-2 ${
                  slider === 1
                    ? "border-l-8 border-blue-400  bg-white rounded-lg shadow-lg"
                    : "border-none"
                } cursor-pointer p-3 transition-all duration-300   text-xl`}
              >
                <b className="text-2xl font-bold">КОЛОНКИ</b>
                <p>
                  Различные этапы выполнения задания. Начните с простых этапов
                  («Нужно сделать», «В работе», «Готово») или создайте собственный
                  рабочий процесс, точно соответствующий потребностям вашей
                  команды. В Trello нет неправильных подходов.
                </p>
              </div>
              <div
                onClick={() => accardSlider(2)}
                className={`laptop:w-[350px] p-2 ${
                  slider === 2
                    ? "border-l-8 border-blue-400  bg-white rounded-lg shadow-lg"
                    : "border-none"
                } cursor-pointer p-3 transition-all duration-300 text-xl`}
              >
                <b className="text-2xl font-bold">Карточки</b>
                <p>
                  Карточки представляют задания и идеи и содержат всю информацию,
                  необходимую для выполнения работы. По мере выполнения заданий
                  перетаскивайте карточки между колонками, чтобы изменить их
                  статус.
                </p>
              </div>
            </div>

            <div className="w-full ">
                <img className={` cursor-pointer w-full ${ slider === 0 ? 'block' : ''} ${ slider === 1 ? 'hidden' : 'block'} ${ slider === 2 ? 'hidden' : 'block'} `} src="/img-0.png" alt="" />
                <img className={`cursor-pointer w-full ${ slider === 1 ? 'block' : 'hidden'}`} src="/img-1.png" alt="" />
                <img className={`cursor-pointer w-full ${ slider === 2 ? 'block' : 'hidden'}`} src="/img-2.png" alt="" />
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trello101;
