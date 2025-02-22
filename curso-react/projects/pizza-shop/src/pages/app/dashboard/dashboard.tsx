import { Helmet } from "react-helmet-async";
import { MounthRevenueCard } from "./mouth-revenue-card";
import { MounthOrdersAmountCard } from "./mouth-orders-amount-card";
import { DayOrdersAmountCard } from "./day-orders-amount-card";
import { MounthCanceledOrdersAmountCard } from "./mouth-canceled-orders-amount-card";
import { RevenueChart } from "./revenue-chart";
import { PopularProductsChart } from "./popular-products-chart";

export default function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">dashboard</h1>
        <div className="grid grid-cols-4 gap-4">
          <MounthRevenueCard />
          <MounthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MounthCanceledOrdersAmountCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  );
}
