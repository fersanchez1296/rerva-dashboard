import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    //baseUrl: "http://148.202.89.67:4000/api/",
    //baseUrl: "https://rerva-backend-104f4d2354cf.herokuapp.com/api/",
    baseUrl: "http://localhost:4000/api/",
    credentials: "include",
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
    deleteSolicitud: builder.mutation({
      query: ({ id }) => ({
        url: `/deleteSolicitud/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Solicitudes"],
    }),
    getDocuments: builder.query({
      query: () => ({
        url: `/getDocumentsDashboard`,
        method: "GET",
      }),
    }),
    getAuthors: builder.query({
      query: () => ({
        url: `/autores`,
        method: "GET",
      }),
    }),
    getUsers: builder.query({
      query: () => ({
        url: `/usuarios`,
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
        body: data,
        method: "POST",
      }),
      providesTags: ["Busquedas"],
    }),
    dashboard_estadisticas: builder.query({
      query: () => ({
        url: `/dashboard/estadisticas`,
        method: "GET",
      }),
      providesTags: ["Estadisticas"],
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: "/register",
        method: "POST",
        body: credentials,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
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
  useDashboard_estadisticasQuery,
  useDeleteSolicitudMutation,
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useGetAuthorsQuery,
  useGetUsersQuery,
} = apiSlice;
