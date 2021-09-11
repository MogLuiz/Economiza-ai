import React from "react";
import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";
import { Container, Content } from "./style";

const List: React.FC = () => {
  const months = [
    { value: 9, label: "Setembro" },
    { value: 8, label: "Agosto" },
    { value: 7, label: "Julho" },
  ];

  const years = [
    { value: 2021, label: 2021 },
    { value: 2020, label: 2020 },
    { value: 2019, label: 2019 },
  ];

  return (
    <Container>
      <ContentHeader title="Saidas" lineColor="#E44C4E">
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <Content>
        <HistoryFinanceCard
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="11/09/2021"
          amount="R$ 130,00"
        />
      </Content>
    </Container>
  );
};

export default List;
