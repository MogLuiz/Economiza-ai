// Packages
import React, { useMemo, useState, useEffect } from "react";

// Utils
import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";

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

interface IData {
  id: number;
  title: string;
  amountFormatted: string;
  frequency: string;
  dataFormatted: string;
  tagColor: string;
}

const List: React.FC<IRouteParams> = ({ match }) => {
  // -------------------------------------------------
  // Props
  // -------------------------------------------------
  const { type } = match.params;

  // -------------------------------------------------
  // States
  // -------------------------------------------------
  const [data, setData] = useState<IData[]>([]);
  const [monthSelected, setMonthSelected] = useState<string>(
    String(new Date().getMonth() + 1)
  );
  const [yearSelected, setYearSelected] = useState<string>(
    String(new Date().getFullYear())
  );

  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------

  useEffect(() => {}, []);

  const title = useMemo(() => {
    return type === "entry-balance" ? "Entradas" : "Saídas";
  }, [type]);

  const lineColor = useMemo(() => {
    return type === "entry-balance" ? "#F7931B" : "#E44C4E";
  }, [type]);

  const listData = useMemo(() => {
    return type === "entry-balance" ? gains : expenses;
  }, [type]);

  useEffect(() => {
    async function getData() {
      const response = await listData.map((item) => {
        return {
          id: Math.random() * data.length,
          title: item.description,
          amountFormatted: formatCurrency(Number(item.amount)),
          frequency: item.frequency,
          dataFormatted: formatDate(item.date),
          tagColor: item.frequency === "recorrente" ? "#4E41F0" : "#E44C4E",
        };
      });

      setData(response);
    }
    getData();
  }, []);

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
        <SelectInput
          options={months}
          onChange={(e) => setMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={(e) => setYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
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
        {data.map((item) => (
          <HistoryFinanceCard
            key={item.id}
            tagColor={item.tagColor}
            title={item.title}
            subtitle={item.dataFormatted}
            amount={item.amountFormatted}
          />
        ))}
      </Content>
    </Container>
  );
};

export default List;
