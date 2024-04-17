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

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import { useDashboard_estadisticasQuery } from "api/api.slice";
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import { Spiner } from "components/Spiner/Spiner";
// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

function Dashboard() {
  const { data, isLoading } = useDashboard_estadisticasQuery();
  const { sales, tasks } = reportsLineChartData;
  const labelsline = ["HCC", "CS", "BQ", "CAB", "CFMCT", "IT", "S/I", "MC"];
  const labelsCountries = [
    "ALM", // Alemania
    "ARG", // Argentina
    "AUT", // Austria
    "BOL", // Bolivia
    "BRA", // Brasil
    "BUL", // Bulgaria
    "CAN", // Canadá
    "CHL", // Chile
    "CHN", // China
    "COL", // Colombia
    "CRC", // Costa Rica
    "CUB", // Cuba
    "ECU", // Ecuador
    "ESP", // España
    "EEUU", // Estados Unidos
    "FRA", // Francia
    "HOL", // Holanda
    "IND", // India
    "ING", // Inglaterra
    "ITA", // Italia
    "JPN", // Japón
    "MEX", // México
    "NZL", // Nueva Zelanda
    "PBL", // Países Bajos
    "PER", // Perú
    "RU", // Reino Unido
    "RCH", // República Checa
    "S/I", // S/I
    "SUI", // Suiza
    "VEN", // Venezuela
  ];

  if (isLoading) {
    return <Spiner />;
  }
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="article"
                title="Total de Documentos"
                count={data.documentosData.tDocumentos}
                // percentage={{
                //   color: "success",
                //   amount: "+55%",
                //   label: "than lask week",
                // }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="group"
                title="Total del Autores"
                count={data.documentosData.tAutores}
                // percentage={{
                //   color: "success",
                //   amount: "+3%",
                //   label: "than last month",
                // }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="escalator"
                title="Total de Áreas"
                count={data.documentosData.tAreas}
                // percentage={{
                //   color: "success",
                //   amount: "+1%",
                //   label: "than yesterday",
                // }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="escalator"
                title="Total de Campos"
                count={data.documentosData.tCampos}
                // percentage={{
                //   color: "success",
                //   amount: "+1%",
                //   label: "than yesterday",
                // }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="escalator"
                title="Total de Disciplinas"
                count={data.documentosData.tDisciplinas}
                // percentage={{
                //   color: "success",
                //   amount: "",
                //   label: "Just updated",
                // }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="public"
                title="Países de Publicación"
                count={data.documentosData.tPaises}
                // percentage={{
                //   color: "success",
                //   amount: "",
                //   label: "Just updated",
                // }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="business"
                title="Total de Instituciones"
                count={data.documentosData.tInstituciones}
                // percentage={{
                //   color: "success",
                //   amount: "+3%",
                //   label: "than last month",
                // }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="newspaper"
                title="Total de Revistas"
                count={data.documentosData.tRevistas}
                // percentage={{
                //   color: "success",
                //   amount: "+55%",
                //   label: "than lask week",
                // }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={12}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="website views"
                  description="Last Campaign Performance"
                  date="campaign sent 2 days ago"
                  labels={labelsCountries}
                  chart={data.documentosGraphicsData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="daily sales"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date="updated 4 min ago"
                  labels={labelsline}
                  chart={data.documentosGraphicsData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="completed tasks"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
