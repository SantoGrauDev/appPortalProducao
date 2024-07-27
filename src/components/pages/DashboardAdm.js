import React from "react";

import BarraLateral from "./Sidebar";
import DashboardAdministrador from "./DashboardAdministrador";

function DashboardAdm() {
  return (
    <BarraLateral>
      <div>
        <DashboardAdministrador />
      </div>
    </BarraLateral>
  );
}

export default DashboardAdm;
