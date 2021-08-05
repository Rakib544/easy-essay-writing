import React from 'react';
import { useForm } from 'react-hook-form';

const FooterCard = ({ footerCardData, index, setNumber, number }) => {

  const { _id, title, link } = footerCardData;
  const titleValue = title;
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {

    const title = data.title || titleValue;
    const link = data.link;

    fetch(`http://localhost:8080/footerIcons/update/${_id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        link
      })
    })
      .then(res => res.json())
      .then(result => {
        if (result) {
          setNumber(number + 1);
        }
      })
  };

  return (
    <>
      <div className="pb-3">
        <div className="d-flex align-items-center justify-content-between pb-2">
          <p className="fs-22 fw-bold">{titleValue}</p>
          <button
            className="btn-style" data-bs-toggle="modal" data-bs-target={`#footerModalCard${index + 1}`}
          >
            Edit
          </button>
        </div>
        <input
          style={{ backgroundColor: "#F4F8FF", color: "blue" }}
          className="form-control"
          type=""
          name=""
          value={link}
        />
      </div>

      <div class="modal fade" id={`footerModalCard${index + 1}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">FAQ</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className="form-label fs-14" htmlFor="answer">{titleValue}</label>
                <input type="text" defaultValue={link} {...register("link")} name='link' id='link' class="form-control mb-2" />
                <input type="submit" className="btn btn-primary" value="Save Changes" data-bs-dismiss="modal" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterCard;