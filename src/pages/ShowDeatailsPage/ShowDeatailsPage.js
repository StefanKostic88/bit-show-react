import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ShowInfo, MainContent } from "../../components";
import { fetchSingleShowInfo } from "../../services/services";

const ShowDeatailsPage = () => {
  const [showInfo, setShowInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getData = async (id) => {
      const data = await fetchSingleShowInfo(id);
      setShowInfo(() => ({ ...data }));
    };
    getData(id);
  }, []);

  if (!showInfo) return;
  return (
    <MainContent>
      <ShowInfo showInfo={showInfo} />
    </MainContent>
  );
};

export default ShowDeatailsPage;

//
