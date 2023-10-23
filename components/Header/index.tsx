"use client";
import React from "react";
import LinkScroll from "../Link";
import Burger from "../Burger";
import Image from "next/image";
import "@/Localization/index";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => () => {
    i18n.changeLanguage(language);
  };
  return (
    <header className='bg-[#005CE5] header mb-10 rounded-[12px] pl-10 tablet:px-5 pt-[26.5px] tablet:py-[14px] pr-[59px] pb-[22.5px] flex items-center justify-between'>
      <div className='flex items-center'>
        <div className='flex items-center'>
          <Burger />
          <Image
            src={"/assets/icons/logo.svg"}
            alt='logo'
            width={40}
            height={58}
            className='mr-[10px] tablet:h-[26px] tablet:w-[18px]'
          />
          <Image
            src={"/assets/icons/logo2.svg"}
            alt='logo'
            width={196}
            height={86}
            className='mr-[52px] tablet:mr-[30px] tablet:h-[40px] tablet:w-[90px]'
          />
        </div>
        <div className='mobile:hidden'>
          <LinkScroll
            title={t("services")}
            link={"services"}
            className='text-[24px] tablet:text-[14px] font-bold text-white mr-[38px] tablet:mr-[30px]'
          />
          <LinkScroll
            link={"FAQ"}
            title='FAQ'
            className='text-[24px] tablet:text-[14px] font-bold text-white'
          />
        </div>
      </div>
      <div className='flex items-center'>
        <div className='flex items-center mr-10 mobile:hidden'>
          <p
            onClick={changeLanguage("ru")}
            className='text-[36px] mr-3 text-white font-bold cursor-pointer tablet:text-[20px]'
          >
            RU
          </p>
          <p
            onClick={changeLanguage("en")}
            className='text-[36px] text-white font-bold cursor-pointer tablet:text-[20px]'
          >
            EN
          </p>
        </div>
        <button className='w-[223px] tablet:w-[141px] mobile:leading-[1] mobile:h-[29px] mobile:w-[121px] mobile:rounded-[6px] mobile:uppercase mobile:font-[900] tablet:text-[14px] h-[50px] tablet:h-[25px] bg-white rounded-[12px] text-[#005CE5] text-[20px] font-bold'>
          {t("bookACall")}
        </button>
      </div>
    </header>
  );
};

export default Header;
