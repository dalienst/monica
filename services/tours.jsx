import { apiMultipartActions } from "@/tools/api";

export const createTour = async (formData, axios) => {
  await apiMultipartActions?.post("/api/tours/create/", formData, axios);
};

export const getTours = async (axios) => {
  const response = await apiMultipartActions?.get("/api/tours/create/", axios);
  return response?.data?.results || [];
};

export const getTourDetail = async (slug, axios) => {
  const response = await apiMultipartActions?.get(`/api/tours/${slug}/`, axios);
  return response?.data || {};
};

// Public endpoints
export const getAllTours = async () => {
  const response = await apiMultipartActions?.get("/api/tours/");
  return response?.data?.results || [];
};

export const getAllTourDetail = async (reference) => {
  const response = await apiMultipartActions?.get(`/api/tours/${reference}/`);
  return response?.data || {};
};
