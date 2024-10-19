"use client";
import { Custom_Button } from "@/components/Button";
import Writer from "./writer";
import Image from "next/image";
import Link from "next/link";

const Section01 = () => {
  return (
    <div id="first" className="flex flex-col space-y-10 smartphone-p:h-[550px] smartphone-p:p-4 desktop:p-0 justify-center items-center w-full desktop:h-[703px] bg-[url('/home_banner.png')] bg-no-repeat bg-cover"
    >
      <Writer />

      <h2 className="font-bold smartphone-p:text-lg desktop:text-[24px] text-[24px] text-white text-center">
        Somos um time de profissionais apaixonados por <br /> tecnologia e
        aprimoramento de sistemas.
      </h2>

      <Custom_Button.Green>CONHEÇA NOSSAS ATIVIDADES</Custom_Button.Green>
      
      <Link href={"/#porque_nosso_erp"}>
        <div className="flex flex-col justify-center items-center space-y-3">
          <h2 className="font-bold text-[18px] text-white text-center">
            VER MAIS
          </h2>
          <Image
            src={"/down_arrow.png"}
            width={30}
            height={30}
            alt={"Seta para baixo"}
          ></Image>
        </div>
      </Link>
    </div>

    
  );
};

export default Section01;
