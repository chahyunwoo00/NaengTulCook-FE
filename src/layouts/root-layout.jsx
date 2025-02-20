import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/common/navbar/Navbar";

export default function RootLayout() {
  const location = useLocation();


  // 네비게이션 바가 필요 없는 경로
  const noNavbarPaths = [
    "/recipe/cooking",
    "/refrigerator/add-ingredient",
    "/community/experience/write",
    "/community/q&a/write"
  ];

  //네비게이션 바가 필요없는 동적 경로
  const dynamicPaths = [
    /^\/community\/post\/\d+$/, 
  ];

  const isDynamicPath = dynamicPaths.some((regex) => regex.test(location.pathname));

  return (
    <>
      <Outlet />
      {!noNavbarPaths.includes(location.pathname) && !isDynamicPath && <Navbar />}
    </>
  );
}
