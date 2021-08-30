import { useState } from "react";
import { useForm } from "react-hook-form";

const SingleTableRow = ({ user, index, serial }) => {
  const { register, handleSubmit } = useForm();
  const [userPromoCode, setUserPromoCode] = useState("");
  const [isActivate, setIsActivate] = useState(user.showReeferLink);

  const onSubmit = (data) => {
    const _id = user._id;
    setUserPromoCode(data.promoCode);
    const promoCode = data.promoCode;
    fetch("https://essay-essay-writing.herokuapp.com/create/update/promoCode", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ _id, promoCode }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleDeletePromo = () => {
    const _id = user._id;
    setUserPromoCode("");
    const promoCode = "";
    fetch("https://essay-essay-writing.herokuapp.com/create/update/promoCode", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ _id, promoCode }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleChangeAccessURL = (url) => {
    setIsActivate(!url);
    const deleteURL = url;
    const _id = user._id;
    fetch("https://essay-essay-writing.herokuapp.com/create/accessURL", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ _id, deleteURL }),
    });
  };

  return (
    <>
      <tr key={user._id}>
        <th scope="row">{serial + index + 1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td className="ps-4">{userPromoCode || user.promoCode || "None"}</td>
        <td>
          {userPromoCode || user.promoCode ? (
            <button
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target={`#promo${index + 21}`}
            >
              Delete Promo
            </button>
          ) : (
            <button
              className="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target={`#promo${index + 11}`}
            >
              &nbsp; Add Promo &nbsp;
            </button>
          )}
        </td>
        <td>
          {isActivate || user.showReeferLink ? (
            <button
              className="btn btn-danger"
              onClick={() => handleChangeAccessURL(true)}
            >
              Deactivate
            </button>
          ) : (
            <button
              className="btn btn-success"
              onClick={() => handleChangeAccessURL(false)}
            >
              {" "}
              &nbsp; Activate &nbsp;
            </button>
          )}
        </td>
      </tr>

      {/* add promo modal */}
      <div
        className="modal fade"
        id={`promo${index + 11}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <p className="modal-title" id="exampleModalLabel">
                Give <span className="fw-bold">{user.email}</span> promo code
              </p>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <textarea
                  rows="2"
                  cols="5"
                  {...register("promoCode")}
                  name="promoCode"
                  id="promoCode"
                  className="form-control mb-2"
                ></textarea>
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Add"
                  data-bs-dismiss="modal"
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* promo delete modal */}

      <div class="modal" tabindex="-1" id={`promo${index + 21}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Delete Promo</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p>Do you want to remove the promo code ?</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-success"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <button
                type="button"
                class="btn btn-danger"
                onClick={handleDeletePromo}
                data-bs-dismiss="modal"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTableRow;
