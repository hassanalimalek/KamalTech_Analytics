import React from 'react';
import AnalyticsMainC1 from './AnalyticsMainC1/index';
import AnalyticsMainC2 from './AnalyticsMainC2/index';

function Index() {
  return (
    <div className="container-fluid no-padding divBorder123 mb-4">
      <div className="row">
        <div className=" col-12 col-md-8 divBorder">
          <AnalyticsMainC1 />
        </div>
        <div className="col-sm-8 col-md-4  divBorder nopadding">
          <AnalyticsMainC2 />
        </div>
      </div>
    </div>
  );
}

export default Index;
