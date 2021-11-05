import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiEdit } from "react-icons/bi";
import { toast } from "react-toastify";

const SingleTableRow = ({ user, index, serial, setNumber }) => {
  const [payableAmount, setPayableAmount] = useState("");
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const _id = user._id;
    const promoCode = data.promoCode;
    fetch("https://api.easyessaywriting.com/create/update/promoCode", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ _id, promoCode }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === "ALready Used This Promo Code") {
          toast.error("Already Used This Promo Code");
        } else {
          toast.success("Promo Code Added Successfully");
          setNumber((prevState) => prevState + 1);
        }
      });
  };

  const handleDeletePromo = () => {
    const _id = user._id;
    const promoCode = "";
    fetch("https://api.easyessaywriting.com/create/update/promoCode", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ _id, promoCode }),
    })
      .then((res) => res.json())
      .then((data) => {
        setNumber((prevState) => prevState + 1);
      });
  };

  const handleChangeAccessURL = (url) => {
    const deleteURL = url;
    const _id = user._id;
    fetch("https://api.easyessaywriting.com/create/accessURL", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ _id, deleteURL }),
    })
      .then((res) => res.json())
      .then((data) => setNumber((prevState) => prevState + 1));
  };

  const handlePayAmount = (e) => {
    if (e.target.valueAsNumber <= 0) {
      setError("You can't provide negative value");
    } else if (e.target.valueAsNumber > user.balance) {
      setError("Your payable amount is bigger than user current balance");
    } else if (e.target.valueAsNumber === NaN) {
      setError("Test");
    } else {
      setError("");
      setPayableAmount(e.target.value);
    }
  };

  const handlePaymentSubmit = () => {
    const _id = user._id;
    const balance = `${parseFloat(user.balance) - parseFloat(payableAmount)}`;
    if (payableAmount === 0 || payableAmount === "") {
      setError("Please Enter the payable amount");
    } else {
      fetch("https://api.easyessaywriting.com/create/update/userBalance", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ _id, balance }),
      })
        .then((res) => res.json())
        .then((data) => {
          setNumber((prevState) => prevState + 1);
          setPayableAmount("");
          setError("");
        });
    }
  };

  return (
    <>
      <tr key={user._id}>
        <th scope="row">{serial + index + 1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td className="ps-4">{user.promoCode || "None"}</td>
        <td>
          {user.promoCode ? (
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
          {user.showReeferLink ? (
            <button
              className="btn btn-danger"
              onClick={() => handleChangeAccessURL(true)}
            >
              Deactivate URL
            </button>
          ) : (
            <button
              className="btn btn-success"
              onClick={() => handleChangeAccessURL(false)}
            >
              {" "}
              &nbsp; Activate URL &nbsp;
            </button>
          )}
        </td>
        <td className="d-flex justify-content-evenly">
          <p>${user.balance} &nbsp; &nbsp;</p>
          <p>
            <BiEdit
              size={24}
              className="text-primary cursor-pointer"
              data-bs-toggle="modal"
              data-bs-target={`#balance${index + 21}`}
            />
          </p>
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

      {/* balance reduce modal */}
      <div class="modal" tabindex="-1" id={`balance${index + 21}`}>
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title"></h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p className="m-0">Payable Amount</p>
              <input
                type="number"
                placeholder="Enter how much you pay the user"
                min="1"
                className="form-control my-2"
                name="payableAmount"
                value={payableAmount}
                onChange={handlePayAmount}
              />
              {error && <p className="text-danger">{error}</p>}
              <button
                onClick={handlePaymentSubmit}
                className="btn btn-primary d-block ms-auto my-4"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTableRow;
