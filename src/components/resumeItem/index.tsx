import * as S from "./styles";

export default function ResumeItem({
  title,
  Icon,
  value,
}: {
  title: string;
  Icon: any;
  value: any;
}) {
  return (
    <S.Container>
      <S.header>
        <S.HeaderTitle>{title}</S.HeaderTitle>
        <Icon />
      </S.header>
      <S.Total>{value}</S.Total>
    </S.Container>
  );
}
