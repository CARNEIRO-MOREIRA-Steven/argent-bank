import axios from 'axios'

export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_PROFILE = "USER_PROFILE"

export const userLoginSuccess = () => ({
    type: USER_LOGIN_SUCCESS,
  });

//Gérer l'échec de connexion
export const userLoginFailure = (error) => ({
    type: USER_LOGIN_FAILURE,
    payload: error,
  });

//Gérer la déconnexion
export const logoutUser = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token")
  return {
    type: USER_LOGOUT,
  }
}

//Gérer la connexion
export const loginUser = (email, password, navigate, rememberMe) => {
    return async (dispatch) => {
      try {
        const response = await axios.post(
          "http://localhost:3001/api/v1/user/login",
          {
            email: email,
            password: password,
          }
        );
  
        if (response.status === 200) {
          const token = response.data.body.token;
          if (rememberMe) {
            localStorage.setItem("token", token);
          } else {
            sessionStorage.setItem("token", token);
          }
          navigate("/profil");
          dispatch(userLoginSuccess());
        } else {
          localStorage.removeItem("token");
          sessionStorage.removeItem("token");
        }
  
        if (response.status === 401) {
          localStorage.removeItem("token");
          sessionStorage.removeItem("token");
          navigate("/login");
        }
      } catch (error) {
        dispatch(userLoginFailure("identifiants incorrects"));
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        
      }
    };
  };

//Gérer la récupération profil
export const userProfil = () => {
  const token = sessionStorage.getItem('token') || localStorage.getItem('token')
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers:{
            Authorization: `Bearer ${token}`
          },
        }
      );
      if (response.status === 200) {
        const userProfile = response.data.body;
        dispatch(({
          type: USER_PROFILE,
          payload: userProfile,
        }));
      }
    } catch (error) {
      console.error('Error:', error);
       // Ajoutez cette ligne pour déboguer les erreurs
    }
  };
};
