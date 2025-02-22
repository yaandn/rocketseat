import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import colors from "tailwindcss/colors";

import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
} from "recharts";

const data = [
  { date: "10/12", revenue: 1200 },
  { date: "11/12", revenue: 880 },
  { date: "12/12", revenue: 400 },
  { date: "13/12", revenue: 900 },
  { date: "14/12", revenue: 2300 },
  { date: "15/12", revenue: 800 },
  { date: "16/12", revenue: 743 },
];

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-betweenr pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart style={{ fontSize: 12 }} data={data}>
            <XAxis dataKey="date" axisLine={false} tickLine={false} dy={16} />
            <YAxis
              stroke="#888"
              width={80}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value: number) =>
                value.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })
              }
            />
            <Line
              type={"linear"}
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors.violet[500]}
            />

            <CartesianGrid vertical={false} className="stroke-muted" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
