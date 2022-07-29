
import { getEndpoint } from './Networks';

export const getNFT = async (
  type: string,
  owner: string,
  pageKey: number
) => {
  const endpoint = getEndpoint(type);

  if (!endpoint) return;

  const data = await fetch(`${endpoint}/getNFTs?owner=${owner}&pageKey=${pageKey}`);
  const response = await data.json();

  return response;
}
