import { CHANGE_LANGUAGE } from "~/utils/constants";

const initialState = {
  language: "spanish",
  error: {
    show: false,
    message: "",
  },
};

export default function todos(state = initialState, { type, payload }) {
  switch (type) {
    case CHANGE_LANGUAGE:
      localStorage.setItem("language", payload.language);
      return {
        ...state,
        language: payload.language,
      };
    default:
      const language = localStorage.getItem("language") || state.language;
      return {
        ...state,
        language,
      };
  }
}
