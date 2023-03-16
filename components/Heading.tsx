import React from "react";

//В компоненте Heading мы получаем тег и текст
const Heading = ({
  tag,
  text,
}: {
  tag?: keyof JSX.IntrinsicElements;
  text: string;
}) => {
  //Если не задан тег, то по умолчанию будет h1
  const Tag = tag || "h1";
  return (
    //Возвращаем тег с текстом
    <Tag>{text}</Tag>
  );
};

export default Heading;
