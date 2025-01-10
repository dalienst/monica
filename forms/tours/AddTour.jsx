"use client";
import useAxiosAuth from "@/hooks/authentication/useAxiosAuth";
import { createTour } from "@/services/tours";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";

function AddTour({ refetch, closeModal }) {
  const [loading, setLoading] = useState(false);
  const axios = useAxiosAuth();
  return (
    <>
      <Formik
        initialValues={{
          image: null,
          title: "",
          description: "",
          ksh: "",
          euro: "",
          pound: "",
          dollar: "",
          duration: "",
          capacity: "",
          is_featured: false,
        }}
        onSubmit={async (values) => {
          setLoading(true);
          try {
            const formData = new FormData();

            if (values.image) {
              formData.append("image", values.image);
            }
            formData.append("title", values.title);
            formData.append("description", values.description);
            formData.append("ksh", values.ksh);
            formData.append("euro", values.euro);
            formData.append("pound", values.pound);
            formData.append("dollar", values.dollar);
            formData.append("duration", values.duration);
            formData.append("capacity", values.capacity);
            formData.append("is_featured", values.is_featured);

            await createTour(formData, axios);
            refetch();
            closeModal();
            setLoading(false);
            toast.success("Tour added successfully");
          } catch (error) {
            toast.error("Failed to add tour");
          } finally {
            setLoading(false);
          }
        }}
      >
        {({ touched, setFieldValue, values }) => (
          <Form>
            <div className="form-group mb-3">
              <label htmlFor="image" className="form-label">
                Image
              </label>
              <input
                type="file"
                name="image"
                onChange={(e) => {
                  setFieldValue("image", e.target.files[0]);
                }}
                className="form-control"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="title" className="form-label">
                Tour Title
              </label>
              <Field
                name="title"
                type="text"
                className="form-control "
                placeholder="1 Day Tour in Nairobi"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <Field
                name="description"
                type="text"
                as="textarea"
                className="form-control "
                placeholder="Description"
              />
            </div>

            <div className="row">
              <div className="form-group mb-3 col-md-6 col-sm-12">
                <label htmlFor="euro">Euro (€)</label>
                <Field
                  name="euro"
                  type="number"
                  className="form-control "
                  placeholder="150"
                />
              </div>

              <div className="form-group mb-3 col-md-6 col-sm-12">
                <label htmlFor="pound">Pound (£)</label>
                <Field
                  name="pound"
                  type="number"
                  className="form-control "
                  placeholder="105"
                />
              </div>

              <div className="form-group mb-3 col-md-6 col-sm-12">
                <label htmlFor="dollar">Dollar ($)</label>
                <Field
                  name="dollar"
                  type="number"
                  className="form-control "
                  placeholder="165"
                />
              </div>

              <div className="form-group mb-3 col-md-6 col-sm-12">
                <label htmlFor="ksh" className="form-label">
                  Kenya Shillings (Ksh)
                </label>
                <Field
                  name="ksh"
                  type="number"
                  className="form-control "
                  placeholder="22000"
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group mb-3 col-md-6 col-sm-12">
                <label htmlFor="duration" className="form-label">
                  Duration
                </label>
                <Field
                  name="duration"
                  type="number"
                  className="form-control "
                  placeholder="2"
                />
              </div>

              <div className="form-group mb-3 col-md-6 col-sm-12">
                <label htmlFor="capacity" className="form-label">
                  Capacity
                </label>
                <Field
                  name="capacity"
                  type="number"
                  className="form-control "
                  placeholder="10"
                />
              </div>
            </div>

            <div className="form-check form-switch mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="is_featured"
                name="is_featured"
                checked={values.is_featured}
                onChange={(e) => {
                  setFieldValue("is_featured", e.target.checked);
                }}
              />
              <label htmlFor="is_featured" className="form-check-label">
                Featured Tour
              </label>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="btn auth-btn w-100"
            >
              {loading ? "Adding Tour..." : "Add Tour"}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default AddTour;
