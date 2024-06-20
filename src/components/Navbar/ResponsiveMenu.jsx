import { MenuLinks } from "./Navbar";
import Logo from "../../assets/website/logo.svg";
const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <div className="text-center mb-8">
          <img src={Logo} alt="Logo" className="mx-auto w-24 h-24" />
          <h2 className="text-2xl font-bold mt-4">S.O Tech</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Excellence in Service
          </p>
        </div>
        <nav className="mt-12">
          <ul className="space-y-6 text-lg">
            {MenuLinks.map((data) => (
              <li key={data.name}>
                <a
                  href={data.link}
                  className="block px-4 py-2 rounded-md transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
