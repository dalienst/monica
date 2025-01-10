"use client";

import { useQuery } from "@tanstack/react-query";
import {
  clientGetBookingDetail,
  getBookingDetail,
  getBookings,
} from "@/services/bookings";
import useAxiosAuth from "../authentication/useAxiosAuth";

export function useFetchBookings() {
  const axios = useAxiosAuth();

  return useQuery({
    queryKey: ["bookings"],
    queryFn: () => getBookings(axios),
  });
}

export function useFetchBookingDetail(slug) {
  const axios = useAxiosAuth();

  return useQuery({
    queryKey: ["booking", slug],
    queryFn: () => getBookingDetail(slug, axios),
  });
}

export function useClientGetBookingDetail(reference) {
  return useQuery({
    queryKey: ["booking", reference],
    queryFn: () => clientGetBookingDetail(reference),
  });
}
