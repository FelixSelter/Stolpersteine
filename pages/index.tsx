import Script from "next/script";
import BorderedContainer from "../components/BorderedContainer";
import CoverImage from "../components/CoverImage";
import Finanzen from "../components/Finanzen";
import Flyer from "../components/Flyer";
import Gallery from "../components/Gallery";
import InfoSection, { ImagePosition } from "../components/InfoSection";
import styles from "../styles/Home.module.css";
import Countdown from "../components/Countdown";

export default function Home() {
  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.2/iframeResizer.contentWindow.js"
        strategy="lazyOnload"
      />
      <div className={styles.root}>
        <CoverImage />
        <div className={styles.contentContainer}>
          <Countdown
            heading='Ausstellung: "Jüdische Familien in Wörrstadt"'
            subheading="Sei dabei"
            date={new Date("2022-11-26T09:00:00")}
          />

          <BorderedContainer className={styles.infoSection}>
            <InfoSection
              title="Was sind Stolpersteine?"
              img="/Stolpersteine/img/Stolpersteine.png"
              ratio={480 / 260}
              alt="Ein Bild eines Stolpersteins mit dem Namen des Künstlers Gunther Demnig sowie einer kurzen Beschreibung des Projektes. Stolpersteine sollen an alle Verfolgten der Nationalsozialisten erinnern."
              imgPosition={ImagePosition.RIGHT}
            >
              <p>
                <i>
                  Stolpersteine – Steine, die uns gedanklich ins Stolpern
                  bringen, zum Innehalten und Erinnern bewegen.
                </i>
              </p>
              <p>
                Ins Leben gerufen wurde das Stolpersteinprojekt 1995 durch den
                Kölner Künstler Gunther Demnig. Es sind kleine, goldene
                Gedenktafeln ca. 10cmx10cm aus Messing, welche zwischen die
                Pflastersteine verlegt werden. Man findet sie an Wohn- oder
                Aufenthaltsorten von Menschen, welche während der Zeit des
                Nationalsozialismus vertrieben, verfolgt, deportiert und
                ermordet wurden. Auf ihnen sind der Name des Bürgers, sowie der
                Geburtstag, das Datum der Deportation und der Ermordung
                angegeben.
              </p>
              <p>
                Die Stolpersteine werden ausschließlich mit privaten Spenden
                über Patenschaften finanziert. Inzwischen gibt es mehr als
                61.000 Stolpersteine in 22 europäischen Ländern. In all diesen
                Ländern wurden Menschen Opfer der Nationalsozialisten. Die
                Stolpersteine sind ein <i>„Gedenkbuch der besonderen Art“</i>.
                Denn solange man sich an die Namen der Menschen erinnert, werden
                sie nie vergessen sein.
              </p>
            </InfoSection>
            <InfoSection
              title="Was treibt uns an?"
              img="/Stolpersteine/img/Antrieb.png"
              ratio={480 / 260}
              alt="Der Geschichte Leistungskurs bei der Projektplanung"
              imgPosition={ImagePosition.LEFT}
            >
              <p>
                Jungen Menschen wird oftmals ein Desinteresse an Politik und
                auch Vergangenheit unterstellt.
              </p>
              <p style={{ textAlign: "center" }}>
                <b>Dies sehen wir entschieden anders!</b>
              </p>
              <p>
                Unsere Vergangenheit hat uns geholfen, die zu werden, die wir
                sind und die Politik trifft wesentliche Entscheidungen für
                unsere Zukunft. Das Projekt der Stolpersteine verbindet beides –
                die Erinnerung an das Verbrechen des Nationalsozialismus und
                stellt gleichzeitig eine Mahnung an die Gesellschaft und Politik
                dar. Denn auch heute gibt es Kriege und Verbrechen an den
                Menschen aufgrund ihrer Hautfarbe, ihres Glaubens, ihrer
                Sexualität oder auch ihres Geschlechtes. Wir können unsere
                Zukunft nur mitgestalten, indem wir uns aktiv erinnern und
                beteiligen.
              </p>
            </InfoSection>
            <InfoSection
              title="Wie Sie helfen können"
              img="/Stolpersteine/img/Spende.png"
              ratio={480 / 260}
              alt="Unterstützung in Form einer Spende wird für das Projekt Stolpersteine erbeten"
              imgPosition={ImagePosition.RIGHT}
            >
              <p>
                Das Stolperstein-Projekt liegt unserem Kurs sehr am Herzen. Dies
                ist jedoch erst der Anfang – durch Ihre finanzielle
                Unterstützung und das Engagement der Schülerschaft und
                Mitmenschen wird dieses Projekt weiter wachsen. Werden auch Sie
                Teil der mittlerweile europaweiten Stolperstein-Bewegung.
                <br /> Gemeinsam können wir uns über das Projekt Stolpersteine
                hinaus entwickeln. Sammeln wir genug Spenden, setzen wir weitere
                Projekte zum&nbsp;
                <u>Gedenken an die Verfolgten des Nationalsozialismus</u> um.
              </p>
              <div style={{ textAlign: "center" }}>
                <b>
                  Bitte unterstützen Sie unser Projekt mit einer Spende* auf
                  unser Spendenkonto bei der Sparkasse Worms-Alzey-Ried.
                </b>
                <br />
                <div style={{ marginTop: "10px" }}>
                  <b> DE 04 5535 0010 0022 2712 59</b>
                </div>
              </div>
              <p>
                Sie können dieses Projekt aber auch anderweitig unterstützen.
                Indem die Steine gereinigt, gepflegt und vor Vandalismus
                geschützt werden, werden sie lange erhalten bleiben und uns in
                der Hektik des Alltages zum Stolpern und Innehalten verhelfen.
                Wir bedanken uns von Herzen bei allen, die sich gemeinsam mit
                uns erinnern und gedenken.
              </p>
              <i>
                * Leider dürfen wir rechtlich keine Spendenquittungen
                ausstellen. Wir bitten um Ihr Verständnis.
                <br />
                Damit Ihre Spende eindeutig zugeordnet werden kann, muss der
                Verwendungszweck&nbsp;
                <b>&quot;Spende Projekt Gedenken an die Verfolgten&quot;</b>
                &nbsp; enthalten.
              </i>
            </InfoSection>
            <InfoSection
              title="Wir sagen Danke!"
              img="/Stolpersteine/img/Danke.jpg"
              ratio={480 / 260}
              alt="Der Geschichte Leistungskurs bedankt sich bei allen Unterstützern"
              imgPosition={ImagePosition.LEFT}
            >
              <p>
                Aufgrund der umfassenden Recherche von Karl Heinz Andresen,
                Friedemann Hofmann und deren Team hatte unser Leistungskurs eine
                hervorragende Grundlage für den Start unseres
                Stolperstein-Projektes. Sie erarbeiteten einen grandiosen Flyer,
                auf dem wir unsere Recherchen aufgebaut haben.
              </p>
              <p>
                Zudem beehrten sie uns mit einem Besuch an unserer Schule. In
                den persönlichen Gesprächen erfuhren wir viele spannende
                Geschichten rund um die Entwicklung des Flyers und erhielten
                weitere wertvolle Tipps und Quellen. Für das umfassende
                Engagement und das Interesse an unseren Projekt bedanken wir uns
                von Herzen und wünschen dem Team alles Gute.
              </p>
            </InfoSection>
          </BorderedContainer>
          <hr />
          <Flyer />
          <hr />
          <div>
            <Finanzen />
          </div>
          <hr />
          <div>
            <Gallery
              images={[{
                src: "/Stolpersteine/gallery/1.JPG",
                alt: "A placeholder image",
              },{
                src: "/Stolpersteine/gallery/2.JPG",
                alt: "A placeholder image",
              },{
                src: "/Stolpersteine/gallery/3.JPG",
                alt: "A placeholder image",
              },{
                src: "/Stolpersteine/gallery/4.JPG",
                alt: "A placeholder image",
              },{
                src: "/Stolpersteine/gallery/5.JPG",
                alt: "A placeholder image",
              },{
                src: "/Stolpersteine/gallery/6.JPG",
                alt: "A placeholder image",
              }]}
            />
          </div>
        </div>
        <hr />
        <p style={{ marginTop: "15px", textAlign: "center" }}>
          Rechtschreibfehler entdeckt oder eine Frage zum Projekt?
          <br />
          Kontaktieren Sie gerne felixselterdeveloping@gmail.com
        </p>
      </div>
    </>
  );
}
