import React from "react";
import {
  CardContainer,
  CardTitle,
  CardDescr,
  CardHeader,
  CardBody,
} from "@/styles";

type PanelCardMiddleProps = {
  title: string;
  descr?: string;
};

export const PanelCardMiddle: React.FC<PanelCardMiddleProps> = ({
  title,
  descr,
}) => {
  return (
    <CardContainer size="middle">
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
