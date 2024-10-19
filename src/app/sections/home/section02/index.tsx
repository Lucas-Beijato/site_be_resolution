"use client";
import Image from "next/image";
import { Custom_Button } from "@/components/Button";
import Link from "next/link";

const CardFrame = ({
  icon,
  title,
  text,
  btnLink,
}: {
  icon: string;
  title: string;
  text: string;
  btnLink: string;
}) => {
  return (
    <div className="flex desktop:flex-row smartphone-p:flex-col border-2 bg-white border-ber-green rounded-3xl p-8 drop-shadow-md">
      <div className="desktop:w-3/12 smartphone-p:w-full">
        <Image src={icon} alt={"card icon"} width={"64"} height={"64"} />
      </div>
      <div className="desktop:w-7/12 space-y-4 smartphone-p:w-full">
        <h3 className="font-bold text-lg text-ber-green">{title}</h3>
        <p className="text-sm font-medium">{text}</p>
        <div>
          <Link href={btnLink}>
            <Custom_Button.Yellow>Saiba Mais</Custom_Button.Yellow>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Section02 = () => {
  return (
    <div id="porque_nosso_erp" className="bg-[url('/bg_section_02.png')] bg-contain bg-no-repeat flex justify-center items-center pt-24 pb-24">
      <div className="desktop:w-[1300px] grid smartphone-p:grid-cols-1 smartphone-p:grid-rows-6 desktop:grid-cols-3 desktop:grid-rows-2 gap-5 p-4">
        
        <div className="p-4 flex flex-col space-y-6">
          <Image
            src={"/sige_logo.png"}
            alt={"SIGE Logo"}
            width={"124"}
            height={"58"}
          />
          <h2 className="font-extrabold text-5xl">
            Porque <br /> nosso <span className="text-ber-green">ERP?</span>
          </h2>
        </div>

        <CardFrame
          icon={"/industry.png"}
          title={"INDÚSTRIA"}
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer."
          }
          btnLink={"#"}
        />
        <CardFrame
          icon={"/distribution.png"}
          title={"DISTRIBUIÇÃO"}
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer."
          }
          btnLink={"#"}
        />
        <CardFrame
          icon={"/services.png"}
          title={"SERVIÇOS"}
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer."
          }
          btnLink={"#"}
        />
        <CardFrame
          icon={"/mobility.png"}
          title={"MOBILIDADE"}
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer."
          }
          btnLink={"#"}
        />
        <CardFrame
          icon={"/business_intelligence.png"}
          title={"INTELIGÊNCIA DE NEGÓCIOS"}
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer."
          }
          btnLink={"#"}
        />
      </div>
    </div>
  );
};

export default Section02;
