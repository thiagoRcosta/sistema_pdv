import HomeIcon from "@mui/icons-material/Home";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import WidgetsIcon from "@mui/icons-material/Widgets";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ReceiptIcon from "@mui/icons-material/Receipt";
import People from "@mui/icons-material/Person";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Link } from "react-router";

const iconStyle = { fontSize: "1.7rem", marginBottom: "0.1rem" };
const labelStyle = { fontSize: "0.8rem" };

const navigationItems = [
  { Icon: HomeIcon, path: "/", label: "Home" },
  { Icon: LocalMallIcon,path: "/produtos", label: "Produtos" },
  { Icon: WidgetsIcon,path: "/estoque", label: "Estoque" },
  { Icon: People,path: "/clientes", label: "Clientes" },
  { Icon: LocalShippingIcon,path: "/fornecedores", label: "Fornecedores" },
  { Icon: AttachMoneyIcon,path: "/vendas", label: "Vendas" },
  { Icon: ReceiptIcon,path: "/relatorios", label: "Relatórios" },
]

const menuItemsWithPaths = navigationItems.map((item) => {
  const route = navigationItems.find(({ label }) => label === item.label);

  return {
    ...item,
    path: route?.path ?? "/",
  };
});

function Header() {
  return (
    <header className="mt-4">
      <nav className="container mx-auto flex justify-center items-center">
        <ul className="w-full max-w-3xl flex justify-evenly items-center gap-1 p-2 bg-(--color-primary) rounded-full shadow-lg shadow-black/30">
          {menuItemsWithPaths.map(({ Icon, label, path }) => (
            <li
              key={label}
              className="flex flex-col items-center text-white hover:bg-black/20 p-2 rounded-xl transition-colors duration-300 cursor-pointer"
            >
              <Link to={path}>
                <Icon style={iconStyle} />
                <p style={labelStyle}>{label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
