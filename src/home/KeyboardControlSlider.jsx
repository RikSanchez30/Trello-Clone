
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import TrelloQuote from '../components/TextSlider';

export default function App() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation]}
                className="mySwiper mt-14"
            >
                <SwiperSlide>
                    <TrelloQuote img={'https://images.ctfassets.net/rz1oowkt5gyp/2f3keSvy7vtldV4YDFKkE2/5ed788fb5257c342995d25ba8e8e313d/WomenWhoCode_logo.svg'} discount={'75 % организаций сообщают, что Trello приносит первые результаты их бизнесу в течение 30 дней.'} sponsor={'Директор по мировому лидерству, Women Who Code'} name={'Joey Rosenberg'} text={'[Trello] отлично подходит для упрощения сложных процессов. Как менеджер, я могу разбить [процессы] на небольшие фрагменты и затем делегировать их участникам своей команды, но при этом по-прежнему иметь общее представление обо всей работе.'} />
                </SwiperSlide>
                <SwiperSlide>
                    <TrelloQuote img={'https://images.ctfassets.net/rz1oowkt5gyp/2kIh1cWqsxjtHwWHWJJPsJ/d8436f3979be6cab7931f4d276c2d5ce/thoughtworks.svg'}    discount={'81 % клиентов выбирает Trello за удобство использования.'}  sponsor={'Менеджер по продукту, ThoughtWorks'} name={'Sumeet Moghe'} text={'Сотрудник может делиться контекстом и информацией через Trello в любом месте: из офиса, дома или на территории клиента.'}/>
                </SwiperSlide>
                <SwiperSlide>
                    <TrelloQuote  img={'https://images.ctfassets.net/rz1oowkt5gyp/3X64fxSs4ek9A0ex45BUNI/911daed79127cb2f8a021da93fb68b9f/ptc-logo.svg'}    discount={'74 % клиентов говорят, что решение Trello позволило им улучшить коммуникацию с коллегами и командами.'} sponsor={'Директор по разработке, IKEA/PTC'} name={'Jefferson Scomacao'} text={'Мы стали работать с Trello, чтобы обеспечить всеобщее понимание этапов, требований и процедур. Эффект от такого внедрения при взаимодействии команд, каждая из которых имеет свои культурные и языковые отличия, был просто исключительным.'} />
                </SwiperSlide>

            </Swiper>

           
        </>
    );
}
