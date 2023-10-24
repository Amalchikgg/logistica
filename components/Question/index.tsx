"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import Questions from "../Questions";

const Question = () => {
  const { t, i18n } = useTranslation();
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
  return (
    <>
      <p className='uppercase text-[#005CE5] mobile:text-[40px] mobile:text-center mobile:mb-[28px] mb-[47px] font-[900] text-[81px] tablet:text-[64px] tablet:leading-[1.1]'>
        {i18n.language === "en"
          ? "Frequently Asked Questions"
          : "ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ"}
      </p>
      {questions.map(({ title, text }) => (
        <Questions key={title} text={text} title={title} />
      ))}
    </>
  );
};

export default Question;
