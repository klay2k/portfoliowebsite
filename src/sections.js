import { AiOutlineHome, AiOutlineUser, AiFillPushpin } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";

export const sections = [
  { anchor: "#", navIcon: AiOutlineHome, component: Header },
  { anchor: "#about", navIcon: AiOutlineUser, component: About },
  { anchor: "#experience", navIcon: BiBook, component: Experience },
  { anchor: "#portfolio", navIcon: AiFillPushpin, component: Portfolio },
  { anchor: "#contact", navIcon: BiMessageSquareDetail, component: Contact },
];
