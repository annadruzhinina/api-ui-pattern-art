import "./ArtList.css";
import Modal from "/Users/anna/dev/sendBox/api-ui-pattern/cityofchicago/src/components/Modal.js";
import { useState } from "react";

function ArtList({ artworks }) {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = (art) => {
    setSelectedArtwork(art);
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <div className="body--gallery">
        <ul className="gallery--list">
          {artworks.map((art, index) => (
            <div className="images">
              {/* <h1>{art.title}</h1> */}
              {art.image_id ? (
                <img
                  alt="arts"
                  className="img"
                  src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
                  onClick={() => {
                    toggleModal(art);
                  }}
                />
              ) : (
                <img alt="arts" className="img" src={"images/img-1.jpg"} />
              )}
            </div>
          ))}
        </ul>
        <Modal
          artwork={selectedArtwork}
          modalOpen={modalOpen}
          toggleModal={toggleModal}
        />
      </div>
    </>
  );
}

export default ArtList;
