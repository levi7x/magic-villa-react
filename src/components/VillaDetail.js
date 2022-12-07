import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const VillaDetail = () => {
  const { villaId } = useParams();
  const [villaData, villaDataChange] = useState({});

  useEffect(() => {
    fetch("https://localhost:7169/api/VillaAPI/" + villaId)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        villaDataChange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <div className="card" style={{ textAlign: "left" }}>
        <div className="card-title">
          <h2>Villa details</h2>
        </div>
        <div className="card-body">
          {villaData && (
            <div>
              <h2>
                Villa name: {villaData.name} ({villaData.id})
              </h2>
              <h3>
                Villa details: {villaData.details}
              </h3>
              <h5>
                Villa rate: {villaData.rate}
              </h5>
              <h6>
                Villa square feet: {villaData.sqft}
              </h6>
              <Link className="btn btn-success" to="/">Back to listing</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VillaDetail;
