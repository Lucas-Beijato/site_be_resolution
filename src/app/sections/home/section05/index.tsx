"use client";
import Image from "next/image";

const Section05 = () => {
  return (
    <div className="bg-ber-green py-24 flex flex-col space-y-24 justify-center items-center">
      <h2 className="font-extrabold text-[42px] text-center text-white">
        Porque a <span className="text-ber-gray">Be Resolution</span>
      </h2>

      <div className="w-[1300px] flex flex-col space-y-10">
        <div className="bg-white rounded-3xl px-7 py-10  flex flex-row space-x-4">
          <div className="w-1/12 ml-[-81px]">
            <Image
              src={"/implementation_section_05.png"}
              alt={"section image"}
              width={121}
              height={121}
            />
          </div>
          <div className="flex flex-col space-y-4 w-11/12">
            <h2 className="text-[32px] font-bold ">Implantação</h2>
            <p>
              Toda organização possui seus processos, suas metodologias e também
              suas particularidades, fazendo cada empresa única no mercado. A
              implantação de um software vai muito além de treinamentos e nós
              sabemos disto. O departamento de implantação da Be Resolution e
              Sistema é o setor que garante que o produto irá funcionar no
              cliente, 100% de acordo com seus processos e suas regras de
              negócio.
            </p>
            <p>
              Toda implantação é documentada, sendo que o principal documento é
              o Escopo de Projeto, que tem por função nortear os implantadores a
              conduzir o andamento dos trabalhos, visando desta forma maior
              objetividade e produtividade, além de posicionar o cliente, de
              forma transparente, em que fase da implantação o projeto se
              encontra.
            </p>
            <p>
              O técnico implantador é o profissional responsável por entender a
              dinâmica de trabalho, e pode inclusive sugerir novos controles ou
              até mesmo determinar a padronização de determinadas funções no
              cliente, para aumentar a produtividade e controles.
            </p>

            <div className="bg-ber-gray rounded-3xl p-7 flex flex-col text-white">
              <h3 className="font-bold  text-lg pb-4">
                Suas funções são basicamente:
              </h3>
              <p>
                <strong className="text-ber-green font-extrabold pr-2">
                  {">"}
                </strong>
                Parametrização do sistema conforme o projeto aprovado pela
                diretoria do cliente;
              </p>
              <p>
                <strong className="text-ber-green font-extrabold pr-2">
                  {">"}
                </strong>
                Seguir as normas de qualidade conforme a certificação MPS-BR;
              </p>
              <p>
                <strong className="text-ber-green font-extrabold pr-2">
                  {">"}
                </strong>
                Capacitar mediante treinamentos os usuários do sistema;
              </p>
              <p>
                <strong className="text-ber-green font-extrabold pr-2">
                  {">"}
                </strong>
                Testar, validar e efetuar a entrega do produto.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl px-7 py-10  flex flex-row space-x-4">
          <div className="w-1/12 ml-[-81px]">
            <Image
              src={"/support_section_05.png"}
              alt={"section image"}
              width={121}
              height={121}
            />
          </div>
          <div className="flex flex-col space-y-4 w-11/12">
            <h2 className="text-[32px] font-bold ">Suporte</h2>
            <p>
              A tecnologia caminha a passos largos e se atualiza
              vertiginosamente, novos controles são disponibilizados, novas
              necessidades surgem, funcionários se renovam constantemente, e o
              que seria do cliente se não houvesse um departamento dedicado a
              dar sempre todo aporte de atendimento necessário? Pensando nisso,
              a Be Resolution procura sempre fortalecer o departamento de
              suporte para garantir uma assistência competente, visando não só
              deixar o cliente satisfeito, mas sim superar suas expectativas.
            </p>
            <p>
              Todo atendimento é registrado em nosso sistema de chamadas, o que
              garante o acompanhamento da solicitação e tem prazos pré-definidos
              para a resolução, de acordo com normas definidas pela
              certificação.
            </p>
            <p>
              Nosso suporte também é certificado pelo MPS-BR com 100% de
              aprovação, garantindo qualidade nos seus atendimentos.
            </p>

            <div className="bg-ber-gray rounded-3xl p-7 flex flex-col text-white">
              <h3 className="font-bold  text-lg pb-4">
                Nossos serviços de suporte contam com:
              </h3>
              <p>
                <strong className="text-ber-green font-extrabold pr-2">
                  {">"}
                </strong>
                Assistência técnica telefônica;
              </p>
              <p>
                <strong className="text-ber-green font-extrabold pr-2">
                  {">"}
                </strong>
                Assistência técnica On-Line;
              </p>
              <p>
                <strong className="text-ber-green font-extrabold pr-2">
                  {">"}
                </strong>
                Pequenas implementações;
              </p>
              <p>
                <strong className="text-ber-green font-extrabold pr-2">
                  {">"}
                </strong>
                Geração de novos relatórios;
              </p>
              <p>
                <strong className="text-ber-green font-extrabold pr-2">
                  {">"}
                </strong>
                Contratos exclusivos de atendimento;
              </p>
              <p>
                <strong className="text-ber-green font-extrabold pr-2">
                  {">"}
                </strong>
                Treinamentos.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl px-7 py-10  flex flex-row space-x-4">
          <div className="w-1/12 ml-[-81px]">
            <Image
              src={"/development_section_05.png"}
              alt={"section image"}
              width={121}
              height={121}
            />
          </div>
          <div className="flex flex-col space-y-4 w-11/12">
            <h2 className="text-[32px] font-bold ">Desenvolvimento</h2>
            <p>
              A equipe que garante a evolução tecnológica de nossas ferramentas.
              Sabemos que os controles e processos de nossos clientes não são
              estáticos, por isso nossos produtos estão em constante evolução
              para atender novas metodologias de gestão. Pensando sempre em
              inovar, diferentes tecnologias são adotadas observando as
              tendências de mercado, garantindo assim que sua empresa esteja
              sempre à frente.
            </p>
            <h3 className="text-[20px] font-bold">
              CERTIFICAÇÃO E METODOLOGIA
            </h3>
            <p>
              Todo processo produtivo é certificado com o selo MPS-BR (Melhoria
              de Processo do Software Brasileiro). Isto garante ferramentas
              confiáveis, pois por meio de metodologias específicas de controle
              conseguimos atingir todos os padrões de qualidade exigidos.
            </p>

            <div className="bg-ber-gray rounded-3xl p-7 flex flex-col text-white">
              <h3 className="font-bold  text-lg pb-4">
              Toda necessária evolução é documentada, após estimado o tempo de execução, vai para uma fila aguardar classificação de prioridade, essa classificação é feita da seguinte maneira:
              </h3>
              <p>
                <strong className="text-ber-green font-extrabold pr-2">
                  {">"}
                </strong>
                Correções;
              </p>
              <p>
                <strong className="text-ber-green font-extrabold pr-2">
                  {">"}
                </strong>
                Exigência da legislação;
              </p>
              <p>
                <strong className="text-ber-green font-extrabold pr-2">
                  {">"}
                </strong>
                Projetos de Customização pagos;
              </p>
              <p>
                <strong className="text-ber-green font-extrabold pr-2">
                  {">"}
                </strong>
                Melhorias naturais;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section05;
