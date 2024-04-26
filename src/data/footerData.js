import logo from "@/images/resources/logo-3.png";

const social = [
  { icon: "fa-twitter", link: "" },
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-pinterest-p", link: "" },
  { icon: "fa-instagram", link: "" },
];

const footerData = {
  logo,
  social,
  year: new Date().getFullYear(),
  author: "Arya Taprobane Tours",
  about:
  "Welcome to our Tour Agency.\nLet's plan your next adventure.",
  icons: [
    {
      id: 1,
      icon: "fas fa-phone-square-alt",
      content: "+ 94 77 593 8951",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "fas fa-envelope",
      content: "info@aryataprobane.com",
      subHref: "mailto",
    },
    {
      id: 3,
      icon: "fas fa-map-marker-alt",
      content: "No: 7/F, Dombawela, Udugampola, Sri Lanka",
    },
  ],
  companies: [
    { id: 1, link: "/about", title: "About Us" },
    { id: 2, link: "#", title: "Community Blog" },
    { id: 3, link: "#", title: "Rewards" },
    { id: 4, link: "#", title: "Work with Us" },
    { id: 5, link: "#", title: "Meet the Team" },
  ],
  explore: [
    { id: 1, link: "#", title: "Account" },
    { id: 2, link: "#", title: "Legal" },
    { id: 3, link: "#", title: "Contact" },
    { id: 4, link: "#", title: "Affilitate Program" },
    { id: 5, link: "#", title: "Privacy Policy" },
  ],
};

export default footerData;
