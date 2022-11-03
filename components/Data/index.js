import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const data = {
  footerLinks: {
    discover: [
      { id: 1, name: "Dining Rewards", href: "" },
      { id: 2, name: "Private Dining", href: "" },
      { id: 3, name: "Reserve for Others", href: "" },
      { id: 4, name: "Cuisines Near Me", href: "" },
      { id: 5, name: "Restaurants Near Me", href: "" },
      
    ],
    opentable: [
      { id: 1, name: "About Us", href: "" },
      { id: 2, name: "Blog", href: "" },
      { id: 3, name: "Careers", href: "" },
      { id: 4, name: "Press", href: "" },
      { id: 5, name: "Press", href: "" },
    ],
    
    ourSites: [
      { id: 1, name: "OpenTable.jp", href: "" },
      { id: 2, name: "OpenTable.de", href: "" },
      { id: 3, name: "OpenTable.es", href: "" },
      { id: 4, name: "OpenTable.ca", href: "" },
      { id: 5, name: "OpenTable.hk", href: "" },
      
    ],
    businesses: [
      { id: 1, name: "Delight more diners", href: "" },
      { id: 2, name: "Open for Business Blog", href: "" },
    ],
    social: [
      {
        id: 1,
        href: "#",
        icon: <AiOutlineInstagram className=" inline text-xl" />,
      },
      {
        id: 2,
        href: "#",
        icon: <AiOutlineTwitter className=" inline text-xl" />,
      },
      { id: 3, href: "#", icon: <FiLinkedin className=" inline text-xl" /> },
      { id: 4, href: "#", icon: <FiFacebook className="inline text-xl" /> },
    ],
    links_2: [
      {
        id: 1,
        href: "#",
        name: "Privacy Policy",
      },
      {
        id: 2,
        href: "#",
        name: "Terms of Use",
      },
      {
        id: 3,
        href: "#",
        name: "Cookies and Interest-Based Ads",
      },
      {
        id: 4,
        href: "#",
        name: "Do Not Sell",
      },
      {
        id: 5,
        href: "#",
        name: "Cookies Settings",
      },
    ],
  },
  Companies: [
    { id: 1, img: "/assets/Walmart Logo.png" },
    { id: 2, img: "/assets/Frame.png" },
    { id: 3, img: "/assets/Group.png" },
    { id: 4, img: "/assets/Frame (1).png" },
    { id: 5, img: "/assets/Frame (2).png" },
  ],
  Services: [
    { id: 1, name: "Manicure", img: "/assets/Rectangle 9 (1).png" },
    { id: 2, name: "Pedicure", img: "/assets/Rectangle 9 (2).png" },
    { id: 3, name: "Haircut", img: "/assets/Rectangle 9 (3).png" },
    { id: 4, name: "IV therap", img: "/assets/Rectangle 9 (4).png" },
    { id: 5, name: "Trimming", img: "/assets/Rectangle 9 (5).png" },
    
  ],
};
export default data;
