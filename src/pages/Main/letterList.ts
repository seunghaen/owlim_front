export type LetterType = {
  title: string;
  sub: string;
  img: string;
  id: number;
  type?: null | "경제" | "시사" | "취미";
};

const letterList: LetterType[] = [
  {
    title: "뉴닉",
    sub: "설명",
    img: "",
    type: "시사",
    id: 1,
  },
  {
    title: "순살",
    sub: "순살에 관한 설명",
    type: "경제",
    img: "",
    id: 2,
  },
  {
    title: "부딩",
    sub: "부딩에 관한 설명",
    img: "",
    type: "경제",
    id: 3,
  },
  {
    title: "까탈로그",
    sub: "까탈로그에 관한 설명",
    type: "취미",
    img: "",
    id: 4,
  },
  {
    title: "올림 경제레터",
    sub: "올림 자체 경제뉴스레터",
    type: "경제",
    img: "",
    id: 5,
  },
];

export default letterList;
