export const ROUTES = {
  home: { name: "home", route: "/" },
  about: { name: "about", route: "/about" },
  projects: { name: "projects", route: "/projects" }
}

export const NAV_ROUTES = [
  { name: "artikelen", route: "/artikelen" },
  { name: "projecten", route: "/projecten" },
  { name: "over mij", route: "/over-mij" }
]

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  mobile: "600px",
  tablet: '1000px',
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