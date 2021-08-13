import { useRouter } from "next/router";
import { MdFileUpload } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./orderInfoCard.module.css";

const OrderInfoCard = ({ data, number, setNumber }) => {
  const router = useRouter();

  const handleChangeStatus = () => {
    fetch(
      `https://essay-essay-writing.herokuapp.com/orderCard/update/orderStatus/${data._id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ orderStatus: "Completed" }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setNumber(number + 1);
        notify();
      });
  };

  const notify = () => toast.success("Order Completed");

  const handleFileUpload = (e, id) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    fetch(`https://essay-essay-writing.herokuapp.com/orderCard/upload/${id}`, {
      method: "PUT",
      body: formData,
    })
      .then((res) => res.json())
      .then((filepath) => {});
  };

  return (
    <div className="my-3" key={data._id}>
      <div className="container bg-white p-5 box-shadow rounded-3 ">
        <div className="row  d-flex align-items-center border-bottom pb-4 mb-3">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <div className="col-md-3 ">
            <p className="text-primary fs-16 fw-bold">Order - {data._id}</p>
            <p className="text-success fs-18">
              Order - Date: {data.orderDate.slice(0, 10)}
            </p>
          </div>
          <div className="col-md-3">
            <p className="text-danger fs-18">
              Delivery - Date: {data.deliveryDate.slice(0, 10)}
            </p>
          </div>
          {router.pathname === "/admin/pending-orders" ? (
            <>
              <div className="col-md-2 d-flex flex-column align-items-center">
                <p className="text-primary fw-bold fs-22">Order-status</p>
                <button className={`${styles.admin}`} type="">
                  {data.orderStatus}
                </button>
              </div>
              <div className="col-md-2 d-flex flex-column align-items-center">
                <p className="text-primary fs-22 fw-bold">File - Delivery</p>
                <label
                  htmlFor={`${data._id}`}
                  className="btn btn-primary text-white"
                >
                  Upload file <MdFileUpload className="ms-3" size={28} />
                  <input
                    type="file"
                    id={`${data._id}`}
                    className="d-none"
                    name="file"
                    onChange={(e) => handleFileUpload(e, data._id)}
                  />
                </label>
              </div>
            </>
          ) : (
            ""
          )}
          <div className="col-md-2 ms-auto d-flex flex-column align-items-center">
            <p className="text-primary fs-22 fw-bold">Order-Action</p>
            {router.pathname === "/admin/pending-orders" ? (
              <button
                onClick={handleChangeStatus}
                type="button"
                class="btn btn-success text-white px-5 py-2"
              >
                Complete
              </button>
            ) : (
              <p className="bg-success px-3 py-2 rounded-3 text-white">
                Completed
              </p>
            )}
          </div>
        </div>
        <div className="row  d-flex justify-content-center align-items-center ">
          <div className="col-md-3 ">
            <p className="fs-18 fw-bold">Customer Name</p>
            <p className="text-muted">{data.customerName}</p>
          </div>
          <div className="col-md-3">
            <p className="fs-18 fw-regular fw-bold">Customer Mail</p>
            <p className="text-muted">{data.customerEmail}</p>
          </div>
          <div className="col-md-2 d-flex flex-column">
            <p className="fs-18 fw-bold">Order Amount</p>
            <p className="text-muted">${data.orderAmount}</p>
          </div>
          <div className="col-md-2 d-flex flex-column  ">
            <p className="text-danger fs-18 fw-bold">Delivery Time</p>
            <p className="text-primary">{data.deliveryTime} Days</p>
          </div>
          <div className="col-md-2 d-flex flex-column  ">
            <p className="text-primary fs-18 fw-bold">Quantity</p>
            <p className="text-muted">{data.quantity} Items</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInfoCard;
