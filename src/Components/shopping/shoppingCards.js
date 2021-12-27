import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { Modal, Button, ModalHeader, ModalFooter, ModalBody } from "reactstrap";
import {
  EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
} from "react-share";

function ShoppingCards({ items }) {
  const { addItem } = useCart();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const shareUrl = "https://github.com/kanika-10";
  const title = "Author's GitHub";

  return (
    <div className="shopping-cards-section">
      {items.map((shopItem) => {
        const { id, title, img1, img2, price } = shopItem;
        return (
          <div className="row" key={id}>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid">
                <div className="product-image">
                  <img
                    className="shopping-card-item-pic-1"
                    src={img1}
                    alt={title}
                  />
                  <img
                    className="shopping-card-item-pic-2"
                    src={img2}
                    alt={title}
                  />

                  <ul className="product-links">
                    <li>
                      <button
                        className="cart"
                        onClick={() => addItem(shopItem)}
                      >
                        <i className="fa fa-shopping-cart"></i>
                      </button>
                    </li>
                    <li>
                      <button className="cart" onClick={handleShow}>
                        <i className="fa fa-share"></i>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="product-content">
                  <h3 className="shopping-card-item-title">{title}</h3>
                  <div className="price">&#x20B9;{price}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div>
        <Modal isOpen={show} className="share-modal">
          <ModalHeader>
            <p className="modal-title">Share Via:</p>
          </ModalHeader>
          <ModalBody>
            <FacebookShareButton url={shareUrl} quote={title}>
              <FacebookIcon size={40} className="m-3" round />
            </FacebookShareButton>
            <WhatsappShareButton url={shareUrl} quote={title}>
              <WhatsappIcon size={40} className="m-3" round={true} />
            </WhatsappShareButton>
            <LinkedinShareButton url={shareUrl} quote={title}>
              <LinkedinIcon size={40} className="m-3" round={true} />
            </LinkedinShareButton>
            <TelegramShareButton url={shareUrl} quote={title}>
              <TelegramIcon size={40} className="m-3" round={true} />
            </TelegramShareButton>
            <EmailShareButton url={shareUrl} quote={title}>
              <EmailIcon size={40} className="m-3" round={true} />
            </EmailShareButton>
            <TwitterShareButton url={shareUrl} quote={title}>
              <TwitterIcon size={40} className="m-3" round={true} />
            </TwitterShareButton>
          </ModalBody>
          <ModalFooter>
            <Button type="button" onClick={handleClose}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}

export default ShoppingCards;
