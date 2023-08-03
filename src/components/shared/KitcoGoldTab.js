"use client";
import {
  GoldankaufKotenloserArray,
  KitcoGoldTabArrayGold,
  KitcoGoldTabArrayPlatin,
  KitcoGoldTabArraySilber,
  KitcoGoldTabArrayZahngold,
} from "@/public/static/HomepageStatic";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Kitco from "/public/assets/img/homepage/home_kitco.png";

const KitcoGoldTab = () => {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      };
      const formattedDateTime = new Intl.DateTimeFormat(
        "en-US",
        options
      ).format(now);
      setCurrentDateTime(formattedDateTime);
    };

    // Update the current date and time every second
    const intervalId = setInterval(updateDateTime, 1000);

    // Clear the interval when the component unmounts to avoid memory leaks
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div id="box-prices" className="Kitco_gold_tab_wrapper">
      <div className="headline text-center">AKTUELLE ANKAUFKURSE</div>
      <div className=" updated d-flex flex-column justify-content-center align-items-center">
        <p className="text-center paragraph">
          Erhoben am {currentDateTime} Uhr durch
        </p>
        <Image src={Kitco} alt="Kitco" title="Kitco" />
      </div>
      <Tabs>
        <>
          <TabList>
            {GoldankaufKotenloserArray.map((tabs, index) => {
              return (
                <Tab
                  className="tab_pill "
                  key={index}
                  style={{
                    width: tabs.width,
                    height: tabs.height,
                  }}
                >
                  {tabs.tabText}
                </Tab>
              );
            })}
          </TabList>

          <TabPanel>
            {KitcoGoldTabArrayGold.map((item, innerIndex) => {
              return (
                <ul key={innerIndex} className="tabpanel_ul">
                  <li>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "2px",
                        paddingLeft: "17px",
                        paddingRight: "30px",
                        height: "34px",
                        alignItems: "center",
                        backgroundColor: item.backgroundColor,
                      }}
                    >
                      <p>{item.quantity}</p>
                      <p>{item.price}</p>
                    </div>
                  </li>
                </ul>
              );
            })}
            <p className="para2">
              Für Goldbarren (999er gestempelt) im Neuzustand bis 1g zahlen wir
              58,00 €/g
            </p>
            <div className="text-center tabpanel_lastdiv">
              <p className="para3">Aktualisierung der Ankaufspreise in</p>
              <p className="para4">10 Minute 31 Sekunden</p>
            </div>
          </TabPanel>
          <TabPanel>
            {KitcoGoldTabArrayZahngold.map((item, innerIndex) => {
              return (
                <ul key={innerIndex} className="tabpanel_ul">
                  <li>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "2px",
                        paddingLeft: "17px",
                        paddingRight: "30px",
                        height: "34px",
                        alignItems: "center",
                        backgroundColor: item.backgroundColor,
                      }}
                    >
                      <p>{item.quantity}</p>
                      <p>{item.price}</p>
                    </div>
                  </li>
                </ul>
              );
            })}
            <p className="para2">
              Für Goldbarren (999er gestempelt) im Neuzustand bis 1g zahlen wir
              58,00 €/g
            </p>
            <div className="text-center tabpanel_lastdiv">
              <p className="para3">Aktualisierung der Ankaufspreise in</p>
              <p className="para4">10 Minute 31 Sekunden</p>
            </div>
          </TabPanel>
          <TabPanel>
            {KitcoGoldTabArraySilber.map((item, innerIndex) => {
              return (
                <ul key={innerIndex} className="tabpanel_ul">
                  <li>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "2px",
                        paddingLeft: "17px",
                        paddingRight: "30px",
                        height: "34px",
                        alignItems: "center",
                        backgroundColor: item.backgroundColor,
                      }}
                    >
                      <p>{item.quantity}</p>
                      <p>{item.price}</p>
                    </div>
                  </li>
                </ul>
              );
            })}
            <p className="para2">
              Für Goldbarren (999er gestempelt) im Neuzustand bis 1g zahlen wir
              58,00 €/g
            </p>
            <div className="text-center tabpanel_lastdiv">
              <p className="para3">Aktualisierung der Ankaufspreise in</p>
              <p className="para4">10 Minute 31 Sekunden</p>
            </div>
          </TabPanel>
          <TabPanel>
            {KitcoGoldTabArrayPlatin.map((item, innerIndex) => {
              return (
                <ul key={innerIndex} className="tabpanel_ul">
                  <li>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "2px",
                        paddingLeft: "17px",
                        paddingRight: "30px",
                        height: "34px",
                        alignItems: "center",
                        backgroundColor: item.backgroundColor,
                      }}
                    >
                      <p>{item.quantity}</p>
                      <p>{item.price}</p>
                    </div>
                  </li>
                </ul>
              );
            })}
            <p className="para2">
              Für Goldbarren (999er gestempelt) im Neuzustand bis 1g zahlen wir
              58,00 €/g
            </p>
            <div className="text-center tabpanel_lastdiv">
              <p className="para3">Aktualisierung der Ankaufspreise in</p>
              <p className="para4">10 Minute 31 Sekunden</p>
            </div>
          </TabPanel>
        </>
      </Tabs>
    </div>
  );
};

export default KitcoGoldTab;
