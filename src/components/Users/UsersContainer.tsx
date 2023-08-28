import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  requestUsers
} from "../../redux/users-reducers";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from "../../redux/users-selectors";
import { UserType } from "../../Types/Types";
import { AppStateType } from "../../redux/redux-Store";


type MapStatePropsType = {
  currentPage: number;
  pageSize: number;
  isFetching:boolean;
  totalUsersCount: number;
  users: Array<UserType>
  followingInProgress: Array<number>; 
};

type MapDispatchPropsType = {
  requestUsers:(currentPage:number, pageSize:number)=>void;
  unfollow: (userId: number)=>void;
  follow:(userId: number)=>void;
};


type OwnPropsType = {

};


type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {
 // totalCount;
  componentDidMount() {
    const { requestUsers, currentPage, pageSize } = this.props;
    requestUsers(currentPage, pageSize);
  }
  componentDidUpdate() {}
  onPageChanged = (pageNumber:number) => {
    const { requestUsers, pageSize } = this.props;
    requestUsers(pageNumber, pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state: AppStateType) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  withAuthRedirect,
  //<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    follow,
    unfollow,
        //getUsers:
    requestUsers,
  })
)(UsersContainer);
