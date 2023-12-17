import { ArticlesType, GetDataType, MembersType, Meta } from "../types";

const getMembers = async (): Promise<GetDataType<MembersType>> => {
  const response = await fetch("http://localhost:1337/api/members?populate=*");
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
  const response = await fetch(
    "http://localhost:1337/api/articles/?populate=*",
  );
  return await response.json();
};

export default getMembers;
