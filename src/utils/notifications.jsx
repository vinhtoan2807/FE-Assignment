import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { useTranslation } from "react-i18next";
const GetContent = (payload) => {
  const { t } = useTranslation();
  const CustomTypography = styled(Typography)`
    && {
      color: #333;
      font-size: 16px;
      font-weight: bold;
      display: inline;
    }
  `;
  switch (payload.type) {
    case "USER_INVITED_TO_PROJECT":
      return (
        <Typography variant="body1">
          <CustomTypography>{payload?.data?.inviteUser?.name}</CustomTypography>{" "}
          {t("USER_INVITED_TO_PROJECT")}{" "}
          <CustomTypography>{payload.data.project.name}</CustomTypography>
        </Typography>
      );
    case "USER_REMOVED_FROM_PROJECT":
      return (
        <Typography variant="body1">
          <CustomTypography>{payload?.data?.removeUser?.name}</CustomTypography>{" "}
          {t("USER_REMOVED_FROM_PROJECT")}{" "}
          <CustomTypography>{payload.data.project.name}</CustomTypography>
        </Typography>
      );
    case "USER_MENTIONED_IN_TICKET":
      return (
        <Typography variant="body1">
          <CustomTypography>{payload?.data?.inviteUser?.name}</CustomTypography>{" "}
          {t("USER_REMOVED_FROM_PROJECT")}{" "}
          <CustomTypography>{payload.data.ticket.ticketCode}</CustomTypography>
        </Typography>
      );
    case "USER_MENTIONED_IN_COMMENT":
      return (
        <Typography variant="body1">
          <CustomTypography>{payload?.data?.inviteUser?.name}</CustomTypography>{" "}
          {t("USER_MENTIONED_IN_TICKET")}{" "}
          <CustomTypography>{payload.data.ticket.ticketCode}</CustomTypography>
        </Typography>
      );
    case "USER_ASSIGNED_TO_TICKET":
      return (
        <Typography variant="body1">
          <CustomTypography>
            {payload?.data?.assigningUser?.name}
          </CustomTypography>{" "}
          {t("USER_ASSIGNED_TO_TICKET")}{" "}
          <CustomTypography>{payload.data.ticket.ticketCode}</CustomTypography>
        </Typography>
      );
    case "USER_OWN_TICKET":
      return (
        <Typography variant="body1">
          <CustomTypography>
            {payload?.data?.assigningUser?.name}
          </CustomTypography>{" "}
          {t("USER_OWN_TICKET")}{" "}
          <CustomTypography>{payload.data.ticket.ticketCode}</CustomTypography>
        </Typography>
      );
    default:
      return "Unknown notification type";
  }
};

export { GetContent };
