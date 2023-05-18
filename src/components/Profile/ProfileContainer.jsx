import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import axios, * as others from "axios";
import setUserProfile from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";
 
export class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.userId;
   
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }
  render() {
    return (<Profile {...this.props} profile={this.props.profile} />)
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});
let WithUrlDataContainerComponent = (props) => {
  const params = useParams();
  return (<ProfileContainer {...props} userId={params.userId ? params.userId : '28914'} />)
};
export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);
