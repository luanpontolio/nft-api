export const NETWORKS = {
  ethereumn: process.env.PROVIDER_URL_ETHEREUMN,
  polygon: process.env.PROVIDER_URL_POLYGON
};

export const getEndpoint = (
  type: string
): [string | undefined] => {
  return NETWORKS[type];
};
