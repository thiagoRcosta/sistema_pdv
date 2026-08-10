import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Products from "./pages/Products";
import Stock from "./pages/Stock";
import Customers from "./pages/Customers";
import Suppliers from "./pages/Suppliers";
import Sales from "./pages/Sales";
import Reports from "./pages/Reports";

const routeElements = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/produtos",
    element: <Products />,
  },
  {
    path: "/estoque",
    element: <Stock />,
  },
  {
    path: "/clientes",
    element: <Customers />,
  },
  {
    path: "/fornecedores",
    element: <Suppliers />,
  },
  {
    path: "/vendas",
    element: <Sales />,
  },
  {
    path: "/relatorios",
    element: <Reports />,
  },
];

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: routeElements,
  },
]);
