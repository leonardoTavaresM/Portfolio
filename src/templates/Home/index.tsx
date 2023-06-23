import Link from "next/link";
import * as S from "./styles";

import {
  CurriculumIcon,
  GithubIcon,
  LinkedinIcon,
} from "@/components/global/Icons";
import DownloadButton from "@/components/global/Buttons/DownloadPdf";

const Home = () => {
  return (
    <S.Section>
      <S.Wrapper>
        <S.Name>Oi👋🏻 eu sou o Leonardo Tavares</S.Name>
        <S.StackWrapper>
          <S.Title>
            React <br />
            developer
          </S.Title>
          <S.ButtonsWrapper>
            <Link href="https://www.linkedin.com/in/leonardo-tavares-malta-de-s%C3%A1-5b3994120/">
              <LinkedinIcon />
            </Link>
            <Link href="https://github.com/leonardoTavaresM">
              <GithubIcon />
            </Link>
            <DownloadButton href="/files/testePdf.pdf">
              <CurriculumIcon />
            </DownloadButton>
          </S.ButtonsWrapper>
        </S.StackWrapper>

        <S.Desc>
          Tenho 25 anos, sou desenvolvedor front-end com 1 ano e meio de
          experiencia.
        </S.Desc>
      </S.Wrapper>
    </S.Section>
  );
};

export default Home;
