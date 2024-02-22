import React, { useState, useEffect } from "react";
import { getNotifications, markNotificationAsRead } from "../../API";
import Notifications from "../Notifications/index";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const ListNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const data = await getNotifications(10, currentPage);
        setNotifications(data.data);
        setTotalPages(Math.ceil(data.totalRecords / 10));
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, [currentPage]);

  const markAsRead = async (notificationId) => {
    try {
      await markNotificationAsRead(notificationId);
      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) =>
          notification.id === notificationId
            ? { ...notification, isRead: true }
            : notification
        )
      );
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div className="notification">
      <div className="notification-box">
        <ul className="notification-list">
          {notifications.map((notification) => (
            <Notifications
              key={notification.id}
              notification={notification}
              markAsRead={markAsRead}
            />
          ))}
        </ul>
        <div className="btn-pagination flex flex-end">
          <Stack spacing={2}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default ListNotifications;
