"use client";

import { useQuery } from "@tanstack/react-query";
import useAxiosAuth from "../useAxiosAuth";
import {
  clientGetBookingDetail,
  getBookingDetail,
  getBookings,
} from "@/services/bookings";

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
