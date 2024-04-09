import React from "react";
import SalesCard from "../components/SalesCard";
import CustomersAnalysisCard from "../components/CustomersAnalysisCard";
import OrdersAnalysisCard from "../components/OrdersAnalysisCard";
import MarketingAnalysis from "../components/MarketingAnalysis";
import InventoryCard from "../components/InventoryCard";
import AbandonedCart from "../components/AbandonedCart";
import RecentOrders from "../components/RecentOrders";
import SummaryAnalysis from "../components/SummaryAnalysis";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-wrap items-center gap-[19px] lg:flex-nowrap">
          <SalesCard />
          <CustomersAnalysisCard />
          <OrdersAnalysisCard />
        </div>
        <div className="flex flex-col gap-[19px] lg:flex-row">
          <div className="flex flex-1 flex-col gap-[19px]">
            <div className="flex flex-col gap-[19px] lg:flex-row">
              <MarketingAnalysis />
              <div className="flex flex-col gap-[19px]">
                <InventoryCard />
                <AbandonedCart />
              </div>
            </div>
            <SummaryAnalysis />
          </div>
          <div>
            <RecentOrders />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
