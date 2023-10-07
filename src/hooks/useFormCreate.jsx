import { ENVDENARIUSGENERALINFO } from "../utils/DenariusGeneralInfoRoutes";
const baseApi = ENVDENARIUSGENERALINFO.BASE_PATH;

// export class DenariusGeneralInfo {
export const fetchDataReferenceCreate = async (data) => {
  // descomentar para ver la informacion que se envia a la api Denarius
  console.log(
    "Datos Enviados a Denarius mediante POST - Ruta: DenariudGeneralInfoMethods"
  );
  console.log(data);
  const url = `https://pokeapi.co/api/v2/pokemon/ditto`;
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(url, params);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error:", error.message);
  }
};
// }
