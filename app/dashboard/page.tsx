import React from "react";
import UsersPage from "./users/page";
import AnalyticsPage from "./analytics/page";

const DashboardPage = () => {
  return (
    <div>
      <UsersPage />
      <AnalyticsPage />
    </div>
  );
};

export default DashboardPage;
