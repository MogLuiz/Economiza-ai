import React from "react";
import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";
import { Container, Content } from "./style";

const List: React.FC = () => {
  const options = [
    { value: "Luiz", label: "Luiz" },
    { value: "Bruno", label: "Bruno" },
    { value: "Lucas", label: "Lucas" },
  ];
  return (
    <Container>
      <ContentHeader title="Saidas" lineColor="#E44C4E">
        <SelectInput options={options} />
      </ContentHeader>

      <Content>
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="11/09/2021"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="11/09/2021"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="11/09/2021"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="11/09/2021"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="11/09/2021"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="11/09/2021"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="11/09/2021"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="11/09/2021"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="11/09/2021"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
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
