export const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const LOGIN_PAGE_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGE = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

export const SUPPORTED_GENRES = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Abenteuer",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Komödie",
  },
  {
    id: 80,
    name: "Krimi",
  },
  {
    id: 99,
    name: "Dokumentarfilm",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Familie",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "Historie",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Musik",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Liebesfilm",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV-Film",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "Kriegsfilm",
  },
  {
    id: 37,
    name: "Western",
  },
];
