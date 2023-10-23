"use client";
import Service from "@/components/Service";
import Question from "@/components/Questions";
import Header from "@/components/Header";
import Section from "@/components/Section";
import About from "@/components/About";
import Form from "@/components/Form";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const questions = [
    {
      title: t("questionTitle1"),
      text: t("questionText1"),
    },
    {
      title: t("questionTitle2"),
      text: t("questionText2"),
    },
    {
      title: t("questionTitle3"),
      text: t("questionText3"),
    },
    {
      title: t("questionTitle4"),
      text: t("questionText4"),
    },
  ];
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
    <div className='max-w-[1330px] w-full m-[0px_auto] px-[13px] pt-[54px]'>
      <Header />
      <main>
        <Section />
        <About />

        <section id='services'>
          <p className='text-[#171923] text-[96px] mobile:text-[40px] mobile:text-center tablet:text-[64px] font-[900] mb-[46px] tablet:mb-[41px]'>
            {t("ourServices")}
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
        </section>
        <section className='mt-10px' id='FAQ'>
          <p className='uppercase text-[#005CE5] mobile:text-[40px] mobile:text-center mobile:mb-[18px] mb-[47px] font-[900] text-[81px] tablet:text-[64px] tablet:leading-[1.1]'>
            {t("questions")}
          </p>
          {questions.map(({ title, text }) => (
            <Question key={title} text={text} title={title} />
          ))}
        </section>
        <Form />
        <Footer />
      </main>
    </div>
  );
}
