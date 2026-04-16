import App from "@/App"; 
import DashboardLayout from "@/components/layout/DashboardLayout";
import AddTour from "@/pages/Admin/AddTour";
import Analytics from "@/pages/Admin/Analytics";
import Homepage from "@/pages/Homepage";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import booking from "@/pages/User/booking";
import Verify from "@/pages/Verify"; 
import { createBrowserRouter } from "react-router" 

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Homepage,
        index: true,
      }, 
    ],
  },
  {
    Component: DashboardLayout,
    path: "/admin",
    children: [
     { 
        Component: Analytics,
        path: "analytics",
      
      },
     { 
        Component: AddTour,
        path: "add-tour",
      
      },
    ]
  },
  {
    Component: DashboardLayout,
    path: "/user",
    children: [
     { 
        Component: booking,
        path: "booking",
      
      }
    ]
  },
   
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
  {
    Component: Verify,
    path: "/verify",
  },
   
]);