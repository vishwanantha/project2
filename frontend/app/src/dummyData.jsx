import img1 from './assets/person/1.jpeg'
import img2 from './assets/person/2.jpeg'
import img3 from './assets/person/3.jpeg'
import img4 from './assets/person/4.jpeg'
import photo1 from './assets/post/1.jpeg'
import photo2 from './assets/post/2.jpeg'
import photo3 from './assets/post/3.jpeg'
import photo4 from '././assets/post/4.jpeg'
export const Users = [
  {
    id:1,
    profilePicture: {img1},
    username: "Safak Kocaoglu",
  },
  {
    id:2,
    profilePicture: {img2},
    username: "Janell Shrum",
  },
  {
    id:3,
    profilePicture: {img3},
    username: "Alex Durden",
  },
  {
    id:4,
    profilePicture: {img4},
    username: "Dora Hawks",
  },

];
export const Posts = [
  {
    id: 1,
    desc: "Love For All, Hatred For None.",
    photo: {photo1},
    date: "5 mins ago",
    userId: 1,
    like: 32,
    comment: 9,
  },
  {
    id: 2,
    photo: {photo2},
    date: "15 mins ago",
    userId: 2,
    like: 2,
    comment: 1,
  },
  {
    id: 3,
    desc: "Every moment is a fresh beginning.",
    photo: {photo3},
    date: "1 hour ago",
    userId: 3,
    like: 61,
    comment: 2,
  },
  {
    id: 4,
    photo: {photo4},
    date: "4 hours ago",
    userId: 4,
    like: 7,
    comment: 3,
  },
]