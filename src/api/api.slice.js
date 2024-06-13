import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://148.202.89.67:4000/api/",
    //baseUrl: "https://rerva-backend-104f4d2354cf.herokuapp.com/api/",
    //baseUrl: "http://localhost:4000/api/",
    credentials: "include",
  }),
  tagTypes: ["Solicitudes", "Historial", "Usuarios"],
  endpoints: (builder) => ({
    getSolicitudes: builder.query({
      query: () => ({
        url: `/solicitudes`,
        method: "GET",
      }),
      providesTags: ["Solicitudes"],
    }),
    aceptarSolicitud: builder.mutation({
      query: ({ id, data }) => ({
        url: `/solicitud/aceptar/${id}`,
        body: data,
        method: "PUT",
      }),
      invalidatesTags: ["Solicitudes"],
    }),
    rechazarSolicitud: builder.mutation({
      query: ({ id, data }) => ({
        url: `/solicitud/rechazar/${id}`,
        body: data,
        method: "PUT",
      }),
      invalidatesTags: ["Solicitudes"],
    }),
    deleteSolicitud: builder.mutation({
      query: ({ id }) => ({
        url: `/solicitud/${id}`,
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
      providesTags: ["Usuarios"],
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
    postUser: builder.mutation({
      query: (credentials) => ({
        url: "/register",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Usuarios"],
    }),
    putUser: builder.mutation({
      query: (credentials) => ({
        url: `/usuarios/${credentials.selectedId}`,
        method: "PUT",
        body: credentials,
      }),
      invalidatesTags: ["Usuarios"],
    }),
    deleteUser: builder.mutation({
      query: (credentials) => ({
        url: `/usuarios/${credentials.selectedId}`,
        method: "DELETE",
        body: credentials,
      }),
      invalidatesTags: ["Usuarios"],
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
    //eliminar esta
    updateSolicitud: builder.mutation({
      query: ({ id, data }) => ({
        url: `/updateSolicitud/${id}`,
        body: data,
        method: "PUT",
      }),
      invalidatesTags: ["Solicitudes"],
    }),
  }),
  keepUnusedDataFor: 300,
});

export const {
  useGetSolicitudesQuery,
  useAceptarSolicitudMutation,
  useRechazarSolicitudMutation,
  useGetDocumentsQuery,
  useGetHistorialQuery,
  useBusquedasMutation,
  useDashboard_estadisticasQuery,
  useDeleteSolicitudMutation,
  useLoginMutation,
  useLogoutMutation,
  usePostUserMutation,
  usePutUserMutation,
  useDeleteUserMutation,
  useGetAuthorsQuery,
  useGetUsersQuery,
  useUpdateSolicitudMutation,
} = apiSlice;
