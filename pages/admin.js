import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import PersonIcon from "@mui/icons-material/Person";
import Person2Icon from "@mui/icons-material/Person2";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import Dashboard from "../components/admin_dashboard/Dashboard";
import WebsiteInfo from "../components/admin_dashboard/WebsiteInfo";
import User from "../components/admin_dashboard/User";
// edit user icon
import EditIcon from "@mui/icons-material/Edit";
import Edit_user from "../components/admin_dashboard/Edit_user";
import UpcomingCourse from "../components/admin_dashboard/UpcomingCourse";
import OfferCourse from "../components/admin_dashboard/OfferCourse";
import Image from "next/image";
import UploadBlog from "../components/admin_dashboard/UploadBlog";
import Blogs from "../components/admin_dashboard/Blogs";
import { useRouter } from "next/router";
import { ToastSuccess } from "../components/shared/ToastAlerts";
import AddService from "../components/admin_dashboard/AddService";
import Services from "../components/admin_dashboard/Services";
import TeamMembers from "../components/admin_dashboard/TeamMembers";
import CreateTeam from "../components/admin_dashboard/CreateTeam";
import CreateTestimonial from "../components/admin_dashboard/CreateTestimonial";
import Testimonials from "../components/admin_dashboard/Testimonials";
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const router = useRouter();

  React.useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/login");
        return;
      }
    };

    checkAuth();
  }, []);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [page, setPage] = React.useState("Website Info");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handlePage = (pageName) => {
    if(pageName==="Log Out"){
      localStorage.removeItem("token")
      localStorage.removeItem("adminId")
      router.push("/")
    }
    else {
      setPage(pageName);
    }

  };

  const managePage = (currentPage) => {
    switch (currentPage) {
      case "Dashboard":
        return <Dashboard />;

      case "Website Info":
        return <WebsiteInfo />;
      case "Blogs":
        return <Blogs />;
      case "New Blog":
        return <UploadBlog />;

        case "Services":
          return <Services />;

      case "Add Service":
        return <AddService />;

      case "Edit User":
        return <Edit_user />;
      case "Team":
        return <TeamMembers />;
      case "New Team Member":
        return <CreateTeam />;
      case "Testimonial":
        return <Testimonials />;
      case "Create Testimonial":
        return <CreateTestimonial/>;


      default:
        <WebsiteInfo /> ;
      // Code to be executed if none of the cases match the expression
    }
  };

  const drawer = (
    <div style={{ minHeight: "100vh" }}>
      <Toolbar>
        <ListItem disablePadding>
          <ListItemButton style={{ paddingLeft: 0, paddingRight: 0 }}>
            <ListItemIcon style={{ minWidth: "36px " }}>
              {/* <img src={"icon/adminLogo.png"} alt="Admin" /> */}
              <Image src="/icon/adminLogo.png" alt="" height="24" width="24" />
            </ListItemIcon>
            {/* <ListItemText primary={"Admin Panel"} style={{fontSize:"2rem", fontWeight:"700"}} /> */}
            <h5 className="mb-0 fw-bold">Admin Panel</h5>
          </ListItemButton>
        </ListItem>
      </Toolbar>
      <List>
        {
          // [
          //     { text: 'Dashboard', icon: <AdminPanelSettingsIcon style={{height:24,  width:24}} /> },
          //     { text: 'Mentor', icon: <PersonIcon style={{height:24,  width:24}} /> },
          //     { text: 'User', icon: <Person2Icon style={{height:24,  width:24}} /> },
          //     { text: 'Edit User', icon: <EditIcon style={{height:24,  width:24}} /> },
          //     { text: 'Virtual Classroom', icon: <MeetingRoomIcon style={{height:24,  width:24}} /> },
          //     { text: 'Upcoming Course', icon: <CalendarMonthIcon style={{height:24,  width:24}} /> },
          //     { text: 'Offer Course', icon: <LocalOfferIcon /> },
          // ]
          [
            // { text: "Dashboard", icon: "/icon/dashboardAdmin.png" },
            { text: "Website Info", icon: "/icon/mentorAdmin.png" },
            { text: "Blogs", icon: "/icon/userAdmin.png" },
            { text: "New Blog", icon: "/icon/userAdmin.png" },
            { text: "Edit User", icon: "/icon/dashboardAdmin.png" },
            { text: "Services", icon: "/icon/dashboardAdmin.png" },
            { text: "Add Service", icon: "/icon/dashboardAdmin.png" },
            { text: "Team", icon: "/icon/userAdmin.png" },
            { text: "New Team Member", icon: "/icon/userAdmin.png" },
            { text: "Testimonial", icon: "/icon/mentorAdmin.png" },
            { text: "Create Testimonial", icon: "/icon/mentorAdmin.png" },
            { text: "Log Out", icon: "/icon/dashboardAdmin.png" },

          ].map((item, index) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton onClick={() => handlePage(item.text)}>
                <ListItemIcon style={{ minWidth: "36px" }}>
                  {/* {item.icon} */}
                  <Image src={item.icon} alt="" height="20" width="20" />
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "white",
          boxShadow: "none",
          borderBottom: "4px solid #DCDCDC",
        }}
      >
        <Toolbar>
          <IconButton
            color="red"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        {/* <div className='text-black '>thisidf</div> */}
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/* <Toolbar /> */}
        {managePage(page)}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
