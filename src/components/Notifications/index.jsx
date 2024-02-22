import React, { useEffect, useState } from "react";
import { getUserAvatar } from "../../API";
import { GetContent } from "../../utils/notifications";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const Notifications = ({ notification, markAsRead }) => {
  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const avatarUrl = await getUserAvatar(notification.createdUserId);
        setAvatarUrl(avatarUrl);
      } catch (error) {
        console.error("Error fetching avatar:", error);
      }
    };
    fetchAvatar();
  }, [notification.createdUserId]);
  const getNotificationClassName = (isRead) => {
    return isRead ? "read" : "unread";
  };

  const handleClick = () => {
    if (!notification.isRead) {
      markAsRead(notification.id);
    }
  };

  const notificationClassName = getNotificationClassName(notification.isRead);

  return (
    <div
      className={`notification-item flex align-items-center justify-content-between ${notificationClassName}`}
      onClick={handleClick}
    >
      <div className="notification-img">
        {avatarUrl && <img src={avatarUrl} alt="" />}
      </div>
      <div className="notification-content">
        {GetContent(notification.payload)}
      </div>
      <FiberManualRecordIcon
        className={`notification-dot${!notification.isRead ? "-unread" : ""}`}
      />
    </div>
  );
};

export default Notifications;
