// Packages
import React, { useMemo, useState } from "react";

// Components
import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";

// Data
import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

// Styles
import { Container, Content, Filters } from "./style";

// Types
interface IRouteParams {
  match: {
    params: {
      type: string;
    };
  };
}

const List: React.FC<IRouteParams> = ({ match }) => {
  // -------------------------------------------------
  // States
  // -------------------------------------------------

  // -------------------------------------------------
  // Props
  // -------------------------------------------------
  const { type } = match.params;

  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------
  const title = useMemo(() => {
    return type === "entry-balance" ? "Entradas" : "Saídas";
  }, [type]);

  const lineColor = useMemo(() => {
    return type === "entry-balance" ? "#F7931B" : "#E44C4E";
  }, [type]);

  // -------------------------------------------------
  // Data
  // -------------------------------------------------
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

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <Container>
      <ContentHeader title={title} lineColor={lineColor}>
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <Filters>
        <button type="button" className="tag-filter recurrent">
          Recorrentes
        </button>

        <button type="button" className="tag-filter eventual">
          Eventuais
        </button>
      </Filters>

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
