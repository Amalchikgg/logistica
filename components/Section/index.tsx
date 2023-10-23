"use client";
import React from "react";
import LinkScroll from "../Link";
import Zoom from "react-reveal/Zoom";
import { useTranslation } from "react-i18next";
import { numberFont } from "@/app/layout";

const Section = () => {
  const { t } = useTranslation();
  return (
    <section className='flex  items-center gap-y-5 mb-[89px] tablet:mb-[52px] tablet:flex-col-reverse'>
      <Zoom>
        <div className='relative w-[520px] tablet:max-w-full h-[584px] mr-[30px]'>
          <video
            width={"520"}
            height={"584"}
            autoPlay={true}
            controls
            className='!h-full !w-full'
          >
            <source
              src='/assets/video/video2.mp4'
              width={"520"}
              type='video/mp4'
              height='584'
              className='!h-[584px]'
            />
          </video>
        </div>
      </Zoom>
      <div className='tablet:w-full'>
        <Zoom>
          <div className='bg-[#005CE5]  tablet:max-w-full tablet:w-full mb-[15px] mobile:py-5 rounded-[35px] mobile:text-[18px] flex flex-col justify-around max-w-[740px] h-[412px] tablet:h-[224px] mobile:h-[231px] mobile:px-3 py-[25px] px-[42px] tablet:py-8'>
            <p className='text-[36px] tablet:text-[20px] mobile:text-[18px] mobile:leading-[1] mobile:mb-[12px] text-white font-bold tablet:font-[900] mb-5 tablet:mb-[14px] leading-[1.2]'>
              {t("sectionTitle")}
            </p>
            <p className='text-[20px] font-bold tablet:text-[14px]  mobile:text-[12px] text-[#EDF2F7] mb-5 tablet:mb-[17px] mobile:mb-[13px] leading-[1.2]'>
              {t("sectionText")}
            </p>
            <button className='w-[389px] mobile:w-[190px] h-[66px] tablet:rounded-[6px] tablet:w-[141px] tablet:h-[35px] bg-white rounded-[12px] text-[#005CE5] tablet:font-[900] text-[24px] tablet:text-[14px] font-bold'>
              <LinkScroll title={t("leaveArequest")} link='form' className='' />
            </button>
          </div>
        </Zoom>
        <Zoom>
          <div className='h-[161px] mobile:px-3 tablet:h-[89px] tablet:pt-3 py-10 px-10 rounded-[35px] mobile:rounded-[15px] bg-[#F6F6F6] flex justify-between'>
            <div>
              <p
                className={`text-[#005CE5] ${numberFont.className} text-[48px] tablet:text-[24px] max-h-[57px] font-bold`}
              >
                20K+
              </p>
              <p className='text-[#747376] mobile:leading-[1.2] max-w-[220px] mobile:text-xs text-[20px] tablet:text-base font-bold'>
                {t("loadsTransported")}
              </p>
            </div>
            <div>
              <p
                className={`text-[#005CE5] ${numberFont.className} text-[48px] tablet:text-[24px] max-h-[57px] font-bold`}
              >
                5+
              </p>
              <p className='text-[#747376] mobile:leading-[1.2] text-[20px] max-w-[220px] mobile:text-xs tablet:text-base font-bold'>
                {t("yearsExperience")}
              </p>
            </div>

            <div>
              <p
                className={`text-[#005CE5] text-[48px]  tablet:text-[24px] ${numberFont.className} max-h-[57px] font-bold`}
              >
                150+
              </p>
              <p className='text-[#747376] text-[20px] tablet:leading-[1.1] mobile:text-xs max-w-[220px] tablet:text-base font-bold'>
                {t("driversWorker")}
              </p>
            </div>
          </div>
        </Zoom>
      </div>
    </section>
  );
};

export default Section;
