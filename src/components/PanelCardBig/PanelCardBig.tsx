import React from "react";
import {
  CardContainer,
  CardTitle,
  CardDescr,
  CardHeader,
  CardBody,
} from "@/styles/todo";

type PanelCardBigProps = {
  title: string;
  descr?: string;
};

export const PanelCardBig: React.FC<PanelCardBigProps> = ({ title, descr }) => {
  return (
    <CardContainer size="big">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardBody>
        <CardDescr>{descr}</CardDescr>
        <CardDescr>{descr}</CardDescr>
      </CardBody>
    </CardContainer>
  );
};
