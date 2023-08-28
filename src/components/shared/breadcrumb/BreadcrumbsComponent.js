"use client";
import { createPaths } from "@/utils/createPaths";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Breadcrumbs = () => {
  const [breadcrumbItems, setBreadcrumbItems] = useState([]);
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (window?.location?.pathname !== undefined) {
      setCurrentPath(window?.location?.pathname);
      setBreadcrumbItems(createPaths(window?.location?.pathname));
    }
  }, [currentPath]);

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li
          className="breadcrumb-item breadcrumb-item_home "
          onClick={() => {
            router.push("/");
          }}
        >
          Startseite
        </li>
        {breadcrumbItems?.map((item, index) => (
          <li
            className="breadcrumb-item"
            key={index}
            onClick={() => {
              router.push(item);
            }}
          >
            {" >> "}
            {item?.toUpperCase()}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
