//constants
import { ROUTES } from "../constants"

const modifyTitle = (s: string) => s.replaceAll(' ', '-')

export const createStore = (posts) => posts.reduce((acc, post) => {
  let { data: { title,date } } = post;
  return { ...acc, [title]: { title, date, href: `.${ROUTES.artikelen.route}/${modifyTitle(title)}` } };
}, {});


