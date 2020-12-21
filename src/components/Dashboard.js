// import React, { Component } from "react";
// import Footer from "./FooterComponent";

// class Dashboard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentUser: null,
//       loading: true,
//     };
//   }

//   async componentDidMount() {
//     const user =
//       localStorage.getItem("user") || localStorage.getItem("doctor") || null;
//     await this.setState({ currentUser: JSON.parse(user) });
//     console.log(this.state.currentUser);
//     if (this.state.currentUser == null) {
//       window.location.href = "http://localhost:3000/";
//     }
//     this.setState({ loading: false });
//   }

//   render() {
//     if (this.state.loading) {
//       return (
//         <div className="vert-align">
//           <div className="loader">Loading...</div>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <div className="vert-align">
//             <div className="centre-align-dashboard">
//               <div className="user-img">
//                 <img
//                   src="/assets/images/DefaultUser.jpg"
//                   alt="User"
//                   className="rounded-circle"
//                   width="150px"
//                   height="150px"
//                 />
//               </div>
//               <div className="user-info">
//                 <div className="user-details">
//                   <strong>First Name: </strong>
//                   {this.state.currentUser.firstname}
//                 </div>
//                 <div className="user-details">
//                   <strong>Last Name: </strong>
//                   {this.state.currentUser.lastname}
//                 </div>
//                 <div className="user-details">
//                   <strong>Full Name: </strong>
//                   {this.state.currentUser.firstname +
//                     this.state.currentUser.lastname}
//                 </div>
//                 <div className="user-details">
//                   <strong>Username: </strong>
//                   {this.state.currentUser.username}
//                 </div>
//                 <div className="user-details">
//                   <strong>Email: </strong>
//                   {this.state.currentUser.email}
//                 </div>
//               </div>
//             </div>
//             <Footer />
//           </div>
//         </div>
//       );
//     }
//   }
// }

// export default Dashboard;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <div style={{marginTop: "2rem"}}></div>
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      <AppBar position="fixed" className={classes.appBar}>
        <Header />
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div style={{marginTop:"2rem"}}className={classes.drawerContainer}>
          
          <List>
            {['Appointments', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <h2 style={{fontWeight:"bold"}}>Dashboard</h2>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </div>
    {/* <Footer /> */}
    </div>
  );
}
