"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import Zoom from "react-reveal/Zoom";

interface Props {
  title: string;
  text: string;
}

const Questions = ({ title, text }: Props) => {
  const [show, $show] = useState(false);
  const handleShow = () => {
    $show(!show);
  };
  return (
    <Zoom>
      <div
        className={`rounded-[35px]  ${
          show ? styles.accordionActive : styles.accordion
        } bg-[#EDF2F7] py-[26px] mobile:py-3 tablet:pl-8 mobile:pr-[14px] overflow-hidden pl-10 pr-5 mb-5`}
      >
        <div className='flex items-center justify-between'>
          <p className='text-black mobile:max-w-[250px] tablet:max-w-[500px] font-medium mobile:font-bold mobile:mr-2 mobile:leading-[1.2] text-[24px] tablet:text-[17px] mobile:text-[14px]'>
            {title}
          </p>
          <div
            className='mobile:pl-[4px] mobile:pt-[4px] mobile:w-[40px] mobile:h-[40px] cursor-pointer bg-[#005CE5] rounded-full '
            onClick={handleShow}
          >
            <Image
              src={`/assets/icons/${show ? "minus" : "plus"}.svg`}
              alt='plus'
              width={40}
              height={40}
              className='mobile:max-w-[32px]'
            />
          </div>
        </div>
        <p
          className={`text-[#171923] text-[20px] tablet:text-[14px] mt-[22px] mobile:mt-4 leading-[1.2] max-w-[1030px]`}
        >
          {text}
        </p>
      </div>
    </Zoom>
  );
};

export default Questions;
