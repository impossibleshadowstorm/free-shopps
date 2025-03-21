import React from "react";
import MultiCurrency from "@/app/(DashboardLayout)/components/dashboard/MultiCurrency";
import MultiCurrencyMgmt from "@/app/(DashboardLayout)/components/dashboard/MultiCurrencyMgmt";



function MultiCurrencyPage() {
  return (
    <div>
      <MultiCurrencyMgmt />
      <div style={{ height: "35px", width: "100%" }}></div>
      <MultiCurrency />
    </div>
  );
}

export default MultiCurrencyPage;
