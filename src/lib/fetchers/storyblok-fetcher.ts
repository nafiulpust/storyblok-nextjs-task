import { draftMode } from "next/headers";
import { getStoryblokApi } from "@/lib/storyblok";
import { i18n, type Locale } from "../../i18n/i18n-config";

export async function fetchSBData(
  envPrefix: "dev" | "stage" | "prod",
  slug: string,
  lang: Locale = i18n.defaultLocale as Locale
) {
  try {
    const { isEnabled } = await draftMode();
    const storyblokApi = getStoryblokApi();

    if (!storyblokApi) {
      console.error("Storyblok API is not initialized");
      return null;
    }

    const route = `${envPrefix}/${slug}`;

    const response = await storyblokApi.getStory(
      route,
      {
        version:
          process.env.NODE_ENV === "development" || isEnabled
            ? "draft"
            : "published",
        language: lang?.toLowerCase(),
      },
      {
        next: {
          revalidate: 300, // Cache for 5 minutes
          tags: [`story-${route}-lang-${lang}`], // Cache tags for invalidation
        },
      }
    );

    return response?.data?.story || null;
  } catch (error: unknown) {
    // Handle Storyblok API errors (404, etc.)
    // Storyblok errors can have different structures
    if (error && typeof error === "object") {
      // Check for status property directly (e.g., { status: 404, message: "Not Found" })
      if ("status" in error && (error as { status: number }).status === 404) {
        console.warn(`Story not found: ${envPrefix}/${slug} (lang: ${lang})`);
        return null;
      }

      // Check for nested response object (e.g., { response: { status: 404 } })
      if ("response" in error) {
        const apiError = error as {
          response?: { status?: number; data?: unknown };
        };
        if (apiError.response?.status === 404) {
          console.warn(`Story not found: ${envPrefix}/${slug} (lang: ${lang})`);
          return null;
        }
      }
    }

    // Log other errors but don't crash
    console.error(`Error fetching story ${envPrefix}/${slug}:`, error);
    return null;
  }
}

export const getStory = fetchSBData;
