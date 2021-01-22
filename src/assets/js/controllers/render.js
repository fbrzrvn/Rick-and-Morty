export const render = (fragment, element="#root") => {
  $(element).append(fragment);
}