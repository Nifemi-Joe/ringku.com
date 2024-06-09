import * as React from "react";
import { RouteConstant } from "../../util/constant/RouteConstant.js";
import WalletView from "../../views/WalletView";

/** @type {RouteType[]} */
export const dashboardRoutes = [
	{
		path: RouteConstant.dashboard.home.path,
		name: RouteConstant.dashboard.home.name,
		element: <WalletView />,
		metadata: { isProtected: false }
	},
	// {
	// 	path: RouteConstant.dashboard.library.path,
	// 	name: RouteConstant.dashboard.library.name,
	// 	element: <Library />,
	// 	metadata: { isProtected: false }
	// },
];
