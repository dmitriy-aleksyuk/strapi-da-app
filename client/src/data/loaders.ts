import qs from "qs";
import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";

const BASE_URL = getStrapiURL();
//const BLOG_PAGE_SIZE = 3;

const homePageQuery = qs.stringify(
  {
    populate: {
      blocks: {
        on: {
          "blocks.hero-section": {
            populate: {
              backgroundImage: {
                fields: ["url", "alternativeText"],
              },
              logo: {
                populate: {
                  logoImage: {
                    fields: ["url", "alternativeText"],
                  },
                },
              },
              cta: true,
            },
          },
          "blocks.info-part": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
              cta: true,
            },
          },
        },
      },
    },
  }
);

/**
 * Fetches the home page data from Strapi.
 * @returns {Promise<any>} The home page data.
 */
export async function getHomePage() {
  const path = "/api/home-page";
  const url = new URL(path, BASE_URL);

  url.search = homePageQuery;

  return await fetchAPI(url.href, { method: "GET" });
}


const pageBySlugQuery = (slug: string) => qs.stringify(
  {
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      blocks: {
        on: {
          "blocks.hero-section": {
            populate: {
              backgroundImage: {
                fields: ["url", "alternativeText"],
              },
              logo: {
                populate: {
                  logoImage: {
                    fields: ["url", "alternativeText"],
                  },
                },
              },
              cta: true,
            },
          },
          "blocks.info-part": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
              cta: true,
            },
          },
          "blocks.featured-article": {
            populate: {
              featureImage: {
                fields: ["url", "alternativeText"],
              },
              featureLink: true,
            },
          },
          "blocks.subscribe": {
            populate: true,
          },
        },
      },
    },
  },
);

/**
 * Fetches a page by its slug from Strapi.
 * @param {string} slug - The slug of the page to fetch.
 * @returns {Promise<any>} The page data.
 */
export async function getPageBySlug(slug: string) {
  const path = "/api/pages";
  const url = new URL(path, BASE_URL);
  url.search = pageBySlugQuery(slug);
  return await fetchAPI(url.href, { method: "GET" });
}

const globalSettingQuery = qs.stringify({
  populate: {
    header: {
      populate: {
        headerLogo: {
          populate: {
            logoImage: {
              fields: ["url", "alternativeText"],
            },
          },
        },
        headerNavigation: true,
        headerCta: true,
      },
    },
    footer: {
      populate: {
        footerLogo: {
          populate: {
            logoImage: {
              fields: ["url", "alternativeText"],
            },
          },
        },
        footerNavigation: true,
        footerPolicies: true,
      },
    },
  },
});

/**
 * Fetches global settings from Strapi.
 * @returns {Promise<any>} The global settings data.
 */
export async function getGlobalSettings() {
  const path = "/api/global";
  const url = new URL(path, BASE_URL);
  url.search = globalSettingQuery;
  return fetchAPI(url.href, { method: "GET" });
}

