import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const VillaEdit = () => {
    const { villaId } = useParams();

    //const [villaData, villaDataChange] = useState({});
  
    useEffect(() => {
      fetch("https://localhost:7169/api/VillaAPI/" + villaId)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          idchange(resp.id);
          namechange(resp.name);
          detailchange(resp.details);
          ratechange(resp.rate);
          occupancychange(resp.occupancy);
          sqftchange(resp.sqft);
          amenitychange(resp.amenity);
          urlimagechange(resp.imageUrl);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, []);
        const [id, idchange] = useState("");
        const [name, namechange] = useState("");
        const [details, detailchange] = useState("");
        const [rate, ratechange] = useState("");
        const [occupancy, occupancychange] = useState("");
        const [sqft, sqftchange] = useState("");
        const [amenity, amenitychange] = useState("");
        const [imageUrl, urlimagechange] = useState("");
        const navigate = useNavigate();
        const handleSubmit = (e) => {
          e.preventDefault();
          const villaData = {
            id,
            name,
            details,
            rate,
            occupancy,
            sqft,
            amenity,
            imageUrl,
          };
      
          fetch("https://localhost:7169/api/VillaAPI/"+villaId, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(villaData),
          })
            .then((res) => {
              console.log(JSON.stringify(villaData));
              alert("saved succesully");
              navigate("/");
            })
            .catch((err) => {
              console.log(err.message);
              
            });
        };

    return ( 
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card" style={{ "textAlign": "left" }}>
              <div className="card-title">
                <h2>Edit villa</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>id</label>
                      <input
                        value={id}
                        disabled="disabled"
                        className="form-control"
                      ></input>
                    </div>
                    <div className="form-group">
                      <label>name</label>
                      <input
                        value={name}
                        onChange={(e) => namechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                    <div className="form-group">
                      <label>details</label>
                      <input
                        value={details}
                        onChange={(e) => detailchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>

                    <div className="form-group">
                      <label>rate</label>
                      <input
                        value={rate}
                        onChange={(e) => ratechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>

                    <div className="form-group">
                      <label>occupancy</label>
                      <input
                        value={occupancy}
                        onChange={(e) => occupancychange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>

                    <div className="form-group">
                      <label>sqft</label>
                      <input
                        value={sqft}
                        onChange={(e) => sqftchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                    <div className="form-group">
                      <label>amenity</label>
                      <input
                        value={amenity}
                        onChange={(e) => amenitychange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                    <div className="form-group">
                      <label>url</label>
                      <input
                        value={imageUrl}
                        onChange={(e) => urlimagechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <button className="btn btn-success" type="submit">
                          Save
                        </button>
                        <Link to="/" className="btn btn-danger">
                          Back
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>);
}

export default VillaEdit;