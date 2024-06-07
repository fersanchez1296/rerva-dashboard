/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Historial from "layouts/historial";
import Documentos from "layouts/documentos";
import Autores from "layouts/autores";
import Usuarios from "layouts/users";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Logout from "layouts/authentication/logout/Logout";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">analytics</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Solicitudes",
    key: "solicitudes",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/solicitudes",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Historial",
    key: "historial",
    icon: <Icon fontSize="small">history</Icon>,
    route: "/historial",
    component: <Historial />,
  },
  {
    type: "collapse",
    name: "Documentos",
    key: "documentos",
    icon: <Icon fontSize="small">grading</Icon>,
    route: "/documentos",
    component: <Documentos />,
  },
  {
    type: "collapse",
    name: "Autores",
    key: "autores",
    icon: <Icon fontSize="small">record_voice_over_icon</Icon>,
    route: "/Autores",
    component: <Autores />,
  },
  {
    type: "collapse",
    name: "Subscriptores",
    key: "subs",
    icon: <Icon fontSize="small">subscriptions</Icon>,
    route: "/Autores",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Reportes",
    key: "reportes",
    icon: <Icon fontSize="small">summarize</Icon>,
    route: "/reportes",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Registrar usuario",
    key: "sign-up",
    icon: <Icon fontSize="small">person_add_alt</Icon>,
    route: "/register",
    component: <SignUp />,
  },
  {
    type: "collapse",
    name: "Usuarios",
    key: "usuarios",
    icon: <Icon fontSize="small">people_icon</Icon>,
    route: "/user-delete",
    component: <Usuarios />,
  },
  {
    type: "collapse",
    name: "Cerrar Sesión",
    key: "cerrar-sesion",
    icon: <Icon fontSize="small">logoutIcon</Icon>,
    route: "/logout",
    component: <Logout />,
  },
];

export default routes;
