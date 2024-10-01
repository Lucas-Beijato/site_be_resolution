"use client";
import { Custom_Button } from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

const CardSection03 = ({
  imgLink,
  title,
  text,
  btnLink,
}: {
  imgLink: string;
  title: string;
  text: string;
  btnLink: string;
}) => {
  return (
    <div className="flex flex-col space-y-4">
      <Image src={imgLink} alt={""} width={"344"} height={"164"} />
      <h2 className="font-bold text-[28px] text-white">{title}</h2>
      <p className="text-white text-[18px]">{text}</p>
      <Link href={btnLink}>
        <Custom_Button.Gray>Saiba mais</Custom_Button.Gray>
      </Link>
    </div>
  );
};

const Section03 = () => {
  return (
    <div className="w-full bg-ber-green">
      <div className="w-full flex flex-col justify-center items-center bg-[url('/bg_section_03.png')] bg-contain bg-no-repeat pt-24 pb-24">
        <div className="w-[1300px] flex flex-col space-y-10">
          <h1 className="font-bold text-[42px] text-center text-white">
            Atividades
          </h1>
          <div className="flex flex-row space-x-5 justify-center items-center">
            <CardSection03
              imgLink={"/industry_img_section_03.png"}
              title={"Indústria"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus nunc ac neque fermentum accumsan. In sit amet sollicitudin metus. Phasellus sit ametcongue ipsum."
              }
              btnLink={""}
            />
            <CardSection03
              imgLink={"/distribuition_img_section_03.png"}
              title={"Distribuição"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus nunc ac neque fermentum accumsan. In sit amet sollicitudin metus. Phasellus sit ametcongue ipsum."
              }
              btnLink={""}
            />
            <CardSection03
              imgLink={"/services_img_section_03.png"}
              title={"Serviços"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus nunc ac neque fermentum accumsan. In sit amet sollicitudin metus. Phasellus sit ametcongue ipsum."
              }
              btnLink={""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section03;
