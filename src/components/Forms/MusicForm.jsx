import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { MusicValidationSchema } from "../../utils/FieldValidation";
import Button from "../Buttons/Button";

const initialValues = {
  songImage: "",
  songName: "",
  artistName: "",
  musicCategory: "",
  musicAudio: "",
};

const onSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

const MusicForm = () => (
  <div>
    <Formik
      initialValues={initialValues}
      validationSchema={MusicValidationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form className="mt-8 text-white">
          <div>
            <label htmlFor="songImage">Song Image:</label>
            <Field type="text" id="songImage" name="songImage" />
            <ErrorMessage name="songImage" component="div" />
          </div>
          <div>
            <label htmlFor="songName">Song Name:</label>
            <Field type="text" id="songName" name="songName" />
            <ErrorMessage name="songName" component="div" />
          </div>
          <div>
            <label htmlFor="artistName">Artist Name:</label>
            <Field type="text" id="artistName" name="artistName" />
            <ErrorMessage name="artistName" component="div" />
          </div>
          <div>
            <label htmlFor="musicCategory">Music Category:</label>
            <Field as="select" id="musicCategory" name="musicCategory">
              <option value="">Select a category</option>
              <option value="monsoon">Monsoon</option>
              <option value="celebration">Celebration</option>
              <option value="travel">Travel</option>
              <option value="party">Party</option>
              <option value="peace">Peace</option>
              <option value="love">Love</option>
              <option value="friendship">Friendship</option>
            </Field>
            <ErrorMessage name="musicCategory" component="div" />
          </div>
          <div>
            <label htmlFor="musicAudio">Music Audio:</label>
            <Field type="text" id="musicAudio" name="musicAudio" />
            <ErrorMessage name="musicAudio" component="div" />
          </div>
          <Button
            type="submit"
            classname="w-full mt-2 py-3 px-6 bg-gradient-to-r from-pink-500 to-blue-900"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default MusicForm;
