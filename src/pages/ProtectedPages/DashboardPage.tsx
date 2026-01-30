import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import {
  BillsBlock,
  createPieGradient,
  HeaderDashboard,
  LastActivityBlock,
  StatsBlock,
} from "@/modules/dashboard";

const data = [
  { name: "A", value: 400 },
  { name: "B", value: 300 },
  { name: "C", value: 200 },
  { name: "D", value: 100 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const DashboardPage = () => {
  return (
    <div className="wrapper-Dashboard">
      <HeaderDashboard />
      <StatsBlock />

      <div className="wrapper-graphics">
        <ResponsiveContainer width={300} height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius="30%"
              shape={createPieGradient(COLORS, 6)}
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <LastActivityBlock />
        <BillsBlock />
      </div>
    </div>
  );
};

export default DashboardPage;
