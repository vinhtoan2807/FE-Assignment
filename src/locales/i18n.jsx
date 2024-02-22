import i18n from "i18next";
import { initReactI18next } from "react-i18next";
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        USER_INVITED_TO_PROJECT: "has invited you to project",
        USER_REMOVED_FROM_PROJECT: "has removed you from project",
        USER_MENTIONED_IN_TICKET: "has mentioned you in ticket",
        USER_MENTIONED_IN_COMMENT: "has mentioned you in ticket comment",
        USER_ASSIGNED_TO_TICKET: "has assigned you to ticket",
        USER_OWN_TICKET: "has assigned you to owner of ticket",
        unknownNotificationType: "Unknown notification type",
        avatar: "https://mira.bootlab.io/static/img/flags/us.png",
      },
    },
    vn: {
      translation: {
        USER_INVITED_TO_PROJECT: "đã mời bạn vào dự án",
        USER_REMOVED_FROM_PROJECT: "đã xóa bạn khỏi dự án",
        USER_MENTIONED_IN_TICKET: "đã nhắc bạn trong mô tả công việc",
        USER_MENTIONED_IN_COMMENT: "đã nhắc bạn trong bình luận công việc",
        USER_ASSIGNED_TO_TICKET: "đã giao cho bạn công việc",
        USER_OWN_TICKET: "đã gắn bạn là người giao việc trong",
        unknownNotificationType: "Unknown notification type",
        avatar: "https://mira.bootlab.io/static/img/flags/vn.png",
      },
    },
  },
  lng: "vn",
  fallbackLng: "vn",

  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
