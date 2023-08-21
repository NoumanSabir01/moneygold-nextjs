"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Breadcrumbs = () => {
  const [breadcrumbItems, setBreadcrumbItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const currentPath = router.pathname;

    if (currentPath) {
      const pathSegments = currentPath
        .split("/")
        .filter((segment) => segment !== "");
      const newBreadcrumbItems = pathSegments.map((segment, index) => {
        // Customize breadcrumb labels based on your route paths
        return {
          label: segment,
          path: pathSegments.slice(0, index + 1).join("/"),
        };
      });

      setBreadcrumbItems(newBreadcrumbItems);
    }
  }, [router.pathname]);

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="/" passHref>
            Home
          </Link>
        </li>
        {breadcrumbItems.map((item, index) => (
          <li className="breadcrumb-item" key={index}>
            <Link href={item.path} passHref>
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
