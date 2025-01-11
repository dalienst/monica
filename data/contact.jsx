const faq = [
  {
    id: 1,
    question: "Why Monica Tours & Safaris?",
    answer: `Explore unforgettable adventures with Monica Tours & Safaris.
              Discover breathtaking destinations, customized excursions, and
              seamless booking experiences. Your journey starts here!`,
  },
  {
    id: 2,
    question: "How can I contact Monica Tours & Safaris?",
    answer: `You can contact Monica Tours & Safaris by email at monicadesh2015@gmail.com or by phone at +254 788 089205. You also visit our contact section for more information.`,
  },
  {
    id: 3,
    question: "What payment methods are accepted?",
    answer: `We accept credit cards, debit cards, and cash.`,
  },
  {
    id: 4,
    question: "Can I cancel my reservation?",
    answer: `Yes, you can cancel your reservation within 24 hours of the tour date.`,
  },
];

const contacts = [
  {
    id: 1,
    title: "monicadesh2015@gmail.com",
    link: "mailto:monicadesh2015@gmail.com",
    icon: <i className="bi bi-envelope me-2"></i>,
  },
  {
    id: 2,
    title: "+254 788 089205",
    link: "tel:+254788089205",
    icon: <i className="bi bi-telephone me-2"></i>,
  },
  {
    id: 3,
    title: "Mombasa, Kenya",
    link: "https://maps.app.goo.gl/SHcYNypjKyj3sAXx5",
    icon: <i className="bi bi-geo-alt me-2"></i>,
  },
  // {
  //   id: 4,
  //   title: "@monicasafaris",
  //   link: "https://twitter.com/monicasafaris",
  //   icon: <i className="bi bi-twitter me-2"></i>,
  // },
  {
    id: 5,
    title: "@videshio",
    link: "https://www.instagram.com/videshio?igsh=MTU1YTFyMnN0ZThlaQ==",
    icon: <i className="bi bi-instagram me-2"></i>,
  },
];

const paymentMethods = [
  {
    id: 1,
    title: "Visa",
    image: "/visa.png",
  },
  {
    id: 2,
    title: "Mastercard",
    image: "/mastercard.png",
  },
  {
    id: 3,
    title: "PayPal",
    image: "/paypal.png",
  },
];

export { faq, contacts, paymentMethods };
