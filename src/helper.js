import Door1bkg from "./images/1.jpg";
import Door2bkg from "./images/2.jpg";
import Door3bkg from "./images/3.jpg";
import Door4bkg from "./images/4.jpg";
import Door5bkg from "./images/5.jpg";
import Door6bkg from "./images/6.jpg";
import Door7bkg from "./images/7.jpg";
import Door8bkg from "./images/8.jpg";
import Door9bkg from "./images/9.jpg";
import Door10bkg from "./images/10.jpg";

const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export const hatchArray = [
  {
    id: "hatch-1",
    nr: 1,
    img: Door1bkg,
    open: false,
    backFile: Door1bkg,
  },
  {
    id: "hatch-2",
    nr: 2,
    img: Door2bkg,
    open: false,
    backFile: Door3bkg,
  },
  {
    id: "hatch-3",
    nr: 3,
    img: Door3bkg,
    open: false,
    backFile: Door2bkg,
  },
  {
    id: "hatch-4",
    nr: 4,
    img: Door4bkg,
    open: false,
    backFile: Door10bkg,
  },
  {
    id: "hatch-5",
    nr: 5,
    img: Door5bkg,
    open: false,
    backFile: Door1bkg,
  },
  {
    id: "hatch-6",
    nr: 6,
    img: Door6bkg,
    open: false,
    backFile: Door5bkg,
  },
  {
    id: "hatch-7",
    nr: 7,
    img: Door7bkg,
    open: false,
    backFile: Door6bkg,
  },
  {
    id: "hatch-8",
    nr: 8,
    img: Door8bkg,
    open: false,
    backFile: Door9bkg,
  },
  {
    id: "hatch-9",
    nr: 9,
    img: Door9bkg,
    open: false,
    backFile: Door10bkg,
  },
  {
    id: "hatch-10",
    nr: 10,
    img: Door10bkg,
    open: false,
    backFile: Door1bkg,
  },
  {
    id: "hatch-11",
    nr: 11,
    img: Door1bkg,
    open: false,
    backFile: Door5bkg,
  },
  {
    id: "hatch-12",
    nr: 12,
    img: Door2bkg,
    open: false,
    backFile: Door9bkg,
  },
  {
    id: "hatch-13",
    nr: 13,
    img: Door3bkg,
    open: false,
    backFile: Door1bkg,
  },
  {
    id: "hatch-14",
    nr: 14,
    img: Door4bkg,
    open: false,
    backFile: Door7bkg,
  },
  {
    id: "hatch-15",
    nr: 15,
    img: Door5bkg,
    open: false,
    backFile: Door6bkg,
  },
  {
    id: "hatch-16",
    nr: 16,
    img: Door6bkg,
    open: false,
    backFile: Door4bkg,
  },
  {
    id: "hatch-17",
    nr: 17,
    img: Door7bkg,
    open: false,
    backFile: Door5bkg,
  },
  {
    id: "hatch-18",
    nr: 18,
    img: Door8bkg,
    open: false,
    backFile: Door1bkg,
  },
  {
    id: "hatch-19",
    nr: 19,
    img: Door9bkg,
    open: false,
    backFile: Door8bkg,
  },
  {
    id: "hatch-20",
    nr: 20,
    img: Door10bkg,
    open: false,
    backFile: Door7bkg,
  },
  {
    id: "hatch-21",
    nr: 21,
    img: Door1bkg,
    open: false,
    backFile: Door8bkg,
  },
  {
    id: "hatch-22",
    nr: 22,
    img: Door2bkg,
    open: false,
    backFile: Door3bkg,
  },
  {
    id: "hatch-23",
    nr: 23,
    img: Door3bkg,
    open: false,
    backFile: Door4bkg,
  },
  {
    id: "hatch-24",
    nr: 24,
    img: Door4bkg,
    open: false,
    backFile: Door3bkg,
  },
  {
    id: "hatch-25",
    nr: 25,
    img: Door7bkg,
    open: false,
    backFile: Door2bkg,
  },
];

export const createCalendar = shuffle(hatchArray);
