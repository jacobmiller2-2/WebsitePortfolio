import axios from "axios";

import Prismic from "@prismicio/client";
// import { TUrlSlug } from "interfaces/Prismic";
// import { ICourse, IPrismicCourse, TCourseID } from "interfaces/Courses";
// import { IPrismicReading, IReading } from "interfaces/Readings";
// import { IPrismicUnit, IUnit } from "interfaces/Units";

const REPOSITORY = process.env.PRISMIC_REPO_NAME;
const REF_API_URL = `https://${REPOSITORY}.cdn.prismic.io/api/v2`;

const PRISMIC_API_TOKEN = process.env.PRISMIC_API_TOKEN;

export const PrismicClient = Prismic.client(REF_API_URL, {
  accessToken: PRISMIC_API_TOKEN,
});

export const fetchAPI = async ({ query, page = 1, routes = [] }) => {
  const response = await PrismicClient.query(query, {
    pageSize: 100,
    lang: "*",
    page,
  });
  const allRoutes = routes.concat(response.results);
  if (response.results_size + routes.length < response.total_results_size) {
    return fetchAPI({ page: page + 1, routes: allRoutes, query });
  }
  //@ts-ignore
  return [...new Set(allRoutes)];
};

export const getHero = async () => {
  const query = Prismic.Predicates.at("document.type", "hero");
  const response = await fetchAPI({ query });

  return response[0];
};

export const getExperience = async () => {
  const query = Prismic.Predicates.at("document.type", "experience");
  const response = await fetchAPI({ query });

  return response;
};

export const getExperienceMeta = async () => {
  const query = Prismic.Predicates.at("document.type", "experience-meta");
  const response = await fetchAPI({ query });

  return response[0];
};

export const getProjects = async () => {
  const query = Prismic.Predicates.at("document.type", "project");
  const response = await fetchAPI({ query });

  return response;
};

export const getProjectMeta = async () => {
  const query = Prismic.Predicates.at("document.type", "project_meta");
  const response = await fetchAPI({ query });

  return response[0];
};

export const getContact = async () => {
  const query = Prismic.Predicates.at("document.type", "contact");
  const response = await fetchAPI({ query });

  return response[0];
};
// export const getReading = async (courseSlug: TUrlSlug, readingSlug: TUrlSlug) => {
//   const readings: any[] = await getReadings(courseSlug);
//   const units: IUnit[] = await getUnits(courseSlug);

//   const reading = readings.find((reading) => reading.slug === readingSlug);

//   const unitIndex = units.findIndex((unit) => unit.data.readings.find((r) => r.slug === readingSlug));

//   return { ...reading, index: unitIndex };
// };

// export const getReadings = async (courseSlug: TUrlSlug): Promise<IReading[]> => {
//   const response: any[] = await fetchAPI();

//   const readings: IPrismicReading[] = response.filter(
//     (item) => item.type === "reading" && item?.data?.course?.slug === courseSlug
//   );

//   return readings.map((reading) => ({
//     title: reading.data.reading_title,
//     slug: reading.slugs[0],
//     data: reading.data,
//     id: reading.id,
//   }));
// };

// export const getAllReadings = async (): Promise<any> => {
//   const response: any[] = await fetchAPI();

//   const readings = response.filter((item) => item.type === "reading");

//   return readings;
// };

// export const getCourse = async (courseSlug: TUrlSlug): Promise<ICourse> => {
//   const response: any[] = await fetchAPI();

//   const course: IPrismicCourse = response.find((item) => item.type === "course" && item.slugs[0] === courseSlug);

//   return { id: course.id, data: course.data, slug: course.slugs[0] };
// };

// export const getCourses = async (): Promise<ICourse[]> => {
//   const response: IPrismicCourse[] = await fetchAPI();

//   const courses: IPrismicCourse[] = response.filter((item) => item.type === "course");

//   return courses.map((course) => ({ id: course.id, slug: course.slugs[0], data: course.data }));
// };

// export const getUnits = async (courseSlug: TUrlSlug): Promise<IUnit[]> => {
//   const response: IPrismicUnit[] = await fetchAPI();

//   const units = response.filter((item) => item.type === "unit" && item?.data?.course?.slug === courseSlug);

//   return units.map((unit) => ({
//     id: unit.id,
//     slug: unit.slugs[0],
//     data: { ...unit.data, readings: unit.data.readings.map(({ reading }) => ({ slug: reading.slug, id: reading.id })) },
//   }));
// };

// export const getUnit = async (courseSlug: TUrlSlug, unitSlug: TUrlSlug): Promise<IUnit> => {
//   const response: IPrismicUnit[] = await fetchAPI();

//   const units = response.filter((item) => item.type === "unit" && item?.data?.course?.slug === courseSlug);

//   const unit = units.find((item) => item.slugs[0] === unitSlug);

//   return {
//     id: unit.id,
//     slug: unit.slugs[0],
//     data: { ...unit.data, readings: unit.data.readings.map(({ reading }) => ({ slug: reading.slug, id: reading.id })) },
//   };
// };
