"use client";
import { useRouter } from "next/navigation";
import { Breadcrumbs, BreadcrumbsProvider } from "react-breadcrumbs";

const BreadcrumbsComponent = () => {
  const router = useRouter();

  const pathSegments = router.asPath
    .split("/")
    .filter((segment) => segment !== "");

  return (
    <BreadcrumbsProvider>
      <Breadcrumbs separator=" / ">
        {pathSegments.map((segment, index) => (
          <Breadcrumbs.Item
            key={index}
            to={"/" + pathSegments.slice(0, index + 1).join("/")}
          >
            {segment}
          </Breadcrumbs.Item>
        ))}
      </Breadcrumbs>
    </BreadcrumbsProvider>
  );
};

export default BreadcrumbsComponent;
