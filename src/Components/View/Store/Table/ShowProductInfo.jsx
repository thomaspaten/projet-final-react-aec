import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { InfoCircleFill } from "react-bootstrap-icons";
import { X } from "react-bootstrap-icons";

function ShowProductInfo(props) {
  // ***** STATES

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // ***** PROPS

  const productData = props.productData;

  return (
    // NOTE : Empty Angle Brackets is a way to still return only one set of item without affecting 
    // the formatting in any way.
    <>
      <Button variant="primary" onClick={handleShow}>
        <InfoCircleFill color="white" size={30} />
      </Button>

      <Modal show={show} onHide={handleClose} keyboard={false}>
        <Modal.Header>
          <Modal.Title>{productData.name}</Modal.Title>
          <Button variant="outline-white" onClick={handleClose}>
            <X color="#6d757d" size={40} />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-3">
                <img src={productData.img} alt={productData.name} />
              </div>
              <div className="col-9">{productData.info}</div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ShowProductInfo;