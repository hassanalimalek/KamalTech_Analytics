import React from 'react';
import AnalyticsHome from '../components/analytics/analyticsHome/index';
import SalesAnalytics from '../components/analytics/salesAnalytics/index';
import TechnicianAnalytics from '../components/analytics/technicianAnalytics/index';
import SalesManAnalytics from '../components/analytics/salesmanAnalytics/index';
// import styles from '../../css/analytics.module.scss';

function Analytics() {
  return (
    <div>
      <AnalyticsHome />
      <SalesAnalytics />
      <TechnicianAnalytics />
      <SalesManAnalytics />
    </div>
  );
}
export default Analytics;
