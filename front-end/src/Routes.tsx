import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Products from "./pages/Products";
import Stock from "./pages/Stock";
import Customers from "./pages/Customers";
import Suppliers from "./pages/Suppliers";
import Sales from "./pages/Sales";
import Reports from "./pages/Reports";

import HomeIcon from "@mui/icons-material/Home";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import WidgetsIcon from "@mui/icons-material/Widgets";
import PeopleIcon from "@mui/icons-material/Person";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ReceiptIcon from "@mui/icons-material/Receipt";

export const routeElements = [
  {
    path: "/",
    element: <Home />,
    handle: {
      menu: {
        show: true,
        label: "Home",
        icon: HomeIcon,
      },
    },
  },
  {
    path: "/produtos",
    element: <Products />,
    handle: {
      menu: {
        show: true,
        label: "Produtos",
        icon: LocalMallIcon,
      },
    },
  },
  {
    path: "/estoque",
    element: <Stock />,
    handle: {
      menu: {
        show: true,
        label: "Estoque",
        icon: WidgetsIcon,
      },
    },
  },
  {
    path: "/clientes",
    element: <Customers />,
    handle: {
      menu: {
        show: true,
        label: "Clientes",
        icon: PeopleIcon,
      },
    },
  },
  {
    path: "/fornecedores",
    element: <Suppliers />,
    handle: {
      menu: {
        show: true,
        label: "Fornecedores",
        icon: LocalShippingIcon,
      },
    },
  },
  {
    path: "/vendas",
    element: <Sales />,
    handle: {
      menu: {
        show: true,
        label: "Vendas",
        icon: AttachMoneyIcon,
      },
    },
  },
  {
    path: "/relatorios",
    element: <Reports />,
    handle: {
      menu: {
        show: true,
        label: "Relatórios",
        icon: ReceiptIcon,
      },
    },
  },
];

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: routeElements,
  },
]);
