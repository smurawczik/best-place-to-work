import { useEffect } from "react";
import { authAPI } from "../../../api/auth";
import { useAppDispatch } from "../../../redux/store.hooks";
import { setStatus, setUserAndAuth } from "../../../redux/user/user.slice";

export const useAuth = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      dispatch(setStatus("loading"));
      try {
        const response = await authAPI.profile();
        if (response.status === 200 && response.data) {
          dispatch(setUserAndAuth(response.data));
        }
      } catch (error) {
        dispatch(setStatus("failed"));
      }
    };

    fetchUser();
  }, [dispatch]);
};
