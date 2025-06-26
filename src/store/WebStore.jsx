import { create } from "zustand";

const WebStore = create(() => ({
  projects: [
    {
      title: "BlogKU",
      description:
        "This is a Laravel-based blog application that allows users to create posts, comment on posts and reply to comments. Apart from that, it supports two languages, English and Indonesian for features.",
      image: "images/homepage/content/project/BlogKU-desktop.PNG",
      url: "https://github.com/rizkitaufiq/blog-app.git",
    },

    {
      title: "Chill",
      description:
        "Chill is a web-based application designed to give users access to a an extensive library of movies and TV shows from their devices. Chill offers a user-friendly interface that allows users to search for movies and TV shows and start watching instantly.",
      image: "images/homepage/content/project/Chill-desktop.PNG",
      url: "https://mission-5-reactjs-chill.vercel.app/",
    },

    {
      title: "E-Commerce",
      description:
        "Product List Detailed description, images and specifications of product or services. Categorization and filtering options to help users.find what they’re looking for. Save the product you want Wishlist. Cart allows users to add and manage selected items before proceeding to Checkout",
      image: "images/homepage/content/project/E-commerce-desktop.PNG",
      url: "https://github.com/rizkitaufiq/simple_ecommerce_django5",
    },

    {
      title: "SIAP",
      description:
        "Archive Information System Library is a system used for archives kp, ta reporting and e-book library. Besides that there is a system visitor reports and developed with Native php and MySQL ",
      image: "images/homepage/content/project/SIAP-desktop.jpg",
      url: "https://github.com/rizkitaufiq/siap.github.io.git",
    },
  ],
}));

export default WebStore;
