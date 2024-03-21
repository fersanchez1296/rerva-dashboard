import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    //baseUrl: "http://148.202.89.67:4000/api/",
    //baseUrl: "https://rerva-backend-104f4d2354cf.herokuapp.com/api/",
    baseUrl: "http://localhost:4000/api/",
  }),
  tagTypes: ["Solicitudes", "Historial"],
  endpoints: (builder) => ({
    getSolicitudes: builder.query({
      query: () => ({
        url: `/getSolicitudes`,
        method: "GET",
      }),
      providesTags: ["Solicitudes"],
    }),
    updateSolicitud: builder.mutation({
      query: ({ id, data }) => ({
        url: `/updateSolicitud/${id}`,
        body: data,
        method: "PUT",
      }),
      invalidatesTags: ["Solicitudes"],
    }),
    getDocuments: builder.query({
      query: () => ({
        url: `/getDocumentsDashboard`,
        method: "GET",
      }),
    }),
    getHistorial: builder.query({
      query: () => ({
        url: `/getHistorial`,
        method: "GET",
      }),
      providesTags: ["Historial"],
    }),
    updateHistorial: builder.query({
      query: () => ({
        url: `/updateHistorial`,
        method: "GET",
      }),
      providesTags: ["Historial"],
    }),
    busquedas: builder.mutation({
      query: ({ data }) => ({
        url: `/Busquedas`,
        method: "POST",
        body: data,
      }),
      providesTags: ["Busquedas"],
    }),
  }),
  keepUnusedDataFor: 300,
});

export const {
  useGetSolicitudesQuery,
  useUpdateSolicitudMutation,
  useGetDocumentsQuery,
  useGetHistorialQuery,
  useBusquedasMutation,
} = apiSlice;
