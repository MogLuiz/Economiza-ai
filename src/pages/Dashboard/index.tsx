// Packages
import React, { useMemo, useState } from "react";

// Components
import SelectInput from "../../components/SelectInput";
import ContentHeader from "../../components/ContentHeader";
import WalletBox from "../../components/WalletBox";
import MessageBox from "../../components/MessageBox";

// Utils
import listOfMonths from "../../utils/months";

// Assets
import happyImg from "../../assets/happy.svg";
import sadImg from "../../assets/sad.svg";

// Data
import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

// Styles
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

  const totalExpenses = useMemo(() => {
    let total: number = 0;

    expenses.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch {
          throw new Error("Invalid amount! Amount must be number.");
        }
      }
    });

    return total;
  }, [monthSelected, yearSelected]);

  const totalGains = useMemo(() => {
    let total: number = 0;

    gains.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch {
          throw new Error("Invalid amount! Amount must be number.");
        }
      }
    });

    return total;
  }, [monthSelected, yearSelected]);

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses;
  }, [totalExpenses, totalGains]);

  // -------------------------------------------------
  // Functions
  // -------------------------------------------------

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month);
      setMonthSelected(parseMonth);
    } catch {
      throw new Error("Invalid month value. Is accept - 0 - 24.");
    }
  };

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year);
      setYearSelected(parseYear);
    } catch {
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
          amount={totalBalance}
          footerlabel="Atualizado com base nas entradas e saídas"
          icon="dolar"
          color="#4E41F0"
        />
        <WalletBox
          title="entradas"
          amount={totalGains}
          footerlabel="Atualizado com base nas entradas e saídas"
          icon="arrowUp"
          color="#F7931B"
        />
        <WalletBox
          title="saídas"
          amount={totalExpenses}
          footerlabel="Atualizado com base nas entradas e saídas"
          icon="arrowDown"
          color="#E44C4E"
        />

        <MessageBox
          title="Muito bem!"
          description="Sua carteira está positiva"
          footerText="Continue assim. Considere investir seu saldo."
          icon={happyImg}
        />
      </Content>
    </Container>
  );
};

export default Dashboard;
