import React from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import patientAvatar from '../../assets/images/patient-avatar.png'
import { HiStar } from 'react-icons/hi'

const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
        <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            }}
        >
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img 
                            src={patientAvatar}
                            alt=''
                        />
                        <div>
                            <h2 className="leading-[30px] text-lg font-semibold
                            text-headingColor">
                                Hari Govindh
                            </h2>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>
                    <p className='text-base leading-7 mt-4 text-textColor font-normal'>
                    I recently visited a doctor and was thoroughly impressed. They were welcoming and attentive, listening carefully to my concerns and explaining my condition and treatment options clearly. Their compassionate approach made me feel comfortable and confident in my care. The treatment was effective, and the doctor followed up regularly to ensure my recovery. I highly recommend them for their professionalism and dedication to patient well-being.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img 
                            src={patientAvatar}
                            alt=''
                        />
                        <div>
                            <h2 className="leading-[30px] text-lg font-semibold
                            text-headingColor">
                                Dharsan
                            </h2>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>
                    <p className='text-base leading-7 mt-4 text-textColor font-normal'>
                    I recently visited a doctor and was thoroughly impressed. They were welcoming and attentive, listening carefully to my concerns and explaining my condition and treatment options clearly. Their compassionate approach made me feel comfortable and confident in my care. The treatment was effective, and the doctor followed up regularly to ensure my recovery. I highly recommend them for their professionalism and dedication to patient well-being.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img 
                            src={patientAvatar}
                            alt=''
                        />
                        <div>
                            <h2 className="leading-[30px] text-lg font-semibold
                            text-headingColor">
                                Abhisheck
                            </h2>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>
                    <p className='text-base leading-7 mt-4 text-textColor font-normal'>
                    I recently visited a doctor and was thoroughly impressed. They were welcoming and attentive, listening carefully to my concerns and explaining my condition and treatment options clearly. Their compassionate approach made me feel comfortable and confident in my care. The treatment was effective, and the doctor followed up regularly to ensure my recovery. I highly recommend them for their professionalism and dedication to patient well-being.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img 
                            src={patientAvatar}
                            alt=''
                        />
                        <div>
                            <h2 className="leading-[30px] text-lg font-semibold
                            text-headingColor">
                                Abdullla
                            </h2>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>
                    <p className='text-base leading-7 mt-4 text-textColor font-normal'>
                    I recently visited a doctor and was thoroughly impressed. They were welcoming and attentive, listening carefully to my concerns and explaining my condition and treatment options clearly. Their compassionate approach made me feel comfortable and confident in my care. The treatment was effective, and the doctor followed up regularly to ensure my recovery. I highly recommend them for their professionalism and dedication to patient well-being.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img 
                            src={patientAvatar}
                            alt=''
                        />
                        <div>
                            <h2 className="leading-[30px] text-lg font-semibold
                            text-headingColor">
                                Mohan
                            </h2>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>
                    <p className='text-base leading-7 mt-4 text-textColor font-normal'>
                    I recently visited a doctor and was thoroughly impressed. They were welcoming and attentive, listening carefully to my concerns and explaining my condition and treatment options clearly. Their compassionate approach made me feel comfortable and confident in my care. The treatment was effective, and the doctor followed up regularly to ensure my recovery. I highly recommend them for their professionalism and dedication to patient well-being.
                    </p>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Testimonial