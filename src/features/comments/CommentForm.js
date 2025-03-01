import { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
} from "reactstrap";

import { Formik, Field, Form } from "formik";

import React from "react";
// rafce shortcut
const CommentForm = ({ campsiteId }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (values) => {
    const comment = {
      id: values.id,
      campsiteId: parseInt(campsiteId),
      rating: parseInt(values.rating),
      text: values.commentText,
      author: values.author,
    };
    console.log(comment);
    setModalOpen (false);
  };

  return (
    <>
      <Button outline onClick={() => setModalOpen(true)}>
        <i className="fa fa-pencil fa-lg" /> Add Comment
      </Button>
      <Modal isOpen={modalOpen}>
        <ModalHeader toggle={() => setModalOpen(false)}>
          Add Comment
        </ModalHeader>
        <ModalBody>campsite: {campsiteId}</ModalBody>
      </Modal>
    </>
  );
};

export default CommentForm;
