import React from "react";
import styles from "./users.module.css";

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://th.bing.com/th/id/OIP.cwHlCRLDC2AjDf0N28ZwvwHaE7?pid=ImgDet&rs=1",
        followed: true,
        fullName: "Nikitosik",
        status: "honey",
        location: { city: "Kiev", country: "Ukrein" },
      },
      {
        id: 2,
        photoUrl:
          "https://th.bing.com/th/id/R.6bf1a166706fdc757b34206e82c21d66?rik=qqNDHSEyiNReRg&riu=http%3a%2f%2fvignette2.wikia.nocookie.net%2funcyclopedia%2fimages%2f8%2f8b%2fStupid_cat_3.jpg%2frevision%2flatest%2fscale-to-width-down%2f350%3fcb%3d20110301040829&ehk=YVg4%2bb%2fjbqpkQ%2fdWrhyEv%2b0XtcFSWyXV1H7UF25ix9o%3d&risl=&pid=ImgRaw&r=0",
        followed: false,
        fullName: "Dimon",
        status: "bro",
        location: { city: "Kiev", country: "Ukrein" },
      },
      {
        id: 3,
        photoUrl:
          "https://th.bing.com/th/id/R.80410ee0f53101b2f288a0b59d01cf04?rik=6RZ%2bFNS6ecyP%2bA&pid=ImgRaw&r=0",
        followed: true,
        fullName: "Ira",
        status: "mommy",
        location: { city: "Kiev", country: "Ukrein" },
      },
      {
        id: 4,
        photoUrl:
          "https://th.bing.com/th/id/R.df5cb8411d09b3e4f3e0db213bf3bdd2?rik=%2f4MCDC%2fSVYKvWw&pid=ImgRaw&r=0",
        followed: true,
        fullName: "Sergey",
        status: "taddy",
        location: { city: "Kiev", country: "Ukrein" },
      },
      {
        id: 5,
        photoUrl:
          "https://th.bing.com/th/id/R.23d027458bbfdeb29c8f281c783bef9a?rik=xnOQjIPwXj5O2A&riu=http%3a%2f%2f2.bp.blogspot.com%2f-s-w7uHGlv8g%2fUvZ8DCZfShI%2fAAAAAAAAAGY%2fDSzeEgpYfkM%2fs1600%2fCute-Fat-Cat-HD-Wallpaper-_zps5f16c205.jpg&ehk=koEvpRX3HV3o64FhqsVWE2XI7Q0sCAB3rmtgiCDzoCg%3d&risl=&pid=ImgRaw&r=0",
        followed: false,
        fullName: "Alla",
        status: "busya",
        location: { city: "Bucha", country: "Ukrein" },
      },
      {
        id: 6,
        photoUrl:
          "https://th.bing.com/th/id/R.9c0fb1e9a90db4bd388729dd912307dc?rik=%2fAbDaq6Y5nILlw&pid=ImgRaw&r=0",
        followed: false,
        fullName: "Lena",
        status: "ann",
        location: { city: "Brovary", country: "Ukrein" },
      },
      {
        id: 7,
        photoUrl:
          "https://th.bing.com/th/id/OIP.v8y0J3HqoIqMMpOdv_EaIAHaFj?pid=ImgDet&rs=1",
        followed: true,
        fullName: "Ruslan",
        status: "old bro",
        location: { city: "Kiev", country: "Ukrein" },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={styles.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div className={styles.userFullname}>{u.fullName}</div>
              <div className={styles.userStatus}>{u.status}</div>
            </span>
            <span>
              <div className={styles.userLocation}>{u.location.country}</div>
              <div className={styles.userLocation}>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
