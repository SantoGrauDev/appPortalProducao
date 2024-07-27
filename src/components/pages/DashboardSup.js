import React from "react";
import DashboardSupervisor from "./DashboardSupervisor";
import BarraLateral from "./Sidebar";

function DashboardSup() {
  return (
    <BarraLateral>
      <div>
        <DashboardSupervisor />
      </div>
    </BarraLateral>
  );
}

export default DashboardSup;
