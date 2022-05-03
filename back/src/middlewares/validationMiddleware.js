import { body, param, query, validationResult } from "express-validator";
import { quizzes } from "../load/data/quiz";
import { UserWord, Quiz } from "../db";

const isValidData = (type) => {
  switch (type) {
    case "register":
      return [
        body("email", "이메일 정보가 올바르지 않습니다.").exists().isEmail(),
        body("password", "비밀번호 정보가 올바르지 않습니다.").exists().isString()
        .isLength({ min: 3 }),
        body("nickname", "닉네임 정보가 올바르지 않습니다.")
          .exists().isString(),
      ];
    case "login":
      return [
        body("email", "이메일 정보가 올바르지 않습니다.").exists().isEmail(),
        body("password", "비밀번호 정보가 올바르지 않습니다.").exists().isString()
        .isLength({ min: 3 }),
      ];
    
    case "post":
      return [
        body("title", "제목 정보가 올바르지 않습니다.").exists().isString(),
        body("content", "내용 정보가 올바르지 않습니다.").exists().isString(),
        body("tags", "태그 정보가 올바르지 않습니다.").exists(),
        // body("userId", "유저 정보가 올바르지 않습니다.").exists().isMongoId(),
        // body("subjectId", "주제 정보가 올바르지 않습니다.").exists().isMongoId(),
        // body("category", "카테고리 정보가 올바르지 않습니다.").exists().isIn(['소설', '시', '산문', "etc"]),
      ];
    case "post-sorting":
      return query("sort", "sort 쿼리 스트링이 올바르지 않습니다.").custom(async (value) => {
        try{
          const sortTypes = ["asc", "desc", "ascending", "descending"];
          const sortFields = ["title", "content", "author", "category", "createdAt", "updatedAt"];
          if(value === undefined){ // sort 쿼리 스트링를 사용하지 않는 경우
            return Promise.resolve("post-sorting validation success");
          }
          if(!sortTypes.includes(value.type)){
            throw new Error(`정렬 타입은 ["asc", "desc", "ascending", "descending"] 중에 하나입니다.`);
          }
          if(!sortFields.includes(value.field)){
            throw new Error(`정렬 필드는 ["title", "content", "author", "category", "createdAt", "updatedAt"] 중에 하나입니다.`);
          }
          return Promise.resolve("post-sorting validation success");
        } catch(error) {
          return Promise.reject(error);
        }
      })

    case "userword-post":
      return body("word", "단어 정보가 올바르지 않습니다.").exists().isString().isIn(quizzes.map(v => v.word));
    case "userword-get":
      return param("userId", "유저 정보가 올바르지 않습니다.")
        .exists()
        .isMongoId()
        .bail()
        .custom(async (value, { req }) => {
          try {
            const userId = value;
            
            if (userId === undefined) {
              // "/userword" 로 post 요청시 path params는 없다.
              return Promise.resolve("userWord validation success");
            }

            const userWord = await UserWord.findByUserId({ userId });
            if (userWord == null) {
              throw new Error("해당 유저의 단어가 존재하지 않습니다.");
            }

          } catch (error) {
            return Promise.reject(error);
          }
        });
  }
};

const invalidCallback = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const errors = result.errors.reduce((acc, cur) => { 
      if (!(cur.param in acc)) acc[cur.param] = cur.msg;
      return acc;
    }, {});
    return res.status(400).json({ errors });
  }

  next();
};

export { isValidData, invalidCallback };