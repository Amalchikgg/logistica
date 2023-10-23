"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  return (
    <p className='text-[#171923] text-[96px] mobile:text-[40px] mobile:text-center tablet:text-[64px] font-[900] mb-[66px] tablet:mb-[41px]'>
      {t("ourServices")}
    </p>
  );
};

export default Services;
