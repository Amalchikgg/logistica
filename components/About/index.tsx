"use client";
import Image from "next/image";
import React from "react";
import Zoom from "react-reveal/Zoom";
import { useTranslation } from "react-i18next";
import { numberFont } from "@/app/layout";

const About = () => {
  const { t } = useTranslation();
  return (
    <section id='about' className='mb-[66px] mobile:mb-[55px]'>
      <p className='text-[#171923] mobile:text-[40px] text-[96px] tablet:text-[64px] font-[900] mb-[66px] mobile:mb-[26px] tablet:mb-[38px]'>
        {t("whyChoose")}
      </p>
      <div className='flex flex-wrap items-center'>
        <Zoom>
          <div className='w-[520px] flex flex-col justify-around mobile:pt-0 mobile:px-9 tablet:w-full tablet:mr-0 tablet:h-[232px] mb-[30px] h-[245px] mr-[30px] pt-6 pb-[34px] px-9 rounded-[35px] bg-[#005CE5]'>
            <p
              className={`${numberFont.className} text-white leading-[1.1]  text-[64px] font-bold`}
            >
              01
            </p>
            <p className='text-white font-[900] leading-[1.1]  text-[24px] mb-2'>
              {t("industryExperience")}
            </p>
            <p className='text-white leading-[1.2] mobile:text-xs'>
              {t("industryExperienceText")}
            </p>
          </div>
        </Zoom>
        <Zoom>
          <div className='w-[740px] mobile:px-9 mobile:pt-0 relative h-[245px] tablet:w-full tablet:h-[232px] mb-[30px] flex items-center pt-6 pb-[34px] px-9 rounded-[35px] bg-[#005CE5]'>
            <div>
              <p
                className={`${numberFont.className} text-white text-[64px] leading-[1.1]  font-bold`}
              >
                02
              </p>
              <p className='text-white font-[900] text-[24px] leading-[1.1]  mb-2'>
                {t("costSaving")}
              </p>
              <p className='text-white leading-[1.2] mobile:text-xs'>
                {t("costSavingText")}
              </p>
            </div>
            <Image
              src='/assets/icons/choose.svg'
              alt='choose'
              width={277}
              height={233}
              className='tablet:max-w-[210px] mobile:absolute mobile:top-[-10px] mobile:right-[1px] mobile:max-w-[125px]'
            />
          </div>
        </Zoom>
        <Zoom>
          <div className='w-[410px] mobile:px-9 mobile:pt-0 flex flex-col justify-around tablet:w-full tablet:mr-0 tablet:mb-[30px]  tablet:h-[232px] h-[245px] mr-[30px] pt-6 pb-[34px] px-9 rounded-[35px] bg-[#005CE5]'>
            <p
              className={`${numberFont.className} text-white text-[64px] leading-[1.1] font-bold`}
            >
              03
            </p>
            <p className='text-white font-[900] leading-[1.1] text-[24px] mb-2'>
              {t("seamlessIntegration")}
            </p>
            <p className='text-white leading-[1.2] mobile:text-xs'>
              {t("seamlessIntegrationText")}
            </p>
          </div>
        </Zoom>
        <Zoom>
          <div className='w-[410px] mobile:px-9 mobile:pt-0 flex flex-col justify-around tablet:w-full tablet:mr-0 tablet:mb-[30px] tablet:h-[232px] h-[245px] mr-[30px] pt-6 pb-[34px] px-9 rounded-[35px] bg-[#005CE5]'>
            <p
              className={`${numberFont.className} text-white text-[64px] leading-[1.1] font-bold`}
            >
              04
            </p>
            <p className='text-white font-[900] leading-[1.1] text-[24px] mb-2'>
              {t("problemSolving")}
            </p>
            <p className='text-white leading-[1.2] mobile:text-xs'>
              {t("problemSolvingText")}
            </p>
          </div>
        </Zoom>
        <Zoom>
          <div className='w-[410px] mobile:px-9 mobile:pt-0 flex flex-col justify-around  tablet:w-full tablet:h-[232px] tablet:mb-[30px] h-[245px] pt-6 pb-[34px] px-9 rounded-[35px] bg-[#005CE5]'>
            <p
              className={`${numberFont.className} leading-[1.1] text-white text-[64px] font-bold`}
            >
              05
            </p>
            <p className='text-white font-[900] leading-[1.1] text-[24px] mb-2'>
              {t("customerSatisfaction")}
            </p>
            <p className='text-white leading-[1.1] mobile:text-xs mobile:leading-normal'>
              {t("customerSatisfactionText")}
            </p>
          </div>
        </Zoom>
      </div>
    </section>
  );
};

export default About;
