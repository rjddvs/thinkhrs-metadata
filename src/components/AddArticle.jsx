import React, { useState } from "react";
import {
  Modal,
  Form,
  Button,
  Badge,
  Col,
  Toast,
  Figure,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaWindowClose } from "react-icons/fa";
import FirebaseService from "../services/firebaseservice";
import "../services/hashtag";
import hashtag from "../services/hashtag";

const AddArticle = (props) => {
  const [articleUrl, setArticleUrl] = useState("");
  const [articleHashTag, setArticleHashTag] = useState("");
  const [articlesHashTags, setArticleHashTags] = useState([]);
  const [showErrorToast, setErrorToast] = useState(false);
  const [showSuccessToast, setSuccessShowToast] = useState(false);
  const [metadata, setMetadata] = useState(null);
  const [toastMessage, setToastMessage] = useState("");

  const FIRESTORE_COLLECTION = "metadata";
  const firebaseservice = new FirebaseService();
  firebaseservice.init();

  const handleArticleUrl = (e) => {
    setArticleUrl(e.target.value);
  };
  const handleArticleHashTag = (e) => {
    setArticleHashTag(e.target.value);
  };

  const getArticleMetadata = async () => {
    if (articleUrl.trim() === "") {
      setErrorToast(true);
      return;
    }
    setToastMessage("Retrieving Article Metadata...");
    setSuccessShowToast(true);
    const metadata = await firebaseservice.getMetadata(articleUrl);
    console.log("retrieving metadata " + JSON.stringify(metadata));
    setMetadata(metadata.data);
  };

  const clearArticleForm = () => {
    setArticleUrl("");
    setArticleHashTag("");
    setArticleHashTags([]);
    setMetadata(null);
  };

  const closeArticleHashTag = (articleHashTag) => {
    const newArticleHashTags = articlesHashTags.filter(
      (e) => e !== articleHashTag
    );
    setArticleHashTags(newArticleHashTags);
  };

  const addArticleHashTag = () => {
    const MAX_HASHTAGS_LENGTH = 20;
    if (
      articleHashTag.trim() === "" ||
      articlesHashTags.length === MAX_HASHTAGS_LENGTH
    ) {
      return;
    }
    const newArticleHashTags = [...articlesHashTags];
    articleHashTag.split(/\s/).forEach((a) => {
      const newArticleHashTag = hashtag(a);

      const found = newArticleHashTags.find((a) => a === newArticleHashTag);

      if (!found) {
        newArticleHashTags.push(newArticleHashTag);
      }
      console.log(a);
    });

    setArticleHashTags([...articlesHashTags, ...newArticleHashTags]);
    setArticleHashTag("");
  };

  const saveArticleMetadataAndHashTags = () => {
    if (metadata === null) {
      return "";
    }
    const submitObj = {
      hashtags: articlesHashTags,
      url: articleUrl,
      image: metadata.image,
      description: metadata.description,
      title: metadata.title,
    };
    setSuccessShowToast(true);
    setToastMessage("Saving Article Metadata...");
    firebaseservice.save(FIRESTORE_COLLECTION, submitObj);
    console.log(submitObj);
  };

  const articleFigure = () => {
    if (metadata === null) {
      return "";
    }
    return (
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src={metadata.image}
        />
        <Figure.Caption>
          <strong>{metadata.title}</strong>
        </Figure.Caption>
        <Figure.Caption>{metadata.description}</Figure.Caption>
      </Figure>
    );
  };

  const articleSaveButton = () => {
    if (metadata === null) {
      return "";
    }
    return (
      <Form.Row>
        <Col>
          <Button
            variant="primary"
            onClick={() => saveArticleMetadataAndHashTags()}
          >
            Save
          </Button>
        </Col>
      </Form.Row>
    );
  };

  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      backdrop="static"
      keyboard={false}
      size="sm"
    >
      <Modal.Header closeButton>
        <Modal.Title>Article</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <main>
          <Toast
            show={showSuccessToast}
            onClose={() => setSuccessShowToast(false)}
            delay={3000}
            autohide
          >
            <Toast.Header>
              <strong>{toastMessage}</strong>
            </Toast.Header>
          </Toast>
          <Toast show={showErrorToast} onClose={() => setErrorToast(false)}>
            <Toast.Header>
              <strong>Article Url Error</strong>
            </Toast.Header>
            <Toast.Body>
              <span>Please enter Article Url</span>
            </Toast.Body>
          </Toast>

          <Form>
            <Form.Row>
              <Form.Group controlId="formArticlUrl">
                <Form.Label>Article Url</Form.Label>
                <Form.Control
                  type="text"
                  onChange={handleArticleUrl}
                  value={articleUrl}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group controlId="formArticleHashTags">
                <Form.Label>Hash Tag</Form.Label>
                <Form.Control
                  type="text"
                  onChange={handleArticleHashTag}
                  value={articleHashTag}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Col>
                <Form.Group controlId="formPills">
                  {articlesHashTags.map((articlesHashTag) => (
                    <Badge pill variant="dark" key="{uuid()}">
                      {articlesHashTag}
                      <FaWindowClose
                        onClick={() => closeArticleHashTag(articlesHashTag)}
                      />
                    </Badge>
                  ))}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formButtons">
                  <Button
                    class="close"
                    variant="outline-secondary"
                    type="button"
                    onClick={() => addArticleHashTag()}
                  >
                    Add
                  </Button>
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row>
              <Col>
                <Button variant="primary" onClick={() => clearArticleForm()}>
                  Clear
                </Button>
              </Col>
              <Col>
                <Button variant="primary" onClick={() => getArticleMetadata()}>
                  Get Metadata
                </Button>
              </Col>
            </Form.Row>
            <Form.Row lg={6}>
              <Col>
                {articleFigure()}
                {articleSaveButton()}
              </Col>
            </Form.Row>
          </Form>
        </main>
      </Modal.Body>
    </Modal>
  );
};

export default AddArticle;
