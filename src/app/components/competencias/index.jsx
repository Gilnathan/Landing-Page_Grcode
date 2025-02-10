import styles from './Competencias.module.css';
import Image from "next/image";
import responsivo from "/public/icones/responsivo.png";
import webdesign from "/public/icones/web-design.png";
import esquema from "/public/icones/esquema.png";
import rapidez from "/public/icones/rapidez.png";
import suportetecnico from "/public/icones/suporte-tecnico.png";
import google from "/public/icones/google.png";
import personalizacao from "/public/icones/personalizacao.png";
import integracaodedados from "/public/icones/integracao-de-dados.png";


export default function Competencias() {
    return (
        <section   className={styles.containerCompetencias}> 
            <div className={styles.competencias}>
                <div className={styles.cards}>
                    <Image src={responsivo} alt="Responsivo" className={styles.icon} />
                    <h2>Sites Responsivos</h2>
                    <p>Sites que se ajustam perfeitamente a qualquer tela, seja de computador, celular ou tablet.</p>
                </div>
                <div className={styles.cards}>
                <Image src={webdesign} alt="webdesign" className={styles.icon} />
                    <h2>User Experience</h2>
                    <p>Estratégias de UX/UI Design voltadas para aprimorar a experiência do usuário, garantindo melhor usabilidade, navegação e conversão.</p>
                </div>
                <div className={styles.cards}>
                <Image src={esquema} alt="Esquema" className={styles.icon} />
                    <h2>Layout Personalizado</h2>
                    <p>O layout é único e criado por especialistas. Cada detalhe, das formas às cores, das imagens aos ícones, é cuidadosamente planejado para você.</p>
                </div>
                <div className={styles.cards}>
                <Image src={rapidez} alt="Rapidez" className={styles.icon} />
                    <h2>Páginas Rápidas</h2>
                    <p>Páginas com carregamento rápido para maximizar conversões, utilizando otimização e servidores em nuvem de alta performance.</p>
                </div>
                <div className={styles.cards}>
                <Image src={suportetecnico} alt="Suporte Técnico" className={styles.icon} />
                    <h2>Suporte Contínuo</h2>
                    <p>Tenha à disposição um time de especialistas para atender às suas necessidades, sempre que precisar e sob demanda.</p>
                </div>
                <div className={styles.cards}>
                <Image src={google} alt="Google" className={styles.icon} />
                    <h2>Pronto para o Google</h2>
                    <p>Desenvolvemos seu site seguindo todas as diretrizes do Google, garantindo que sua empresa se destaque na maior rede de pesquisa.</p>
                </div>
                <div className={styles.cards}>
                <Image src={personalizacao} alt="Personalização" className={styles.icon} />
                    <h2>Personalização Total</h2>
                    <p>Criamos sites totalmente personalizados, com layouts exclusivos para sua marca. Design moderno e profissional para transmitir confiança aos seus visitantes.</p>
                </div>
                <div className={styles.cards}>
                <Image src={integracaodedados} alt="Integração de Dados" className={styles.icon} />
                    <h2>Integração</h2>
                    <p>Realizamos integrações com os principais CRM’s, ERP’s, sistemas e plataformas de pagamento digital, automatizando seus processos e otimizando o tempo no fluxo de trabalho.</p>
                </div>
            </div>
            
        </section>
    )

}