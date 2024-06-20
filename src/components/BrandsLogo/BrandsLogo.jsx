import "./BrandsLogo.css";
import Brand1 from "../../assets/brands/1.svg";
import Brand2 from "../../assets/brands/2.svg";
import Brand3 from "../../assets/brands/3.svg";
import Brand4 from "../../assets/brands/4.svg";
import Brand5 from "../../assets/brands/5.svg";

const BrandsLogo = () => {
  const brands = [Brand1, Brand2, Brand3, Brand4, Brand5];
  return (
    <div className="container mb-12 mt-12 sm:mt-0 overflow-hidden">
      <h1 className="text-center my-2 sm:my-3">Powering next-gen companies</h1>
      <div className="marquee">
        <div className="marquee-content">
          {brands.map((brand, index) => (
            <img src={brand} alt={`Brand ${index + 1}`} key={index} />
          ))}
          {/* Repeat the brands for infinite scroll */}
          {brands.map((brand, index) => (
            <img
              src={brand}
              alt={`Brand ${index + 1}`}
              key={index + brands.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsLogo;
