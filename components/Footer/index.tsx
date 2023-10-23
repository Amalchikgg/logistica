"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LinkScroll from "../Link";
import Zoom from "react-reveal/Zoom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Zoom bottom>
      <footer className='flex items-center mobile:items-start justify-between mb-[70px] mobile:mb-9 tablet:flex-col'>
        <div className='mobile:flex mobile:w-full mobile:justify-center mobile:items-center'>
          <div className='flex items-center'>
            <Image
              src={"/assets/icons/logoBlack1.svg"}
              alt='logo'
              width={40}
              height={58}
              className='mobile:max-w-[26px] mobile:max-h-[39px] mr-2'
            />
            <Image
              src={"/assets/icons/logoBlck2.svg"}
              alt='logo'
              width={196}
              height={86}
              className='mobile:max-w-[131px] mobile:max-h-[58px]'
            />
          </div>
        </div>
        <div className='flex mobile:hidden items-center tablet:justify-center tablet:w-full tablet:mt-[47px]'>
          <LinkScroll
            link={"services"}
            title={t("services")}
            className='text-[#171923] text-[20px] font-[900] mr-[45px]'
          />
          <LinkScroll
            link={"FAQ"}
            title='FAQ'
            className='text-[#171923] text-[20px] font-[900] mr-[45px]'
          />
          <LinkScroll
            link={"about"}
            title={t("aboutCompany")}
            className='text-[#171923] text-[20px] font-[900] mr-[45px]'
          />
          <LinkScroll
            link={"form"}
            title={t("request")}
            className='text-[#171923] text-[20px] font-[900] mr-[45px]'
          />
        </div>
        <div className='tablet:flex mobile:mt-[28px] mobile:flex-col mobile:justify-start tablet:items-center tablet:justify-between tablet:w-full tablet:mt-10'>
          <div className='hidden tablet:flex w-[50%] mobile:justify-center mobile:w-full gap-x-12 mobile:gap-x-10'>
            <Image
              src={"/assets/icons/facebook.svg"}
              alt='facebook'
              width={40}
              height={40}
            />
            <Image
              src={"/assets/icons/instagram.svg"}
              alt='instagram'
              width={40}
              height={40}
            />
            <Image
              src={"/assets/icons/telegram.svg"}
              alt='telegram'
              width={40}
              height={40}
            />
            <Image
              src={"/assets/icons/whatsapp.svg"}
              alt='telegram'
              width={40}
              height={40}
            />
          </div>
          <div className='mobile:mt-9'>
            <Link
              href={"#"}
              className='text-[#005CE5] text-[20px] mobile:text-[12px] font-[700]'
            >
              bisterrylogistics@gmail.com
            </Link>
          </div>
        </div>
      </footer>
    </Zoom>
  );
};

export default Footer;
