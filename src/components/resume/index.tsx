import {
  FaDollarSign,
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleUp,
} from "react-icons/fa";
import ResumeItem from "../resumeItem";
import * as S from "./styles";

export const Resume = () => {
  return (
    <S.Container>
      <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={10000} />
      <ResumeItem title="saídas" Icon={FaRegArrowAltCircleDown} value={10000} />
      <ResumeItem title="total" Icon={FaDollarSign} value={1000} />
    </S.Container>
  );
};
