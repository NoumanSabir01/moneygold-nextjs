import { UberSectionArray } from "@/public/static/HomepageStatic";
import Image from "next/image";

const Ubersection = () => {
  return (
    <section className="uber_section_wrapper">
      <div className="container">
        <div className="row">
          {UberSectionArray.map((item, index) => {
            return (
              <div className="col-6 col-md-6 col-lg-3" key={index}>
                <div className="d-flex justify-content-center align-items-center flex-column">
                  <div className="uber_sec_img">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                    />
                  </div>
                  <div className="text-white uberText">{item.uberText}</div>
                  <h2 className="color-gold">{item.h2}</h2>
                  <div className="text-white paidOut">{item.paidOut}</div>
                  <div className="text-white sinceInception">
                    {item.sinceInception}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Ubersection;
