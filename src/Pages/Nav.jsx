import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Logo from "../Assets/IMGS/logo.png";
import { BrowserRouter, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Nav() {
  const { t, i18n } = useTranslation("Nav");
  const [idiomaActual, setIdiomaActual] = useState("es");

  const navigate = useNavigate();
  function changeLanguage() {
    if (idiomaActual === "es") {
      i18n.changeLanguage("en");
      setIdiomaActual("en"); // Update state
    } else {
      i18n.changeLanguage("es");
      setIdiomaActual("es"); // Update state
    }
  }

  return (
    <>
      <nav className="hidden md:flex lg:gap-4 justify-center py-10 items-center font-Poppins">
        <img src={Logo} alt="Logo del CTP Santo Domingo" className="w-[10%]" />
        <Link
          to="/"
          className="text-lg hover:text-White hover:bg-Atlantis p-2 rounded-lg hover:scale-90 transition-all duration-200 lg:text-xl"
        >
          {t("Home")}
        </Link>
        <Link
          to="#"
          className="text-lg hover:text-White hover:bg-Atlantis p-2 rounded-lg hover:scale-90 transition-all duration-200 lg:text-xl"
        >
          {t("AU")}
        </Link>
        <Link
          to="/Posts"
          className="text-lg hover:text-White hover:bg-Atlantis p-2 rounded-lg hover:scale-90 transition-all duration-200 lg:text-xl"
        >
          {t("Posts")}
        </Link>
        <Link
          to="#Contact"
          className="text-lg hover:text-White hover:bg-Atlantis p-2 rounded-lg hover:scale-90 transition-all duration-200 lg:text-xl"
        >
          {t("Contact")}
        </Link>
        <Link
          to="/Events"
          className="text-lg hover:text-White hover:bg-Atlantis p-2 rounded-lg hover:scale-90 transition-all duration-200 lg:text-xl"
        >
          {t("Events")}
        </Link>

        <Link
          to="/UP.jsx"
          className="text-lg hover:text-White hover:bg-Atlantis p-2 rounded-lg hover:scale-90 transition-all duration-200 lg:text-xl"
        >
          {t("UP")}
        </Link>
        <div className="text-lg text-White bg-Atlantis p-2 rounded-lg flex gap-2 items-center justify-center">
          <i class="fa-solid fa-flag"></i>
          <button onClick={changeLanguage}>{t("CL")}</button>
        </div>
      </nav>
      <Outlet />
    </>
  );
}