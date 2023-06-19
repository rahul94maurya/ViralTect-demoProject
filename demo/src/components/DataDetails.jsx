import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const DataDetails = function () {
  const storeData = useSelector((state) => state.data);
  const params = useParams();
  const id = params.details;

  const [req] = storeData.filter((e) => e.id === +id);
  console.log(req);

  return (
    <div>
      <div>Details Page</div>
      <div> First name: {req.first_name}</div>
      <div> last name: {req.last_name}</div>
      <div> Email: {req.email}</div>
      <div> id: {req.id}</div>
    </div>
  );
};
export default DataDetails;
