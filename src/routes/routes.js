import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";
import Login from "@/pages/Login.vue";
import SignUp from "@/pages/SignUp.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "user",
        name: "Perfil do Usuário",
        component: UserProfile
      },
      {
        path: "table",
        name: "Cotação",
        component: TableList
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography
      },
      {
        path: "icons",
        name: "Notícias",
        component: Icons
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      },
      {
        path:'login',
        name:'login',
        component:Login
      },
      {
        path:'registrar',
        name:'signUp',
        component:SignUp
      },
      {
        path: "upgrade",
        name: "SOBRE NÓS",
        component: UpgradeToPRO
      }
    ]
  }
];

export default routes;
