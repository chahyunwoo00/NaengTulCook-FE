import { createBrowserRouter, Outlet } from "react-router-dom";
import RootLayout from "@/layouts/root-layout";
import SplashPage from "@/pages/SplashPage";
import MyPage from "@/pages/MyPage";
import SignUpPage from "@/pages/SignUpPage";
import LoginPage from "@/pages/LoginPage";
import RefrigeratorPage from "@/pages/RefrigeratorPage";
import RecipePage from "@/pages/RecipePage";
import CommunityPage from "@/pages/CommunityPage";
import AddIngredients from "@/pages/AddIngredients";
import RecipeCookingPage from "@/pages/RecipeCookingPage";
import NeighborRecipe from "./components/community/NeighborRecipe";
import NeighborExperience from "./components/community/NeighborExperience";
import CommunityWritePage from "./pages/CommunityWritePage";
import CommunityPostDetail from "./pages/CommunityPostDetail"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <NotFound />,
    children: [
      {
        path: "refrigerator", // 냉장고 페이지
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <RefrigeratorPage />,
          },
          {
            path: "add-ingredient",
            element: <AddIngredients />,
          },
        ],
      },
      {
        path: "recipe", // 레시피 페이지
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <RecipePage />,
          },
          {
            path: "cooking",
            element: <RecipeCookingPage />,
          },
        ],
      },
      {
        path: "community", //이웃의 장 페이지
        element: <CommunityPage/>,
        children: [
          { index: true, element: <NeighborRecipe/> },
          { path : ":type", element: <NeighborExperience/>},
          { path: ":type/write", element:<CommunityWritePage/>},
          { path: "post/:id", element:<CommunityPostDetail/>},
        ],
      },
      {
        path: "my-page", //내 정보 페이지
        element: <MyPage />,
      },
    ],
  },
]);
