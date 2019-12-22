import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "@emotion/styled";
// import yup from "yup";
import firebase from "../firebase";

const PortfolioForm = () => {
  function onSubmit(values, { setSubmitting }) {
    console.log(values);
    const ID = values.title.replace(/\s+/g, "").toLowerCase();
    firebase
      .firestore()
      .collection("portfolio")
      .doc(ID)
      .set(values)
      .then(() => {
        setSubmitting(false);
      });
  }

  const StyledForm = styled.div`
    padding: 20px;
    width: 100%;
    max-width: 450px;

    .field {
      padding: 10px;
      text-align: right;

      label {
        margin-right: 10px;
      }
    }

    button {
      margin-top: 10px;
      padding: 10px;
      width: 100%;
      border-radius: 5px;
    }
  `;

  return (
    <StyledForm>
      <h1>Add Portfolio</h1>
      <Formik
        initialValues={{
          title: "",
          background: "",
          logo: "",
          date: "",
          description: "",
          tags: "",
          tech: ""
        }}
        validate={values => {
          const errors = {};
          if (!values.title) errors.title = "Required";
          return errors;
        }}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form>
            <div className="field">
              <label>Title</label>
              <Field type="text" name="title" />
              <ErrorMessage name="title" component="div" />
            </div>
            <div className="field">
              <label>Date</label>
              <Field type="date" name="date" />
            </div>
            <div className="field">
              <label>Description</label>
              <Field type="text" name="description" />
            </div>
            <div className="field">
              <label>Background</label>
              <input type="text" name="background" disabled value={values.background}/>
              <input
                type="file"
                onChange={event => {
                  const file = event.currentTarget.files[0];
                  const filePath = "portfolio/img/" + file.name;
                  const task = firebase
                    .storage()
                    .ref(filePath)
                    .put(file);
                  task.on(
                    "state_changed",
                    function(snapshot) {},
                    function(error) {},
                    function() {
                      task.snapshot.ref
                        .getDownloadURL()
                        .then(res => setFieldValue("background", res));
                    }
                  );
                }}
                className="form-control"
              />
            </div>
            <div className="field">
              <label>Logo</label>
              <input type="text" name="logo" disabled value={values.logo}/>
              <input
                type="file"
                onChange={event => {
                  const file = event.currentTarget.files[0];
                  const filePath = "portfolio/img/" + file.name;
                  const task = firebase
                    .storage()
                    .ref(filePath)
                    .put(file);
                  task.on(
                    "state_changed",
                    function(snapshot) {},
                    function(error) {},
                    function() {
                      task.snapshot.ref
                        .getDownloadURL()
                        .then(res => setFieldValue("logo", res));
                    }
                  );
                }}
                className="form-control"
              />
            </div>
            <div className="field">
              <label>Tags</label>
              <Field type="text" name="tags" />
            </div>
            <div className="field">
              <label>Tech</label>
              <Field type="text" name="tech" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Add Portfolio
            </button>
          </Form>
        )}
      </Formik>
    </StyledForm>
  );
};

export default PortfolioForm;
