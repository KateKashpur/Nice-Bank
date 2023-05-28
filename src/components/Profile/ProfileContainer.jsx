import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import { useLocation, useNavigate, Navigate, useParams } from "react-router-dom";
 
 class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
   if (!userId) {userId = 2}
  this.props.getUserProfile(userId)
  }
  render() {
    return (<Profile {...this.props} profile={this.props.profile} />)
  }
}

function withRouter(Component) {

  function ComponentWithRouterProp(props) {

     let location = useLocation();
     let navigate = useNavigate();
     let params = useParams();
     return (
        <Component
           {...props}
           router={{location, navigate, params}}
        />
     );
  }

  return ComponentWithRouterProp;
}




let AuthNavigateComponent = (props) => {
  if (!this.props.isAuth) return <Navigate to={"/login/"}/>
  return <ProfileContainer {...props} />
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
});




let WithUrlDataContainerComponent = (props) => {
  const params = useParams();
  return (<ProfileContainer />)
};
export default connect(mapStateToProps, { getUserProfile })(withRouter( ProfileContainer ) );
