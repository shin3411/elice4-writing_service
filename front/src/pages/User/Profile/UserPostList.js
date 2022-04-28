import { MyPostContainer } from "../../../styles/User/ProfileStyle";
import { useUserPostList } from "../../../queries/postQuery";
import { useParams } from "react-router-dom";
import { img } from "../../../utils/imgImport";

function UserPostList() {
  const params = useParams();
  const { userPosts } = useUserPostList(params.userId);

  return (
    <MyPostContainer>
      <img src={img.notPost} alt="notPost" />
    </MyPostContainer>
  );
}

export default UserPostList;