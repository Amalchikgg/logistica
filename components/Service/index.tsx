"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import LinkScroll from "../Link";
import ScrollAnimation from "react-animate-on-scroll";
import Zoom from "react-reveal/Zoom";
import { useTranslation } from "react-i18next";

interface Props {
  image: string;
  title: string;
  text: string;
  text2: string;
  text3: string;
}

const Service = ({ image, title, text, text2, text3 }: Props) => {
  const [show, $show] = useState(false);
  const { t } = useTranslation();
  const handleShow = () => {
    $show(!show);
  };
  return (
    <Zoom>
      <div
        className={`w-full max-w-[300px] tablet:max-w-[290px] ${
          show ? styles.serviceActive : styles.service
        } tablet:mb-[52px]`}
      >
        <div className='relative'>
          <Image
            src={image}
            alt='service'
            width={298}
            height={229}
            className=' mb-5'
          />
          <div
            onClick={handleShow}
            className={`h-[52px] w-[52px] ${
              show ? styles.bgArrowActive : styles.bgArrow
            } cursor-pointer absolute right-0 top-[178px] tablet:top-[170px] pl-[16px] pt-[16px] rounded-full`}
          >
            <svg
              width='19'
              height='19'
              viewBox='0 0 19 19'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className={`${
                show ? styles.rotateArrowActive : styles.rotateArrow
              }`}
            >
              <path
                d='M18.1424 2.38994C18.1424 1.56151 17.4708 0.88994 16.6424 0.889941L3.14241 0.88994C2.31398 0.88994 1.64241 1.56151 1.64241 2.38994C1.64241 3.21837 2.31398 3.88994 3.14241 3.88994H15.1424V15.8899C15.1424 16.7184 15.814 17.3899 16.6424 17.3899C17.4708 17.3899 18.1424 16.7184 18.1424 15.8899L18.1424 2.38994ZM2.14672 19.0069L17.7031 3.4506L15.5817 1.32928L0.0253994 16.8856L2.14672 19.0069Z'
                fill={show ? "white" : "#005CE5"}
              />
            </svg>
          </div>
        </div>
        <div className='flex flex-col justify-between h-[500px]'>
          <p className='text-[#171923] uppercase text-[32px] font-[900]'>
            {title}
          </p>
          <div className={`${show ? styles.opacityActive : styles.opacity}`}>
            <p className='text-[#171923] leading-[1.1] text-[20px] mb-[10px]'>
              {text}
            </p>
            <p className='text-[#171923] leading-[1.1] text-[20px] mb-[10px]'>
              {text2}
            </p>
            <p className='text-[#171923] leading-[1.1] text-[20px] mb-[21px]'>
              {text3}
            </p>
          </div>
          <button
            className={`bg-[#E5F6FF] h-[46px] w-full ${
              show ? styles.opacityActive : styles.opacity
            } rounded-[12px] text-[#005CE5] font-bold`}
          >
            <LinkScroll className='' title={t("leaveArequest")} link='form' />
          </button>
        </div>
      </div>
    </Zoom>
  );
};

export default Service;
