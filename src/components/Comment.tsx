import { FC, useState } from "react";
import getDate from "../functions/getDate";
import { Comment } from "../types";
import Title from "./Title";
import { useForm, SubmitHandler } from "react-hook-form";
import { sendComment } from "../functions/getData";

export type Inputs = {
  name: string;
  content: string;
};

const CommentCard: FC<{ comments: Comment[]; isBig?: boolean; id: string }> = ({
  comments,
  id,
  isBig = false,
}) => {
  const [formStatus, setFormStatus] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleCaptcha = (value) => {
    console.log("Captcha value:", value);
    // Ici, vous pouvez traiter la valeur du captcha, par exemple en la soumettant à votre serveur
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    sendComment(id, data).then((res) => {
      if (res) {
        comments.push({
          id: 1,
          blocked: false,
          blockedThread: false,
          blockReason: null,
          isAdminComment: null,
          removed: null,
          approvalStatus: null,
          createdAt: "",
          updatedAt: "",
          gotThread: false,
          children: [],
          author: { id: "1", name: data.name, email: "", avatar: null },
          content: data.content,
        });
        reset();
      }
      setFormStatus(res);
    });
  };

  const inputStyle =
    "bg-white-color rounded-xl border focus:outline-none focus:border-light-red px-4 py-2";

  const errorStyle = "text-light-red ";
  return (
    <>
      <Title title="Commentaires" />
      <div className="w-full rounded-lg pt-small">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            placeholder="Votre nom"
            defaultValue={""}
            {...register("name", { required: true })}
            className={`w-1/6 ${inputStyle} ${errors.name ? "border-light-red " : "border-black-color "}`}
          />

          <textarea
            placeholder="Ajouter un commentaire..."
            defaultValue={""}
            {...register("content", { required: true })}
            className={`${inputStyle} ${errors.content ? "border-light-red " : "border-black-color "}`}
          />

          <div className="flex flex-col">
            {errors.name && (
              <span className={`${errorStyle}`}>
                Veuillez saisir un nom pour continuer *
              </span>
            )}
            {errors.content && (
              <span className={`${errorStyle}`}>
                Veuillez saisir un commentaire pour continuer *
              </span>
            )}
          </div>

          <input
            type="submit"
            className="bg-light-blue w-1/6 self-end rounded-full text-white py-reallySmall cursor-pointer hover:opacity-80"
          />
        </form>
      </div>
      <ul className="flex flex-wrap w-full justify-between pt-small gap-y-4">
        {comments
          ?.slice()
          ?.reverse()
          .map((comment, index) => (
            <li
              key={index}
              className={`${isBig ? "w-full" : "w-block"} shadow hover:shadow-md p-small rounded-lg flex flex-col gap-2`}
            >
              <div className="flex flex-row gap-2 items-center">
                <div
                  className={`${index % 2 == 0 ? "bg-light-blue" : "bg-light-red"} w-4 h-4 rounded-full flex justify-center items-center p-small`}
                >
                  <h3 className="text-white">
                    {comment?.author?.name?.charAt(0).toUpperCase()}
                  </h3>
                </div>
                <h3>
                  {comment?.author?.name?.charAt(0).toUpperCase() +
                    comment?.author?.name?.slice(
                      1,
                      comment?.author?.name?.length,
                    )}
                </h3>
              </div>
              <p>{comment?.content}</p>
              <h3 className="text-gray-400 text-xs">
                {comment?.createdAt ? getDate(comment?.createdAt) : null}
              </h3>
            </li>
          ))}
      </ul>
    </>
  );
};

export default CommentCard;
