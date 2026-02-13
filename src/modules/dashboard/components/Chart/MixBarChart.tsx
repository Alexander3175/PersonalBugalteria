import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  type LegendPayload,
  ResponsiveContainer,
} from "recharts";
import { dataMonth } from "../../const/dataMonth";

const ExpensesChart = () => {
  const [focusedDataKey, setFocusedDataKey] = useState<string | null>(null);
  const [locked, setLocked] = useState<boolean>(false);

  const onLegendMouseEnter = (payload: LegendPayload) => {
    if (!locked) {
      setFocusedDataKey(String(payload.dataKey));
    }
  };

  const onLegendMouseOut = () => {
    if (!locked) {
      setFocusedDataKey(null);
    }
  };

  const onLegendClick = (payload: LegendPayload) => {
    if (focusedDataKey === String(payload.dataKey)) {
      if (locked) {
        setFocusedDataKey(null);
        setLocked(false);
      } else {
        setLocked(true);
      }
    } else {
      setFocusedDataKey(String(payload.dataKey));
      setLocked(true);
    }
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const total = payload.reduce(
        (sum: number, entry: any) => sum + entry.value,
        0,
      );
      return (
        <div className="custom-tooltip">
          <p className="tooltip-title">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p
              key={index}
              style={{ color: entry.color }}
              className="tooltip-item"
            >
              {entry.name}: {entry.value.toLocaleString("uk-UA")} ₴
            </p>
          ))}
          <p className="tooltip-total">
            Всього: {total.toLocaleString("uk-UA")} ₴
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <h3 className="chart-title">Витрати по картках</h3>
      <p className="chart-subtitle">
        Помісячна статистика за останні 6 місяців
      </p>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={dataMonth}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="month"
            tick={{ fill: "#666", fontSize: 14 }}
            axisLine={{ stroke: "#e0e0e0" }}
          />
          <YAxis
            tick={{ fill: "#666", fontSize: 14 }}
            axisLine={{ stroke: "#e0e0e0" }}
            tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
          />
          <Legend
            onMouseEnter={onLegendMouseEnter}
            onMouseOut={onLegendMouseOut}
            onClick={onLegendClick}
            wrapperStyle={{ cursor: "pointer", paddingTop: "20px" }}
          />
          <Bar
            dataKey="monobank"
            name="Monobank"
            stackId="a"
            fill={
              focusedDataKey == null || focusedDataKey === "monobank"
                ? "#000000"
                : "#e0e0e0"
            }
            radius={[0, 0, 0, 0]}
          />
          <Bar
            dataKey="privatbank"
            name="ПриватБанк"
            stackId="a"
            fill={
              focusedDataKey == null || focusedDataKey === "privatbank"
                ? "#4CAF50"
                : "#e0e0e0"
            }
            radius={[0, 0, 0, 0]}
          />
          <Bar
            dataKey="cashback"
            name="Cashback картка"
            stackId="a"
            fill={
              focusedDataKey == null || focusedDataKey === "cashback"
                ? "#FF9800"
                : "#e0e0e0"
            }
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default ExpensesChart;
