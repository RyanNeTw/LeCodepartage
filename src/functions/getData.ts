import { Inputs } from "../components/Comment";
import {
  ArticlesType,
  Comment,
  EventsType,
  GetDataType,
  MembersType,
  Meta,
} from "../types";

const getMembers = async (): Promise<GetDataType<MembersType>> => {
  const response = await fetch(
    "http://localhost:1337/api/members?populate=deep",
  );
  return await response.json();
};

export const getMemberByField = async (
  filter: string,
  search: string,
): Promise<GetDataType<MembersType>> => {
  const response = await fetch(
    `http://localhost:1337/api/members?filters[${filter}]=${search}&populate=deep`,
  );
  return await response.json();
};

export const getMember = async (
  id: number,
): Promise<{ data: MembersType; meta: Meta }> => {
  const response = await fetch(
    `http://localhost:1337/api/members/${id}?populate=deep`,
  );
  return await response.json();
};

export const getArticles = async (): Promise<GetDataType<ArticlesType>> => {
  const response = await fetch(
    "http://localhost:1337/api/articles?populate=deep",
  );
  return await response.json();
};

export const getArticlesByField = async (
  filter: string,
  search: string,
): Promise<GetDataType<ArticlesType>> => {
  const response = await fetch(
    `http://localhost:1337/api/articles?filters${filter}=${search}&populate=deep`,
  );
  return await response.json();
};

export const getCommentsAricle = async (id: string): Promise<Comment[]> => {
  const response = await fetch(
    `http://localhost:1337/api/comments/api::article.article:${id}`,
  );
  return await response.json();
};

export const getEvents = async (): Promise<GetDataType<EventsType>> => {
  const response = await fetch(
    "http://localhost:1337/api/events?populate=deep",
  );
  return await response.json();
};

export const sendComment = async (
  id: string,
  data: Inputs,
): Promise<boolean> => {
  const response = await fetch(
    `http://localhost:1337/api/comments/api::article.article:${id}`,
    {
      method: "POST",
      body: JSON.stringify({
        author: {
          id: 1,
          name: data.name,
          email: data.name + "@gmail.com",
        },
        content: data.content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const res = await response.json();
  return res?.id ? true : false;
};
export default getMembers;
