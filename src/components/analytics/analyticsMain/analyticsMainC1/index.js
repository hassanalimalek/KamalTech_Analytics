import React from 'react';
import TotalSales from './totalSales/totalSales';
import TotalPurchases from './totalPurchases/totalPurchases';
import SalesSummary from './salesSummary/salesSummary';

function Index() {
  return (
    <div className="analyticsHomeC1 container-fluid nopadding ">
      <div className="row mb-4">
        <div className=" col-12 col-lg-6">
          <TotalSales />
        </div>
        <div className="col-12 col-lg-6">
          <TotalPurchases />
        </div>
      </div>
      <div className="row ">
        <div className="col-12 ">
          <SalesSummary />
        </div>
      </div>
    </div>
  );
}

export default Index;
