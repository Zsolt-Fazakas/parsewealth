import React, { Suspense } from "react";
import { BarLoader } from "react-spinners";
import DashboardPage from "./page";

export default function DashboardLayout() {
  return (
    <div className="px-5">
      <div className="text-6xl font-bold gradient-title mb-5">
        <h1>Dashboard</h1>
        <Suspense
          fallback={
            <BarLoader className="mt-4" width={"100%"} color="#93333ea" />
          }
        >
          <DashboardPage />
        </Suspense>
      </div>
    </div>
  );
}
