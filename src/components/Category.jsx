import React from "react";
// import digital from "../assets/Genre/digital.png"
// import radio from "../assets/Genre/radio.png"
// import magazine from "../assets/Genre/magazine.png"
// import newspaper from "../assets/Genre/newspaper.png"
// import tv from "../assets/Genre/tv.png"
// import outdoor from "../assets/Genre/billboard.png"
// import nonTraditional from "../assets/Genre/non-traditional.png"
// import airline from "../assets/Genre/airplane.png"
// import cinema from "../assets/Genre/cinema.png"
// import influencer from "../assets/Genre/influencer.png"
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Category() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentCategory, setCurrentCategory] = React.useState("");

  const pathToCategory = {
    "/digital-service": "digital",
    "/radio-service": "radio",
    "/magazine-service": "magazine",
    "/newspaper-service": "newspaper",
    "/television-service": "tv",
    "/outdoor-service": "outdoor",
    "/nontraditional-service": "nontraditional",
    // '/airline-service': 'airline',
    "/cinema-service": "cinema",
    "/influencer-service": "influencer",
  };

  const categories = [
    {
      id: "digital",
      name: "Digital",
      icon: "https://ik.imagekit.io/ajoy/Genre/digital.png?updatedAt=1743153140925",
    },
    {
      id: "radio",
      name: "Radio",
      icon: "https://ik.imagekit.io/ajoy/Genre/radio.png?updatedAt=1743153140921",
    },
    {
      id: "magazine",
      name: "Magazine",
      icon: "https://ik.imagekit.io/ajoy/Genre/magazine.png?updatedAt=1743153140375",
    },
    {
      id: "newspaper",
      name: "Newspaper",
      icon: "https://ik.imagekit.io/ajoy/Genre/newspaper.png?updatedAt=1743153139938",
    },
    {
      id: "tv",
      name: "TV",
      icon: "https://ik.imagekit.io/ajoy/Genre/tv.png?updatedAt=1743153140914",
    },
    {
      id: "outdoor",
      name: "Outdoor",
      icon: "https://ik.imagekit.io/ajoy/Genre/billboard.png?updatedAt=1743153140373",
    },
    {
      id: "nontraditional",
      name: "Non-traditional",
      icon: "https://ik.imagekit.io/ajoy/Genre/non-traditional.png?updatedAt=1743153140278",
    },
    {
      id: "cinema",
      name: "Cinema",
      icon: "https://ik.imagekit.io/ajoy/Genre/cinema.png?updatedAt=1743153140370",
    },
    {
      id: "influencer",
      name: "Influencer",
      icon: "https://ik.imagekit.io/ajoy/Genre/influencer.png?updatedAt=1743153140275",
    },
    // {
    //     id: 'airline',
    //     name: 'Airline',
    //     icon: 'https://ik.imagekit.io/ajoy/Genre/airplane.png?updatedAt=1743153140084'
    // },
  ];

  React.useEffect(() => {
    setCurrentCategory(pathToCategory[location.pathname] || "");
  }, [location]);

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <section className=" w-full hidden lg:block">
      <div className="container mx-auto flex flex-wrap justify-center items-center gap-7 xl:gap-12 py-4 ">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`inline-flex gap-1 lg:text-xs xl:text-sm items-center cursor-pointer pb-1 hover:scale-105 duration-300 ${
              currentCategory === category.id
                ? "border-b-2 border-[#000080]"
                : ""
            }`}
            onClick={() =>
              handleNavigate(
                `/${category.id === "tv" ? "television" : category.id}-service`
              )
            }
          >
            <img
              src={category.icon}
              alt={category.name}
              className="w-4 xl:w-6"
            />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Category;
