// Packages
import React, { useMemo, useState } from "react";

// Components
import SelectInput from "../../components/SelectInput";
import ContentHeader from "../../components/ContentHeader";
import WalletBox from "../../components/WalletBox";

// Utils
import listOfMonths from "../../utils/months";

// Data
import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

// Style
import { Container, Content } from "./style";

const Dashboard: React.FC = () => {
  // -------------------------------------------------
  // States
  // -------------------------------------------------
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  );
  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  );

  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    [...expenses, ...gains].forEach((item) => {
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
  }, []);

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      };
    });
  }, []);

  // -------------------------------------------------
  // Functions
  // -------------------------------------------------

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month);
      setMonthSelected(parseMonth);
    } catch (error) {
      throw new Error("Invalid month value. Is accept - 0 - 24.");
    }
  };

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year);
      setYearSelected(parseYear);
    } catch (error) {
      throw new Error("Invalid year value. Is accept - 0 - 12");
    }
  };

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B">
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

      <Content>
        <WalletBox
          title="saldo"
          amount={150.0}
          footerlabel="Atualizado com base nas entradas e saídas"
          icon="dolar"
          color="#4E41F0"
        />
      </Content>
    </Container>
  );
};

export default Dashboard;
