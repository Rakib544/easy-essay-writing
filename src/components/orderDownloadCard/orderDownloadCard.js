import axios from "axios";
import fileDownload from "js-file-download";

const OrderDownloadCard = ({ singleOrderDetails, previousOrderDetails }) => {
  const handleDownload = (url, filename) => {
    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, filename);
      });
  };
  const status = singleOrderDetails.orderStatus;
  return (
    <div className="row p-5 d-flex align-items-center flex-direction-column">
      <div className="col-12 col-md-7">
        <div className="bg-light p-5 mb-4 rounded-3">
          <button
            className={`btn ${
              status === "Completed" ? "btn-style" : "work-in-progress"
            }`}
          >
            {singleOrderDetails.orderStatus}
          </button>
          <p className="mt-3  fw-bold d-flex align-items-center flex-column flex-md-row">
            <span className="fs-18 text-primary me-1">Next Delivery:</span>{" "}
            <span className="fs-22 text-danger">
              {singleOrderDetails.deliveryDate.slice(0, 10)}
            </span>
          </p>
        </div>
        <div className="p-5 bg-primary rounded-3">
          <button className="btn bg-white text-primary fw-bold">
            {previousOrderDetails
              ? `${previousOrderDetails.orderStatus}`
              : `${singleOrderDetails.orderStatus}`}
          </button>
          <p className="mt-3 text-white fs-18">
            Previous Delivery{" "}
            <span className="fw-bold fs-22 pt-2">
              {previousOrderDetails
                ? `${previousOrderDetails.deliveryDate.slice(0, 10)}`
                : `${singleOrderDetails.deliveryDate.slice(0, 10)}`}
            </span>
          </p>
        </div>
      </div>
      <div className="col-12 col-md-5 h-100 mt-5">
        <button
          className="btn w-100 bg-primary text-white"
          onClick={() =>
            handleDownload(
              `https://api.easyessaywriting.com/${singleOrderDetails.file}`,
              `${singleOrderDetails.file}`
            )
          }
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default OrderDownloadCard;
