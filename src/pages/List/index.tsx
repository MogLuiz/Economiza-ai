// Packages
import React, { useMemo, useState, useEffect } from "react";
import { uuid } from "uuidv4";

// Utils
import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";
import listOfMonths from "../../utils/months";

// Components
import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";

// Data
import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

// Types
import { IData, IRouteParams } from "./types";

// Styles
import { Container, Content, Filters } from "./style";

const List: React.FC<IRouteParams> = ({ match }) => {
  // -------------------------------------------------
  // Route Params
  // -------------------------------------------------
  const movimentType = match.params.type;

  // -------------------------------------------------
  // States
  // -------------------------------------------------
  const [data, setData] = useState<IData[]>([]);
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  );
  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  );
  const [frequencyFilterSelected, setFrequencyFilterSelected] = useState([
    "recorrente",
    "eventual",
  ]);

  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------

  const pageData = useMemo(() => {
    return movimentType === "entry-balance"
      ? {
          title: "Entradas",
          lineColor: "#F7931B",
          data: gains,
        }
      : {
          title: "Saídas",
          lineColor: "#E44C4E",
          data: expenses,
        };
  }, [movimentType]);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    pageData.data.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year,
      };
    });
  }, [pageData.data]);

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      };
    });
  }, []);

  useEffect(() => {
    async function getData() {
      const filteredDate = await pageData.data.filter((item) => {
        const date = new Date(item.date);
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return (
          month === monthSelected &&
          year === yearSelected &&
          frequencyFilterSelected.includes(item.frequency)
        );
      });

      const formattedDate = filteredDate.map((item) => {
        return {
          id: uuid(),
          title: item.description,
          amountFormatted: formatCurrency(Number(item.amount)),
          frequency: item.frequency,
          dateFormatted: formatDate(item.date),
          tagColor: item.frequency === "recorrente" ? "#4E41F0" : "#E44C4E",
        };
      });
      setData(formattedDate);
    }
    getData();
  }, [
    data.length,
    pageData.data,
    monthSelected,
    frequencyFilterSelected,
    yearSelected,
  ]);

  // -------------------------------------------------
  // Functions
  // -------------------------------------------------

  const handleFrequencyClick = (frequency: string) => {
    const alreadySelected = frequencyFilterSelected.findIndex(
      (item) => item === frequency
    );

    if (alreadySelected >= 0) {
      const filtered = frequencyFilterSelected.filter(
        (item) => item !== frequency
      );
      setFrequencyFilterSelected(filtered);
    } else {
      setFrequencyFilterSelected((prev) => [...prev, frequency]);
    }
  };

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month);
      setMonthSelected(parseMonth);
    } catch (error) {
      throw new Error("Invalid month value. Is accept - 0 - 24.");
    }
  };

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <Container>
      <ContentHeader title={pageData.title} lineColor={pageData.lineColor}>
        <SelectInput
          options={months}
          onChange={(e) => handleMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={(e) => handleYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>

      <Filters>
        <button
          type="button"
          className={`tag-filter recurrent
          ${frequencyFilterSelected.includes("recorrente") && "tag-actived"}`}
          onClick={() => handleFrequencyClick("recorrente")}
        >
          Recorrentes
        </button>

        <button
          type="button"
          className={`tag-filter eventual
          ${frequencyFilterSelected.includes("eventual") && "tag-actived"}`}
          onClick={() => handleFrequencyClick("eventual")}
        >
          Eventuais
        </button>
      </Filters>

      <Content>
        {data.map((item) => (
          <HistoryFinanceCard
            key={item.id}
            tagColor={item.tagColor}
            title={item.title}
            subtitle={item.dateFormatted}
            amount={item.amountFormatted}
          />
        ))}
      </Content>
    </Container>
  );
};

export default List;
