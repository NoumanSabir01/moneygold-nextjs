import CustomerReview2 from "@/components/home/CustomerReview2";
import Versandarten from "@/components/home/Versandarten";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";

const Page = () => {
  return (
    <section className="versandarten_wrapper_main">
      <div className="container">
        <Breadcrumbs />
        <h2 className="versandarten_wrapper_main_heading1">
          Goldankauf im Internet mit Gold-zurück-Garantie
        </h2>
        <p className="versandarten_wrapper_main_para1">
          Unser Ankaufservice ist einfach, schnell und unkompliziert. Wählen Sie
          aus folgenden drei Varianten um Ihr Gold per Post zu verkaufen:
        </p>
      </div>
      <Versandarten />
      <CustomerReview2 />
    </section>
  );
};

export default Page;
