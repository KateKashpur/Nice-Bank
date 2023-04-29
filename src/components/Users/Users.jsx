import React from "react";
import styles from "./users.module.css";
import axios, * as others from "axios";
import userPhoto from '../../assets/images/User.png'

class Users extends React.Component {
 getUsers = () => {
    if (this.props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
          this.props.setUsers(response.data.items );
        });
    }
  }

  render () {
    return (
      <div>
        <button onClick={this.getUsers}>Get Users</button>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img src={ u.photos.small != null ? u.photos.small : userPhoto } className={styles.userPhoto} />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div className={styles.userFullname}>{u.name}</div>
                <div className={styles.userStatus}>{u.status}</div>
              </span>
              <span>
                <div className={styles.userLocation}>{'u.location.country'}</div>
                <div className={styles.userLocation}>{'u.location.city'}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    )
  }
}

export default Users;


