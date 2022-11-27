// import Door1bkg from "./images/1.jpg";
import FrontDoor from "./images/7.jpg";
import Chick from "./images/chick.jpg";
import Cat from "./images/cat.jpg";
import Dog from "./images/dog.jpg";
const shuffle = (a) => {
  return a.sort(() => Math.random() - 0.5);
};

const current = new Date();
const date = `${current.getDate()}/${
  current.getMonth() + 1
}/${current.getFullYear()}`;

export const hatchArray = [
  {
    id: "hatch-1",
    nr: 1,
    img: FrontDoor,
    open: false,
    backFile: Cat,
  },
  {
    id: "hatch-2",
    nr: 2,
    img: FrontDoor,
    open: false,
    backFile: Dog,
  },
  {
    id: "hatch-3",
    nr: 3,
    img: FrontDoor,
    open: false,
    backFile: Cat,
  },
  {
    id: "hatch-4",
    nr: 4,
    img: FrontDoor,
    open: false,
    backFile: "https://www.youtube.com/embed/nrrSs1JI2mU",
  },
  {
    id: "hatch-5",
    nr: 5,
    img: FrontDoor,
    open: false,
    backFile: Chick,
  },
  {
    id: "hatch-6",
    nr: 6,
    img: FrontDoor,
    open: false,
    backFile: Chick,
  },
  {
    id: "hatch-7",
    nr: 7,
    img: FrontDoor,
    open: false,
    backFile: Cat,
  },
  {
    id: "hatch-8",
    nr: 8,
    img: FrontDoor,
    open: false,
    backFile: "https://www.youtube.com/embed/nrrSs1JI2mU",
  },
  {
    id: "hatch-9",
    nr: 9,
    img: FrontDoor,
    open: false,
    backFile: Dog,
  },
  {
    id: "hatch-10",
    nr: 10,
    img: FrontDoor,
    open: false,
    backFile: Chick,
  },
  {
    id: "hatch-11",
    nr: 11,
    img: FrontDoor,
    open: false,
    backFile: Chick,
  },
  {
    id: "hatch-12",
    nr: 12,
    img: FrontDoor,
    open: false,
    backFile: Chick,
  },
  {
    id: "hatch-13",
    nr: 13,
    img: FrontDoor,
    open: false,
    backFile: "https://www.youtube.com/embed/nrrSs1JI2mU",
  },
  {
    id: "hatch-14",
    nr: 14,
    img: FrontDoor,
    open: false,
    backFile: Chick,
  },
  {
    id: "hatch-15",
    nr: 15,
    img: FrontDoor,
    open: false,
    backFile: Cat,
  },
  {
    id: "hatch-16",
    nr: 16,
    img: FrontDoor,
    open: false,
    backFile: "https://www.youtube.com/embed/nrrSs1JI2mU",
  },
  {
    id: "hatch-17",
    nr: 17,
    img: FrontDoor,
    open: false,
    backFile: Chick,
  },
  {
    id: "hatch-18",
    nr: 18,
    img: FrontDoor,
    open: false,
    backFile: Cat,
  },
  {
    id: "hatch-19",
    nr: 19,
    img: FrontDoor,
    open: false,
    backFile: Dog,
  },
  {
    id: "hatch-20",
    nr: 20,
    img: FrontDoor,
    open: false,
    backFile: "https://www.youtube.com/embed/nrrSs1JI2mU",
  },
  {
    id: "hatch-21",
    nr: 21,
    img: FrontDoor,
    open: false,
    backFile: Cat,
  },
  {
    id: "hatch-22",
    nr: 22,
    img: FrontDoor,
    open: false,
    backFile: Chick,
  },
  {
    id: "hatch-23",
    nr: 23,
    img: FrontDoor,
    open: false,
    backFile: Cat,
  },
  {
    id: "hatch-24",
    nr: 24,
    img: FrontDoor,
    open: false,
    backFile: "https://www.youtube.com/embed/nrrSs1JI2mU",
  },
  {
    id: "hatch-25",
    nr: 25,
    img: FrontDoor,
    open: false,
    backFile: "https://www.youtube.com/embed/g-OF7KGyDis",
  },
];

export const createCalendar = shuffle(hatchArray);
export default date;
