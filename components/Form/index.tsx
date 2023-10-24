"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Zoom from "react-reveal/Zoom";
import { useForm, ValidationError } from "@formspree/react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const { t } = useTranslation();
  const form = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_pqd306j",
          "template_48i616c",
          form.current,
          "WtqcTZIikxV6CV2Qj"
        )
        .then(
          (result) => {
            console.log(result.text);
            e.target.reset();
            alert(t("formSubmit"));
          },
          (error) => {
            console.log(error.text);
            console.log("error");
            alert(error.text);
          }
        );
    }
  };

  return (
    <Zoom>
      <section
        id='form'
        className='bg-[#005CE5] mobile:mb-6 rounded-[35px] pt-[35px] pl-[58px] pr-[73px] tablet:px-7 mobile:px-5 mt-16 mb-[79px] tablet:mb-[59px] '
      >
        <p className='text-white font-[900] mobile:text-[20px] text-[48px] tablet:mb-4 leading-[1.1] max-w-[860px] tablet:max-w-full tablet:text-[36px]'>
          {t("formTitle")}
        </p>
        <p className='text-[20px] mb-[38px] hidden mobile:text-[14px] tablet:block text-white font-[500] uppercase max-w-[550px] mt-[25px] leading-[1.1]'>
          {t("formText")}
        </p>
        <div className='flex tablet:flex-col-reverse tablet:justify-center tablet:items-center'>
          <div className='mr-6 tablet:mr-0'>
            <p className='text-[32px] tablet:hidden text-white font-[500] uppercase max-w-[550px] mt-[25px] leading-[1.1]'>
              {t("formText")}
            </p>
            <Image
              src={"/assets/icons/form.svg"}
              alt='form'
              width={464}
              height={307}
              className='mobile:max-w-[232px] mobile:max-h-[153px]'
            />
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className='w-[587px] tablet:w-full -mt-3 tablet:-mt-0'
          >
            <input
              id='name'
              name='user_name'
              type='text'
              placeholder={t("name")}
              className='h-[70px] mb-[10px] mobile:text-[12px] mobile:h-[45px] w-full bg-transparent outline-none border border-white text-white font-[500] text-[20px] rounded-[12px] pl-[29px] placeholder:text-white'
            />

            <input
              id='phone'
              name='user_phonenumber'
              type='tel'
              placeholder={t("phoneNumber")}
              className='h-[70px] mb-[10px] w-full mobile:text-[12px] mobile:h-[45px] bg-transparent outline-none border border-white text-white font-[500] text-[20px] rounded-[12px] pl-[29px] placeholder:text-white'
            />

            <input
              type='email'
              id='email'
              name='user_email'
              placeholder='E-mail'
              className='h-[70px] mb-[35px] mobile:mb-6 w-full mobile:text-[12px] mobile:h-[45px] bg-transparent outline-none border border-white text-white font-[500] text-[20px] rounded-[12px] pl-[29px] placeholder:text-white'
            />

            <button
              type='submit'
              className='w-full mobile:h-[45px] h-[70px] text-start rounded-[12px] bg-white pl-7 text-[20px] font-[900] text-[#005CE5]'
            >
              {t("leaveArequest")}
            </button>
          </form>
        </div>
      </section>
    </Zoom>
  );
};

export default Form;
