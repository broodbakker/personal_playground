export const ROUTES = {
  home: { name: "home", route: "/" },
  "over-mij": { name: "over mij", route: "/over-mij" },
  // artikelen: { name: "artikelen", route: "/artikelen" },
  projects: { name: "projecten", route: "/projects" }
}

export const NAV_ROUTES = [
  // { name: "Artikelen", route: "/artikelen" },
  { name: "Projecten", route: "/projects" },
  { name: "Over Mij", route: "/over-mij" }
]

export const BACKGROUND_IMAGE = './images/image4.svg'
export const HEADER_IMAGE = './images/headPhoto.jpeg'
export const POSTS_PATH = "./content/posts";
export const PROJECTS_PATH = "./content/projects";
export const GITHUB_LINK = "https://github.com/broodbakker"

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  mobile: "600px",
  tablet: '800px',
  laptop: '1200px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const GLOBALSTYLE = {
  breakpoint: {
    maxMobileS: `(max-width: ${size.mobileS})`,
    maxmobileM: `(max-width: ${size.mobileM})`,
    maxmobileL: `(max-width: ${size.mobileL})`,
    maxmobile: `(max-width: ${size.mobile})`,
    maxtablet: `(max-width: ${size.tablet})`,
    maxlaptop: `(max-width: ${size.laptop})`,
    maxlaptopL: `(max-width: ${size.laptopL})`,
    maxdesktop: `(max-width: ${size.desktop})`,
    maxdesktopL: `(max-width: ${size.desktop})`,
    minMobileS: `(min-width: ${size.mobileS})`,
    minmobileM: `(min-width: ${size.mobileM})`,
    minmobileL: `(min-width: ${size.mobileL})`,
    minmobile: `(min-width: ${size.mobile})`,
    mintablet: `(min-width: ${size.tablet})`,
    minlaptop: `(min-width: ${size.laptop})`,
    minlaptopL: `(min-width: ${size.laptopL})`,
    mindesktop: `(min-width: ${size.desktop})`,
    mindesktopL: `(min-width: ${size.desktop})`
  }
}