import { createHashRouter } from "react-router"; 
import { AppShell } from "./AppShell";
import Landing from "@/pages/Landing";
import Search from "@/pages/Search";
import PropertyDetail from "@/pages/PropertyDetail";
import Transaction from "@/pages/Transaction";
import PostSale from "@/pages/PostSale";

export const router = createHashRouter([
  {
    path: "/",
    Component: AppShell,
    children: [
      { index: true, Component: Landing },
      { path: "search", Component: Search },
      { path: "property/:id", Component: PropertyDetail },
      { path: "transaction", Component: Transaction },
      { path: "post-sale", Component: PostSale },
    ],
  },
]);