import HomeIcon from "@mui/icons-material/Home";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import WidgetsIcon from "@mui/icons-material/Widgets";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ReceiptIcon from "@mui/icons-material/Receipt";
import People from "@mui/icons-material/Person";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const iconStyle = { fontSize: "1.7rem", marginBottom: "0.1rem" };
const labelStyle = { fontSize: "0.8rem" };

const menuItems = [
  { Icon: HomeIcon, label: "Home" },
  { Icon: LocalMallIcon, label: "Produtos" },
  { Icon: WidgetsIcon, label: "Estoque" },
  { Icon: People, label: "Clientes" },
  { Icon: LocalShippingIcon, label: "Fornecedores" },
  { Icon: AttachMoneyIcon, label: "Vendas" },
  { Icon: ReceiptIcon, label: "Relatórios" },
];

function Header() {
  return (
    <header className="mt-4">
      <nav className="container mx-auto flex justify-center items-center">
        <ul className="w-full max-w-3xl flex justify-evenly items-center gap-1 p-2 bg-(--color-primary) rounded-full shadow-lg shadow-black/30">
          {menuItems.map(({ Icon, label }) => (
            <li
              key={label}
              className="flex flex-col items-center text-white hover:bg-black/20 p-2 rounded-xl transition-colors duration-300 cursor-pointer"
            >
              <Icon style={iconStyle} />
              <p style={labelStyle}>{label}</p>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
