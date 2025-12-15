import React from "react";

export interface DataDashboardContextType {
	month: number;
	year: number;
}

const current_date = new Date();

export const DataDashboardContext = React.createContext<DataDashboardContextType>({
	month: current_date.getMonth() + 1,
	year: current_date.getFullYear(),
});
