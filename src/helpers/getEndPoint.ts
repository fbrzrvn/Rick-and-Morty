const getEndpoint = (url: string) => {
  const regex = /\/api\/(.*)/;
  const match = url?.match(regex);

  return match ? match[1] : '';
};

export default getEndpoint;
