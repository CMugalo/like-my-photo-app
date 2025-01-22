import React from "react";
import Title from "../components/Title";
import {
  AiFillSmile,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineComment,
} from "react-icons/ai";

import Dog from "../like-my-photo-app/img/Dog.png";

export default function LikePhotoApp() {
  let like = false;
  return (
    <div className="container text-center">
      <Title text={"Like Photo App"} />
      <Title classes={"subtitle"} text={"Likes"} />
      <div
        className="card card-dark m-auto"
        style={{ width: 300, cursor: "pointer" }}
      >
        <div className="card-header fs-xl">
          <AiFillSmile className="mr-2" />
          <small>Dog</small>
        </div>
        <img src={Dog} alt="img" style={{ height: "fit-content" }} />
        <div
          className="card-footer fs-xl d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <AiOutlineComment />{" "}
          {like ? <AiFillHeart className="text-danger" /> : <AiOutlineHeart />}
        </div>
      </div>
    </div>
  );
}
