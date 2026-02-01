import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Cell,
} from "recharts";
import {
  BillsBlock,
  createPieGradient,
  HeaderDashboard,
  LastActivityBlock,
  StatsBlock,
} from "@/modules/dashboard";
import "./style/dashboardPage.css";

const data = [
  { name: "Доходи", value: 45, icon: "💰" },
  { name: "Витрати", value: 30, icon: "💸" },
  { name: "Заощадження", value: 15, icon: "🏦" },
  { name: "Інше", value: 10, icon: "📊" },
  { name: "Доходи", value: 45, icon: "💰" },
  { name: "Витрати", value: 30, icon: "💸" },
  { name: "Заощадження", value: 15, icon: "🏦" },
  { name: "Інше", value: 10, icon: "📊" },
];

const COLORS = ["#10b981", "#3b82f6", "#f59e0b", "#8b5cf6"];

// Кастомна підказка
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <div className="custom-tooltip">
        <p className="tooltip-title">
          {data.payload.icon} {data.name}
        </p>
        <p className="tooltip-value" style={{ color: data.payload.fill }}>
          {data.value}%
        </p>
      </div>
    );
  }
  return null;
};

// Кастомна легенда
const CustomLegend = ({ payload }: any) => {
  return (
    <div className="custom-legend">
      {payload.map((entry: any, index: number) => (
        <div key={index} className="legend-item">
          <div
            className="legend-dot"
            style={{ backgroundColor: entry.color }}
          />
          <span className="legend-text">
            {entry.payload.icon} {entry.value}
          </span>
        </div>
      ))}
    </div>
  );
};

const DashboardPage = () => {
  return (
    <div className="wrapper-Dashboard">
      <HeaderDashboard />
      <StatsBlock />

      <div className="wrapper-graphics">
        <div className="chart-card">
          <h3 className="chart-title">Фінансовий огляд</h3>
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius="55%"
                outerRadius="85%"
                paddingAngle={3}
                shape={createPieGradient(COLORS, 3)}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend content={<CustomLegend />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <LastActivityBlock />
        <BillsBlock />
      </div>
    </div>
  );
};

export default DashboardPage;
