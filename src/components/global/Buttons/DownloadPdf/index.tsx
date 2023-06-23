import { ReactNode } from "react";
import * as S from "./styles";

type DownloadButtonProps = {
  children: ReactNode;
  href: string;
};

const DownloadButton: React.FC<DownloadButtonProps> = ({ children, href }) => {
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = href; // Caminho para o arquivo PDF
    downloadLink.download = "Curriculum_leonardo.pdf"; // Nome do arquivo a ser baixado

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return <S.Button onClick={handleDownload}>{children}</S.Button>;
};

export default DownloadButton;
