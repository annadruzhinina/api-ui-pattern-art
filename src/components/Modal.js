import React from "react";
import "./Modal.css";

function Modal({ artwork, modalOpen, toggleModal }) {
  if (modalOpen) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      {modalOpen && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 className="modal-title">{artwork.title}</h2>

            <p className="modal-text">
              {" "}
              <span className="submodel">Dimensions: </span>
              {artwork.dimensions}
            </p>

            {/* <p className="modal-text">
              {" "}
              <span className="submodel">Publication history: </span>
              {artwork.publication_history}
            </p> */}

            <p className="modal-text">
              {" "}
              <span className="submodel">Artist display: </span>
              {artwork.artist_display}
            </p>

            <p className="modal-text">
              <span className="submodel">Place of origin: </span>
              {artwork.place_of_origin}
            </p>
            <p className="modal-text">
              <span className="submodel">Artist: </span> {artwork.artist_title}
            </p>
            <p className="modal-text">
              <span className="submodel">Department: </span>{" "}
              {artwork.department_title}
            </p>
            <p className="modal-text">
              {" "}
              <span className="submodel">Copyright notice: </span>
              {artwork.copyright_notice}
            </p>
            <button className="close-modal" onClick={toggleModal}>
              x
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
