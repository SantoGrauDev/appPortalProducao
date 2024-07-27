import React from "react";
import Dashboard from "./Dashboard";
import BarraLateral from "./Sidebar";

function DashboardUser() {
  return (
    <BarraLateral>
      <div>
        <Dashboard />
      </div>
    </BarraLateral>
  );
}

export default DashboardUser;
