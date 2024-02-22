import React, { useState } from "react";
import { Avatar, Menu, MenuItem, Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useTranslation } from "react-i18next";
import "../../../locales/i18n";
const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <>
      <div className="notification-header flex align-items-center justify-content-between">
        <h2 className="notification-title">Notifications</h2>
        <Tooltip title="Languages">
          <IconButton
            size="large"
            aria-label="language"
            color="inherit"
            onClick={handleClick}
            aria-controls={open ? "language-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              sx={{ width: "22px", height: "22px" }}
              src={t("avatar")}
              alt=""
            />
          </IconButton>
        </Tooltip>
        <Menu
          elevation={0}
          id="language-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={() => changeLanguage("en")}>English</MenuItem>
          <MenuItem onClick={() => changeLanguage("vn")}>VietNam</MenuItem>
        </Menu>
      </div>
    </>
  );
};

export default Header;
