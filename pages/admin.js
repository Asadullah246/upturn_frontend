import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import PersonIcon from '@mui/icons-material/Person';
import Person2Icon from '@mui/icons-material/Person2';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Dashboard from '../components/admin_dashboard/Dashboard';
import Mentor from '../components/admin_dashboard/Mentor';
import User from '../components/admin_dashboard/User';
// edit user icon
import EditIcon from '@mui/icons-material/Edit';
import Edit_user from '../components/admin_dashboard/Edit_user';
import UpcomingCourse from '../components/admin_dashboard/UpcomingCourse';
import OfferCourse from '../components/admin_dashboard/OfferCourse';
import Image from 'next/image';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [page, setPage] = React.useState("Dashboard")

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handlePage = (pageName) => {
    setPage(pageName);
  };

  const managePage = (currentPage) => {
    switch (currentPage) {
      case "Dashboard":
        return <Dashboard/>

      case "Mentor":
        return <Mentor/>


        // edit users I will remove this code When I finished this work
      case "Edit User":
        return <Edit_user/>

      // You can have more cases as needed
      case "User":
        return <User/>

      case "Upcoming Course":
        return <UpcomingCourse/>

      case "Offer Course":
        return <OfferCourse/>

      default:
        <Dashboard/>
        // Code to be executed if none of the cases match the expression
    }
  };

  const drawer = (
    <div style={{backgroundColor:"rgba(233, 196, 106, 0.6)", color:"black !important" }}>
      <Toolbar>
      <ListItem  disablePadding>
                <ListItemButton style={{paddingLeft:0, paddingRight:0}}>
                    <ListItemIcon style={{minWidth:"36px "}}>
                    {/* <img src={"icon/adminLogo.png"} alt="Admin" /> */}
                    <Image
                      src="/icon/adminLogo.png"
                      alt=""
                      height="24"
                      width="24"
                    />
                    </ListItemIcon>
                    {/* <ListItemText primary={"Admin Panel"} style={{fontSize:"2rem", fontWeight:"700"}} /> */}
                    <h4 className='mb-0 fw-bold'>Admin Panel</h4>
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
                { text: 'Dashboard', icon:"/icon/dashboardAdmin.png"  },
                { text: 'Mentor', icon:"/icon/mentorAdmin.png"},
                { text: 'User', icon: "/icon/userAdmin.png" },
                { text: 'Edit User', icon:"/icon/dashboardAdmin.png"},
                { text: 'Virtual Classroom', icon: "/icon/virtualClassroomAdmin.png"},
                { text: 'Upcoming Course', icon:"/icon/upcomingCourseAdmin.png" },
                { text: 'Offer Course', icon: "/icon/offerCourseAdmin.png" },
            ]
            .map((item, index) => (
                <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={()=>handlePage(item.text)}>
                    <ListItemIcon style={{minWidth:"36px"}}>
                    {/* {item.icon} */}
                    <Image
                      src={item.icon}
                      alt=""
                      height="20"
                      width="20"
                    />
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                </ListItemButton>
                </ListItem>
            ))}
        </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor:"white",
          boxShadow:"none",
          borderBottom:"4px solid #DCDCDC"
        }}
      >
        <Toolbar>
          <IconButton
            color="red"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <div className='text-black '>thisidf</div>
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
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        {/* <Toolbar /> */}
        {
          managePage(page)
        }
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
