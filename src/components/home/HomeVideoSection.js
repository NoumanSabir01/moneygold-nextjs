import { homePageVideoArray } from "@/public/static/HomepageStatic";

const HomeVideoSection = () => {
  return (
    <section className="video_section_wrapper">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center flex-column">
          <h2 className="text-center">
            Echte Kunden - Echte Video Bewertungen. Hier präsentieren wir Ihnen
            eine kleine Auswahl an Video Erfahrungsberichten.
          </h2>

          <div className="row video-row">
            {homePageVideoArray.map((item, index) => {
              return (
                <div className="col-6 col-md-6 col-lg-4 mb-4">
                  <div className="vedio_card">
                    <iframe
                      width={item.width}
                      height={item.height}
                      src={item.src}
                      title={item.title}
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <button className=" text-white video-btn">
              Videos über moneyGold.de
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeVideoSection;
