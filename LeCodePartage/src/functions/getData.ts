import {
  ArticlesType,
  EventsType,
  GetDataType,
  MembersType,
  Meta,
} from "../types";

const getMembers = async (): Promise<GetDataType<MembersType>> => {
  const response = await fetch("http://localhost:1337/api/members?populate=*");
  return await response.json();
};

export const getMemberByField = async (
  filter: string,
  search: string,
): Promise<GetDataType<MembersType>> => {
  const response = await fetch(
    `http://localhost:1337/api/members?filters[${filter}]=${search}&populate=*`,
  );
  return await response.json();
};

export const getMember = async (
  id: number,
): Promise<{ data: MembersType; meta: Meta }> => {
  const response = await fetch(
    `http://localhost:1337/api/members/${id}?populate=*`,
  );
  return await response.json();
};

export const getArticles = async (): Promise<GetDataType<ArticlesType>> => {
  const response = await fetch("http://localhost:1337/api/articles?populate=*");
  return await response.json();
};

export const getArticlesByField = async (
  filter: string,
  search: string,
): Promise<GetDataType<ArticlesType>> => {
  const response = await fetch(
    `http://localhost:1337/api/articles?filters${filter}=${search}&populate=*`,
  );
  return await response.json();
};

export const getEvents = async (): Promise<GetDataType<EventsType>> => {
  const response = await fetch("http://localhost:1337/api/events?populate=*");
  return await response.json();
};

export default getMembers;
