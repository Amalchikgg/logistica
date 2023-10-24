"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import Service from "../Service";

const Services = () => {
  const { t, i18n } = useTranslation();
  const services = [
    {
      image: "/assets/icons/service1.svg",
      title: t("fleet"),
      text: t("fleetText1"),
      text2: t("fleetText2"),
      text3: t("fleetText3"),
    },
    {
      image: "/assets/icons/service2.svg",
      title: t("safety"),
      text: t("safetyText1"),
      text2: t("safetyText2"),
      text3: t("safetyText3"),
    },
    {
      image: "/assets/icons/subtract.svg",
      title: t("accounting"),
      text: t("accountingText1"),
      text2: t("accountingText2"),
      text3: t("accountingText3"),
    },
    {
      image: "/assets/icons/service4.svg",
      title: t("dispatchService"),
      text: t("dispatchServiceText1"),
      text2: t("dispatchServiceText2"),
      text3: t("dispatchServiceText3"),
    },
  ];
  return (
    <>
      <p className='text-[#171923] text-[96px] mobile:text-[40px] mobile:text-center tablet:text-[64px] font-[900] mb-[46px] tablet:mb-[41px]'>
        {i18n.language === "en" ? "OUR SERVICES" : "НАШИ СЕРВИСЫ."}
      </p>
      <div className='flex justify-between mb-10 tablet:flex-wrap mobile:flex-col mobile:items-center'>
        {services.map((service, i) => (
          <Service
            key={service.title}
            title={service.title}
            text={service.text}
            text2={service.text2}
            text3={service.text3}
            image={service.image}
          />
        ))}
      </div>
    </>
  );
};

export default Services;
