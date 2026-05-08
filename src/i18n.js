import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
  sv: {
    translation: {
      nav: {
        home: "Startsida",
        menu: "Meny",
        contactEvents: "Kontakt / Events",
        contactEventsCompany: "Kontakt / Events / Företagsevents",
      },
      common: {
        language: "Språk",
      },
      footer: {
        copyright: "© 2026 Glädjekällans foodtruck",
      },
      startpage: {
        title: "Glädjekällans Foodtruck",
        subtitle: "Street food med hjärta, värme och smak.",
        intro:
          "Vi är en familjeägd foodtruck som serverar mat med kärlek och glädje. Vi finns i Göteborg och tar oss gärna till erat <eventLink>event</eventLink> för att tillhandahålla era mat och catering behov.",
        openingHours: "Öppettider:",
        weekdays: "Tisdag-Fredag",
        truckHours: "05:00-13:00",
        locationText: "Foodtrucken står vid fiskeauktionen.",
        galleryLabel: "Galleri med matbilder",
        mapAlt: "Karta till fiskeauktionen",
        socialTitle: "Följ oss för dagens meny",
        socialHint: "Dagens meny publiceras på Instagram och Facebook.",
        socialFacebook: "Facebook",
        socialInstagram: "Instagram",
        galleryAlts: {
          burgerPlate: "Burgertallrik från Glädjekällans Foodtruck",
          halloumiBurger: "Halloumiburgare från Glädjekällans Foodtruck",
          cheeseburger: "Cheeseburgare från Glädjekällans Foodtruck",
          chickenWrap: "Kycklingrulle från Glädjekällans Foodtruck",
          breakfast: "Frukosttallrik från Glädjekällans Foodtruck",
          sausageFries: "Korv med pommes från Glädjekällans Foodtruck",
          family: "Glädjekällans Foodtruck familj",
          logo: "Glädjekällans Foodtruck logotyp",
        },
      },
      menu: {
        heading: "Meny",
        glutenInfo: "Alla Burgare och Korv kan tillagas med glutenfritt bröd!",
        today: {
          title: "Dagens meny",
          hint: "Se dagens alternativ på våra sociala kanaler.",
          price: "120 kr",
        },
        sections: {
          burgers: "Hamburgare",
          other: "Annat",
          burgerTypes: "Hamburgersorter: Högrev eller Halloumi",
          sausageTypes: "Korvsorter: Fläsk, Kyckling, Vegetarisk",
        },
        social: {
          instagram: "Instagram",
          facebook: "Facebook",
        },
        items: {
          hogrevMenu: {
            name: "Högrevs burger meny",
            desc: "Burgare, pommes, dryck",
          },
          hogrevBread: "Högrevs burgare med bröd",
          halloumiMenu: {
            name: "Halloumi burger meny",
            desc: "Burgare, pommes, dryck",
          },
          halloumiBread: {
            name: "Halloumi burgare med bröd",
            desc: "Friterad halloumi",
          },
          politikern: {
            name: "Politikern",
            desc: [
              "Ost",
              "Bacon",
              "Stekt lök",
              "Hamburgerdressing",
              "Sallad",
              "Tomat",
              "BBQ sås",
            ],
          },
          atleten: {
            name: "Atleten",
            desc: [
              "Ost",
              "Bacon",
              "Stekt lök",
              "Vitlöksmayo",
              "Sallad",
              "Jalapeno",
              "Sriracha mayo",
            ],
          },
          rockaren: {
            name: "Rockaren",
            desc: [
              "Ost",
              "Bacon x 2",
              "Vitlöksmayo",
              "Sallad",
              "Rå lök",
              "Tomat",
              "BBQ sås",
            ],
          },
          missPiggy: {
            name: "Miss piggy",
            desc: [
              "Ost",
              "Bacon x 2",
              "Stekt lök",
              "Sallad",
              "Picklad rödlök",
              "Tomat",
              "Tryffelmayo",
            ],
          },
          butchern: {
            name: "Butchern",
            desc: [
              "Ost",
              "Bacon x 2",
              "Hamburgerdressing",
              "Sallad",
              "Rå lök",
              "Ketchup",
              "Senap",
            ],
          },
          starkeAdolf: {
            name: "Starke Adolf",
            desc: [
              "Ost",
              "Bacon",
              "Hamburgerdressing",
              "Sallad",
              "Jalapeno",
              "Tomat",
              "Sriracha",
            ],
          },
          chickenWrap: {
            name: "Kycklingrulle",
            desc: "Bröd, Kyckling, Sallad, Rå Lök, Picklad Lök, Jalapeno, Tomat, valfri sås",
          },
          friesThickSausage: "Pommes tallrik med tjock korv",
          friesThinSausage: "Pommes tallrik med smal korv",
          toastFalukorv: {
            name: "Toast falukorv",
            desc: "Ost och Falukorv",
          },
          toastSpecial: {
            name: "Toast special",
            desc: "Ost, Skinka, ägg",
          },
          toast: {
            name: "Toast",
            desc: "Ost och Skinka",
          },
          thickSausageBread: "Tjock Korv med bröd",
          thinSausageBread: "Smal Korv med bröd",
          friesPlate: "Pommes Tallrik",
        },
      },
      contact: {
        heading: "Kontakt",
        primaryContact: "Glädjekällans foodtruck kontakt:",
        phoneLabel: "Telefon",
        emailLabel: "Email",
        location: "Foodtrucken står vid fiskeauktionen.",
        openingHours: "Öppettider:",
        truckWeekdays: "Tisdag-Fredag",
        truckHours: "05:00-12:00",
        meatSupplier:
          "Vi får vårat kött från Slakthusets Köttbod i Olskroken.",
        butcherAddress: "Borgaregatan 19, 416 66 Göteborg",
        butcherHours: "Måndag-Fredag: 9-18 | Lördag: 9-14 | Söndag: Stängt",
        companyEventsTitle: "Företags Events",
        companyBreakfast: "Vi har även frukost",
        companyPricesTitle: "Priser:",
        companyBurgerPrice: "90 kr per hamburgare. 200 g högrevsburgare.",
        companyDrinkPrice: "15 kr för dryck.",
        companyHourly: "350 kr i timmen",
        companyDeliveryIn: "Gratis utkörning inom Göteborg.",
        companyDeliveryOut: "Utanför Göteborg 50 kr per mil.",
        companyVat: "Alla priser är exkl. moms.",
        privateTitle: "Event Privatperson",
        privatePrices: "Priser:",
        privateFrom: "Från 149 kr / person. 200 g högrevsburgare + 1 dryck.",
        privateMin: "Minsta antal: 25 personer.",
        privateVat: "Alla priser inkl. moms.",
        imageAltBurgerMaking: "Hamburgare som tillagas på Glädjekällans Foodtruck",
        imageAltBreakfast: "Frukost från Glädjekällans Foodtruck",
        formTitle: "Kontakta oss!",
        form: {
          firstName: "Förnamn",
          email: "Email",
          message: "Meddelande",
          firstNamePlaceholder: "Ditt namn..",
          emailPlaceholder: "Din email..",
          messagePlaceholder: "Skriv något..",
          send: "Skicka",
        },
      },
      about: {
        title: "Detta är om oss",
      },
      seo: {
        structuredData: {
          description:
            "Familjeägd foodtruck i Göteborg med street food på lokala råvaror och svenskt kött.",
        },
        pages: {
          home: {
            title: "Foodtruck i Göteborg",
            description:
              "Glädjekällans Foodtruck serverar street food i Göteborg med lokala råvaror och svenskt kött från Slakthusets Köttbod.",
            keywords:
              "foodtruck göteborg, street food göteborg, lokala råvaror, svenskt kött, hamburgare göteborg, catering foodtruck",
          },
          menu: {
            title: "Meny och priser",
            description:
              "Se Glädjekällans Foodtrucks meny med hamburgare, halloumi, kycklingrulle och dagens alternativ i Göteborg.",
            keywords:
              "foodtruck meny, hamburgare meny, halloumi burger, dagens meny göteborg, glutenfritt bröd",
          },
          contact: {
            title: "Kontakt och events",
            description:
              "Kontakta Glädjekällans Foodtruck för företagsevent, privata event och catering i Göteborg.",
            keywords:
              "foodtruck kontakt, foodtruck event göteborg, företagsevent mat, catering göteborg",
          },
          about: {
            title: "Om Glädjekällans Foodtruck",
            description:
              "Läs om Glädjekällans Foodtruck, vår familj och vårt fokus på lokala råvaror och svenskt kött.",
            keywords:
              "om oss foodtruck, familjeägd foodtruck, lokala råvaror göteborg, svenskt kött",
          },
        },
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        menu: "Menu",
        contactEvents: "Contact / Events",
        contactEventsCompany: "Contact / Events / Company Events",
      },
      common: {
        language: "Language",
      },
      footer: {
        copyright: "© 2026 Glädjekällans foodtruck",
      },
      startpage: {
        title: "Glädjekällans Foodtruck",
        subtitle: "Street food with heart, warmth, and flavor.",
        intro:
          "We are a family-owned food truck serving food with love and joy. We are based in Gothenburg and gladly come to your <eventLink>event</eventLink> to cover your food and catering needs.",
        openingHours: "Opening hours:",
        weekdays: "Tuesday-Friday",
        truckHours: "05:00-13:00",
        locationText: "The food truck is located at the fish auction.",
        galleryLabel: "Food gallery",
        mapAlt: "Map to the fish auction",
        socialTitle: "Follow us for today's menu",
        socialHint: "Today's menu is posted on Instagram and Facebook.",
        socialFacebook: "Facebook",
        socialInstagram: "Instagram",
        galleryAlts: {
          burgerPlate: "Burger plate from Glädjekällans Foodtruck",
          halloumiBurger: "Halloumi burger from Glädjekällans Foodtruck",
          cheeseburger: "Cheeseburger from Glädjekällans Foodtruck",
          chickenWrap: "Chicken wrap from Glädjekällans Foodtruck",
          breakfast: "Breakfast plate from Glädjekällans Foodtruck",
          sausageFries: "Sausage and fries from Glädjekällans Foodtruck",
          family: "Glädjekällans Foodtruck family",
          logo: "Glädjekällans Foodtruck logo",
        },
      },
      menu: {
        heading: "Menu",
        glutenInfo: "All burgers and sausages can be prepared with gluten-free bread!",
        today: {
          title: "Today's menu",
          hint: "See today's option on our social channels.",
          price: "120 SEK",
        },
        sections: {
          burgers: "Burgers",
          other: "Other",
          burgerTypes: "Burger types: Beef patty or Halloumi",
          sausageTypes: "Sausage types: Pork, Chicken, Vegetarian",
        },
        social: {
          instagram: "Instagram",
          facebook: "Facebook",
        },
        items: {
          hogrevMenu: {
            name: "Beef burger meal",
            desc: "Burger, fries, drink",
          },
          hogrevBread: "Beef burger with bread",
          halloumiMenu: {
            name: "Halloumi burger meal",
            desc: "Burger, fries, drink",
          },
          halloumiBread: {
            name: "Halloumi burger with bread",
            desc: "Fried halloumi",
          },
          politikern: {
            name: "The Politician",
            desc: [
              "Cheese",
              "Bacon",
              "Fried onion",
              "Burger dressing",
              "Lettuce",
              "Tomato",
              "BBQ sauce",
            ],
          },
          atleten: {
            name: "The Athlete",
            desc: [
              "Cheese",
              "Bacon",
              "Fried onion",
              "Garlic mayo",
              "Lettuce",
              "Jalapeno",
              "Sriracha mayo",
            ],
          },
          rockaren: {
            name: "The Rocker",
            desc: [
              "Cheese",
              "Bacon x 2",
              "Garlic mayo",
              "Lettuce",
              "Red onion",
              "Tomato",
              "BBQ sauce",
            ],
          },
          missPiggy: {
            name: "Miss Piggy",
            desc: [
              "Cheese",
              "Bacon x 2",
              "Fried onion",
              "Lettuce",
              "Pickled red onion",
              "Tomato",
              "Truffle mayo",
            ],
          },
          butchern: {
            name: "The Butcher",
            desc: [
              "Cheese",
              "Bacon x 2",
              "Burger dressing",
              "Lettuce",
              "Red onion",
              "Ketchup",
              "Mustard",
            ],
          },
          starkeAdolf: {
            name: "Starke Adolf",
            desc: [
              "Cheese",
              "Bacon",
              "Burger dressing",
              "Lettuce",
              "Jalapeno",
              "Tomato",
              "Sriracha",
            ],
          },
          chickenWrap: {
            name: "Chicken wrap",
            desc: "Bread, chicken, lettuce, red onion, pickled onion, jalapeno, tomato, sauce of choice",
          },
          friesThickSausage: "Fries plate with thick sausage",
          friesThinSausage: "Fries plate with thin sausage",
          toastFalukorv: {
            name: "Falukorv toast",
            desc: "Cheese and falukorv",
          },
          toastSpecial: {
            name: "Special toast",
            desc: "Cheese, ham, egg",
          },
          toast: {
            name: "Toast",
            desc: "Cheese and ham",
          },
          thickSausageBread: "Thick sausage with bread",
          thinSausageBread: "Thin sausage with bread",
          friesPlate: "Fries plate",
        },
      },
      contact: {
        heading: "Contact",
        primaryContact: "Glädjekällans foodtruck contact:",
        phoneLabel: "Phone",
        emailLabel: "Email",
        location: "The food truck is located at the fish auction.",
        openingHours: "Opening hours:",
        truckWeekdays: "Tuesday-Friday",
        truckHours: "05:00-12:00",
        meatSupplier: "We source our meat from Slakthusets Kottbod in Olskroken.",
        butcherAddress: "Borgaregatan 19, 416 66 Gothenburg",
        butcherHours: "Monday-Friday: 9-18 | Saturday: 9-14 | Sunday: Closed",
        companyEventsTitle: "Corporate Events",
        companyBreakfast: "We also offer breakfast",
        companyPricesTitle: "Prices:",
        companyBurgerPrice: "90 SEK per burger. 200 g beef burger.",
        companyDrinkPrice: "15 SEK per drink.",
        companyHourly: "350 SEK per hour",
        companyDeliveryIn: "Free delivery within Gothenburg.",
        companyDeliveryOut: "Outside Gothenburg: 50 SEK per 10 km.",
        companyVat: "All prices exclude VAT.",
        privateTitle: "Private Event",
        privatePrices: "Prices:",
        privateFrom: "From 149 SEK / person. 200 g beef burger + 1 drink.",
        privateMin: "Minimum number: 25 people.",
        privateVat: "All prices include VAT.",
        imageAltBurgerMaking: "Burger preparation at Glädjekällans Foodtruck",
        imageAltBreakfast: "Breakfast served by Glädjekällans Foodtruck",
        formTitle: "Contact us!",
        form: {
          firstName: "First name",
          email: "Email",
          message: "Message",
          firstNamePlaceholder: "Your name..",
          emailPlaceholder: "Your email..",
          messagePlaceholder: "Write something..",
          send: "Send",
        },
      },
      about: {
        title: "About us",
      },
      seo: {
        structuredData: {
          description:
            "Family-owned food truck in Gothenburg serving street food with local produce and Swedish meat.",
        },
        pages: {
          home: {
            title: "Food Truck in Gothenburg",
            description:
              "Glädjekällans Foodtruck serves street food in Gothenburg with local produce and Swedish meat from Slakthusets Kottbod.",
            keywords:
              "food truck gothenburg, street food gothenburg, local produce, swedish meat, burger gothenburg, food truck catering",
          },
          menu: {
            title: "Menu and prices",
            description:
              "Explore Glädjekällans Foodtruck menu with burgers, halloumi, chicken wrap, and today's menu in Gothenburg.",
            keywords:
              "food truck menu, burger menu, halloumi burger, today's menu gothenburg, gluten free bread",
          },
          contact: {
            title: "Contact and events",
            description:
              "Contact Glädjekällans Foodtruck for company events, private events, and catering in Gothenburg.",
            keywords:
              "food truck contact, food truck events gothenburg, company event catering, catering gothenburg",
          },
          about: {
            title: "About Glädjekällans Foodtruck",
            description:
              "Learn about Glädjekällans Foodtruck, our family, and our focus on local produce and Swedish meat.",
            keywords:
              "about food truck, family-owned food truck, local produce gothenburg, swedish meat",
          },
        },
      },
    },
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: "sv",
  supportedLngs: ["sv", "en"],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
