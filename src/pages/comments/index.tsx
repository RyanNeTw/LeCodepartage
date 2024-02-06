import { useEffect, useState } from 'react';
import CommentCard from '../../components/Comment';
import { getCommentsAricle } from '../../functions/getData';
import { Comment } from '../../types';

const CommentsPage = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const path = window.location.href.split('/');

  useEffect(() => {
    getCommentsAricle(path[5]).then((data) => setComments(data));
  }, [path]);

  return (
    <>
      <div className="py-medium px-page">
        <CommentCard comments={comments} isBig={true} id={path[5]} />
      </div>
    </>
  );
};

export default CommentsPage;
