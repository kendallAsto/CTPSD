import React from "react";
import { useTranslation } from "react-i18next";

export default function CySModal({ estado, cambiarEstado }) {
  const {t} = useTranslation("specialitiesNocturno")
  return (
    <>
      {estado && (
        <section className="rounded-xl h-[140vh] w-[100%] md:h-[110vh] bg-[rgba(0,0,0,.5)] absolute left-0 right-0">
          <div className="text-md h-[120vh] w-[90vw] md:h-[90vh] md:w-[90vw] m-auto bg-White absolute top-0 left-0 right-0 bottom-0 rounded-xl p-12 md:text-xl flex gap-4 flex-col lg:flex-row">
            <div>
            <h1 className="text-2xl md:text-3xl text-Atlantis lg:text-3xl text-center font-bold">{t("ConfiguracionySoporte.title")}</h1>
            <p className="text-xl md:text-2xl">{t("ConfiguracionySoporte.functions")}</p>
            </div>
            <div>
            <h2 className="text-2xl lg:text-3xl text-Atlantis font-bold">{t("ConfiguracionySoporte.title2")}</h2>
            <p className="text-xl lg:text-2xl">{t("ConfiguracionySoporte.p")}</p>
            </div>
          </div>
          <i
            onClick={() => cambiarEstado(false)}
            class="fa-sharp fa-solid fa-xmark text-White text-3xl md:text-5xl absolute  top-4 right-8 md:top-4 md:right-12 hover:bg-Atlantis hover:text-White px-6 py-1 md:p-2 rounded-full cursor-pointer"
          ></i>
        </section>
      )}
    </>
  );
}