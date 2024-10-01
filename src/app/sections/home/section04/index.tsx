"use client"
import { Custom_Button } from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

const CardsSection04 = ({ imgLink, numberToView, text }: { imgLink: string, numberToView: string, text: string }) => {
    return (
        <div className="flex flex-col space-y-1 justify-center items-center text-white">
            <Image src={imgLink} alt={""} width={120} height={120}/>
            <h2 className="font-bold text-[50px]">{numberToView}</h2>
            <h3 className="font-bold text-[18px]">{text}</h3>
        </div>
    )
}

const Section04 = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-ber-gray pt-24 pb-24">
      <div className="w-[1300px] flex flex-col justify-center items-center space-y-10">
        <h2 className="font-extrabold text-[42px] text-white">
          Conheça a <span className="text-ber-green">Be Resolution</span>
        </h2>
        <div className="flex flex-col justify-center items-center space-y-4 text-white text-[18px]">
          <p>
            Nosso negócio é sistema, somos engenheiros de software, analista de
            sistema, programador, administrador de sistema, contador, sim, somos
            um time que leva na veia tecnologia, tudo que está relacionado a
            melhoria de sistema, desenvolvimento de novas rotinas que leve nosso
            produto a ser maior e melhor a cada dia, esse é o nosso DNA.
          </p>
          <p>
            Essa é a nossa essência, e não é "sisteminha" como comumente se fala
            por aí, é um "sistemão" trata-se de um ERP carinhosamente batizado
            de SIGE, parrudo, vai muito além de uma simples necessidade fiscal
            de emitir nota e controlar o contas a pagar e receber. Há uma
            história de crescimento e aprendizado por trás da Be Resolution, uma
            jornada iniciada a mais de 30 anos, sempre obstinados.
          </p>
          <p>
            Somos do noroeste do paraná, estamos sediados em Maringá, nossa
            estrutura conta com 3 grandes departamentos, desenvolvimento,
            implantação e suporte, as três divisões da empresa que nos permite
            melhorar continuamente nosso produto, garantir que nosso sistema
            tenha abrangência e aderência total ao negócio de cada cliente, e
            finalmente nosso suporte que esta sempre a postos para toda e
            qualquer eventualidade que ocorra durante a usabilidade do sistema,
            essa equipe nos permite levar nosso produto a mais de 13 estados e
            estarmos presentes em mais de 250 empresas.
          </p>
        </div>

        <Link href={""} >
            <Custom_Button.Green>Conheça Mais</Custom_Button.Green>
        </Link>

        <div className="flex flex-row space-x-36">
            <CardsSection04 imgLink={"/img_01_section_04.png"} numberToView={"29"} text={"ANOS DE EXPERIÊNCIA"}/>
            <CardsSection04 imgLink={"/img_02_section_04.png"} numberToView={"+750"} text={"CLIENTES"}/>
            <CardsSection04 imgLink={"/img_03_section_04.png"} numberToView={"25"} text={"COLABORADORES"}/>
            <CardsSection04 imgLink={"/img_04_section_04.png"} numberToView={"100%"} text={"PRESENÇA NACIONAL"}/>
        </div>

      </div>
    </div>
  );
};

export default Section04;
