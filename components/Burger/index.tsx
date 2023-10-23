"use client";
import React, { useState } from "react";
import Image from "next/image";
import LinkScroll from "../Link";
import { useTranslation } from "react-i18next";

const Burger = () => {
  const [active, $active] = useState(false);
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => () => {
    i18n.changeLanguage(language);
  };
  const handleActive = () => {
    $active(!active);
  };
  return (
    <>
      <Image
        src={"/assets/icons/hamburger.svg"}
        alt='hamburger'
        width={24}
        height={24}
        className='hidden mobile:block mr-5'
        onClick={handleActive}
      />
      <div className={`menu ${active && "active"}  h-[100vh] pt-11 px-[30px]`}>
        <button type='submit'>
          <Image
            src={"/assets/icons/close.svg"}
            alt='close'
            width={40}
            height={40}
            className='mb-[62px]'
            onClick={handleActive}
          />
        </button>
        <div className='flex ml-4 flex-col'>
          <LinkScroll
            title={t("services")}
            link='services'
            className='text-[24px] text-white font-[700] mb-8'
            onClick={handleActive}
          />
          <LinkScroll
            title={t("aboutUs")}
            link='about'
            className='text-[24px] text-white font-[700] mb-8'
            onClick={handleActive}
          />
          <LinkScroll
            title='FAQ'
            link='FAQ'
            className='text-[24px] text-white font-[700] mb-8'
            onClick={handleActive}
          />
          <LinkScroll
            title={t("request")}
            link='form'
            className='text-[24px] text-white font-[700] mb-[62px]'
            onClick={handleActive}
          />
          <div className='flex items-center mb-16'>
            <p
              onClick={changeLanguage("ru")}
              className='text-[32px] text-white font-[900] mr-[34px] cursor-pointer'
            >
              RU
            </p>
            <p
              onClick={changeLanguage("en")}
              className='text-[32px] text-white font-[900] cursor-pointer'
            >
              ENG
            </p>
          </div>
          <div className='flex items-start'>
            <Image
              src={"/assets/icons/whitefacebook.svg"}
              alt='facebook'
              width={40}
              height={40}
            />
            <Image
              src={"/assets/icons/whiteinstagram.svg"}
              alt='instagram'
              width={40}
              height={40}
              className='ml-[56px]'
            />
          </div>
          <div className='flex items-center mt-8'>
            <Image
              src={"/assets/icons/whitetelegram.svg"}
              alt='telegram'
              width={40}
              height={40}
            />
            <Image
              src={"/assets/icons/whitewhatsapp.svg"}
              alt='instagram'
              width={40}
              height={40}
              className='ml-[56px]'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Burger;
