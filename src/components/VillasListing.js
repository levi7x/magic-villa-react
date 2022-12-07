import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const VillasListing = () => {
  const [villaData, villaDataChange] = useState(null);
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("/villa/detail/" + id);
  };
  const LoadEdit = (id) => {
    navigate("/villa/edit/" + id);
  };
  const LoadRemove = (id) => {
    if (window.confirm("Do you want to remove villa ?")) {
      fetch("https://localhost:7169/api/VillaAPI/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("removed succesully");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch("https://localhost:7169/api/VillaAPI")
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
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Villas listing</h2>
        </div>
        <div className="card-body">
          <div>
            <Link to="/villa/create" className="btn btn-success">
              Add new
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>id</td>
                <td>name</td>
                <td>details</td>
                <td>rate</td>
                <td>occupancy</td>
                <td>sqft</td>
                <td>action</td>
              </tr>
            </thead>
            <tbody>
              {villaData &&
                villaData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.details}</td>
                    <td>{item.rate}</td>
                    <td>{item.occupancy}</td>
                    <td>{item.sqft}</td>
                    <td>
                      <a
                        onClick={() => {
                          LoadEdit(item.id);
                        }}
                        className="btn btn-success"
                      >
                        Edit
                      </a>
                      <a
                        onClick={() => {
                          LoadRemove(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        Remove
                      </a>
                      <a
                        onClick={() => {
                          LoadDetail(item.id);
                        }}
                        className="btn btn-success"
                      >
                        Details
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VillasListing;
