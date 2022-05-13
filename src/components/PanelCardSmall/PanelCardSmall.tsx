import React from "react";
import {
  CardContainer,
  CardTitle,
  CardDescr,
  CardHeader,
  CardBody,
} from "@/styles/todo";
import { Button } from "@/styles/common";
import { SettingsIcon } from "@/styles/icons";

type PanelCardSmallProps = {
  title: string;
  descr: string;
};

export const PanelCardSmall: React.FC<PanelCardSmallProps> = ({
  title,
  descr,
}) => {
  return (
    <CardContainer size="small">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <Button>
          <SettingsIcon />
        </Button>
      </CardHeader>
      <CardBody>
        <CardDescr>{descr}</CardDescr>
        <CardDescr>{descr}</CardDescr>
      </CardBody>
    </CardContainer>
  );
};
