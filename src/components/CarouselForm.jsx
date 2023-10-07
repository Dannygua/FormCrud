import GeneralInfoForm from "./GeneralInfoForm";
import "../css/GeneralInfoForm.css";
import "../css/Carousel.css";
import { fetchDataReference } from "../hooks/useForm";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const CarouselForm = () => {
  const [loadingForm, setLoadingForm] = useState(true);
  const [GeneralData, setgeneralData] = useState({});
  useEffect(() => {
    const GetGeneralInfo = async () => {
      setLoadingForm(true);
      const response = await fetchDataReference();
      setgeneralData(response); // Actualiza el estado con los datos
      console.log(response);
      setLoadingForm(false);
    };

    return () => {
      GetGeneralInfo();
    };
  }, []);

  return loadingForm ? (
    <Spinner />
  ) : (
    <>
      <div>
        <h3 className="CarouselContentStyle">
          <GeneralInfoForm GeneralData={GeneralData} />
        </h3>
      </div>
    </>
  );
};

export default CarouselForm;
