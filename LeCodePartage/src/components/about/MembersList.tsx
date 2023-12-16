import members from "../../JSON/members";
import { MembersType } from "../../types";
import { FC } from "react";
import AuthorCard from "../AuthorCard";
import Title from "../Title";
import LinkedIn from "../../assets/Linkedin";
import Github from "../../assets/Github";

function MembersList() {
  return (
    <>
      <section>
        <Title title="L’équipe de rédaction :" />
        <ul className="w-full flex flex-wrap pt-12 justify-between gap-8">
          {members?.map((member, index) => (
            <li key={index} className="w-5/12">
              <AuthorCard
                name={member.fullName}
                role={member.job}
                image={member.image}
                isBackground={false}
                isRow={true}
                reactComponent={<Description member={member} />}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

const Description: FC<{ member: MembersType }> = ({ member }) => {
  return (
    <div>
      <p className="text-black-color">{member.desc}</p>
      <div className="flex flex-row-reverse items-center gap-2">
        <a
          href={member.linkedin}
          target="_blank"
          className="hover:opacity-70 hover:scale-105"
        >
          <LinkedIn />
        </a>
        <a
          href={member.github}
          target="_blank"
          className="hover:opacity-70 hover:scale-105"
        >
          <Github />
        </a>
      </div>
    </div>
  );
};

export default MembersList;
