export const createPaths = (currentPage) => {
  let path = {
    "/so-funktionierts": ["so-funktionierts"],
    "/calculator": ["calculator"],
    "/wir-kaufen": ["wir-kaufen"],
    "/versandarten": ["versandarten"],
    "/versandtasche-bestellen": ["VERSANDARTEN", "versandtasche-bestellen"],
    "/eigenes-versandmaterial": ["VERSANDARTEN", "eigenes-versandmaterial"],
    "/wertsendung": ["VERSANDARTEN", "wertsendung"],
    "/sind-unterwegs": ["VERSANDARTEN", "sind-unterwegs"],
    "/luxusuhren": ["wir-kaufen", "luxusuhren"],
    "/diamanten": ["wir-kaufen", "diamanten"],
  };
  return path[currentPage];
};
