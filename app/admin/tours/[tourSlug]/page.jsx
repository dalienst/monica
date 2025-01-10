"use client";
import LoadingSpinner from "@/components/general/LoadingSpinner";
import useAxiosAuth from "@/hooks/authentication/useAxiosAuth";
import { useFetchTourDetail } from "@/hooks/tours/actions";
import { deleteTour, updateTour } from "@/services/tours";
import { Field, Form, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { use, useState } from "react";
import toast from "react-hot-toast";

function TourDetail({ params }) {
  const tourSlug = use(params);
  const slug = tourSlug?.tourSlug;
  const axios = useAxiosAuth();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const {
    isLoading: isLoadingTour,
    data: tour,
    isError: isErrorTour,
    refetch: refetchTour,
  } = useFetchTourDetail(slug);

  const handleDelete = async () => {
    setDeleting(true);
    try {
      await deleteTour(slug, axios);
      router?.push("/admin/tours");
      toast?.success("Tour deleted successfully");
    } catch (error) {
      toast?.error("Failed to delete tour");
    } finally {
      setDeleting(false);
    }
  };

  if (isLoadingTour) return <LoadingSpinner />;

  return (
    <div className="container py-2">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/admin/tours">Tours</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {tour?.title}
          </li>
        </ol>
      </nav>
      <section className="mb-3 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
        <div className="mb-3">
          <h3>{tour?.title}</h3>
        </div>

        <div className="mb-3 d-flex gap-2">
          <button className="btn auth-btn btn-sm">View Bookings</button>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={handleDelete}
          >
            {deleting ? (
              <div className="spinner-border spinner-border-sm" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              "Delete"
            )}
          </button>
        </div>
      </section>

      <section className="mb-3">
        <Formik
          initialValues={{
            image: null,
            title: tour?.title || "",
            description: tour?.description || "",
            ksh: tour?.ksh || "",
            euro: tour?.euro || "",
            pound: tour?.pound || "",
            dollar: tour?.dollar || "",
            duration: tour?.duration || "",
            capacity: tour?.capacity || "",
            is_featured: tour?.is_featured || false,
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

              await updateTour(slug, formData, axios);
              toast.success("Tour updated successfully");
              refetchTour();
            } catch (error) {
              console.log(error);
              toast.error("Error updating tour");
            } finally {
              setLoading(false);
            }
          }}
        >
          {({ setFieldValue, values }) => (
            <Form className="p-4 bg-white rounded border">
              {tour?.image ? (
                <Image
                  src={tour?.image}
                  width={100}
                  height={100}
                  alt="Tour Image"
                  className="img-fluid mb-3 rounded"
                />
              ) : (
                <Image
                  src="/balloon.jpg"
                  width={100}
                  height={100}
                  alt="Tour Image"
                  className="img-fluid mb-3 rounded"
                />
              )}

              <div className="col-md-3 mb-3">
                <label htmlFor="image" className="form-label">
                  Update Image
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

              <div className="form-check form-switch mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="is_featured"
                  name="is_featured"
                  checked={tour?.is_featured}
                  onChange={(e) => {
                    setFieldValue("is_featured", e.target.checked);
                  }}
                />
                <label htmlFor="is_featured" className="form-check-label">
                  Featured Tour
                </label>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="title" className="form-label">
                  Tour Title
                </label>
                <Field
                  name="title"
                  type="text"
                  className="form-control "
                  placeholder={tour?.title || ""}
                />
              </div>

              <div className="row">
                <div className="form-group mb-3 col-md-6 col-sm-12">
                  <label htmlFor="euro">Euro (€)</label>
                  <Field
                    name="euro"
                    type="number"
                    className="form-control "
                    placeholder={tour?.euro || "150"}
                  />
                </div>

                <div className="form-group mb-3 col-md-6 col-sm-12">
                  <label htmlFor="pound">Pound (£)</label>
                  <Field
                    name="pound"
                    type="number"
                    className="form-control "
                    placeholder={tour?.pound || "165"}
                  />
                </div>

                <div className="form-group mb-3 col-md-6 col-sm-12">
                  <label htmlFor="dollar">Dollar ($)</label>
                  <Field
                    name="dollar"
                    type="number"
                    className="form-control "
                    placeholder={tour?.dollar || "180"}
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
                    placeholder={tour?.ksh || "200"}
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
                    placeholder={tour?.duration || "5"}
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
                    placeholder={tour?.capacity || "5"}
                  />
                </div>
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

              <button type="submit" className="btn auth-btn" disabled={loading}>
                {loading ? "Updating..." : "Update"}
              </button>
            </Form>
          )}
        </Formik>
      </section>
    </div>
  );
}

export default TourDetail;
