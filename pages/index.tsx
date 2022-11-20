import Script from "next/script";
import BorderedContainer from "../components/BorderedContainer";
import CoverImage from "../components/CoverImage";
import Finanzen from "../components/Finanzen";
import Flyer from "../components/Flyer";
import Gallery from "../components/Gallery";
import InfoSection, { ImagePosition } from "../components/InfoSection";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.root}>
      <CoverImage />
      <div className={styles.contentContainer}>
        <BorderedContainer className={styles.infoSection}>
          <InfoSection
            title="Was sind Stolpersteine?"
            img="/img/480x260.png"
            alt="A placeholder image"
            imgPosition={ImagePosition.RIGHT}
          >
            Stolpersteine – Steine, die uns gedanklich ins Stolpern bringen, zum
            Innehalten und Erinnern bewegen Ins Leben gerufen wurde das
            Stolpersteinprojekt 1995 durch den Kölner Künstler Gunther Demming.
            Es sind kleine, goldene Gedenktafeln ca. 10cmx10cm aus Messing,
            welche zwischen die Pflastersteine verlegt werden. Man findet sie an
            Wohn- oder Aufenthaltsorten von Menschen, welche während der Zeit
            des Nationalsozialismus vertrieben, verfolgt, deportiert und
            ermordet wurden. Auf ihnen sind der Name des Bürgers, sowie der
            Geburtstag, das Datum der Deportation und der Ermordung angegeben.
            Die Stolpersteine werden ausschließlich mit privaten Spenden über
            Patenschaften finanziert. Inzwischen gibt es mehr als 61.000
            Stolpersteine in 22 europäischen Ländern. In all diesen Ländern
            wurden Menschen Opfer der Nationalsozialisten. Die Stolpersteine
            sind ein „Gedenkbuch der besonderen Art“. Denn solange man sich an
            die Namen der Menschen erinnert, werden sie nie vergessen sein.
          </InfoSection>
          <InfoSection
            title="Was treibt uns an?"
            img="/img/480x260.png"
            alt="A placeholder image"
            imgPosition={ImagePosition.LEFT}
          >
            Jungen Menschen wird oftmals ein Desinteresse an Politik und auch
            Vergangenheit unterstellt. Dies sehen wir entschieden anders. Unsere
            Vergangenheit hat uns geholfen, die zu werden, die wir sind und die
            Politik trifft wesentliche Entscheidungen für unsere Zukunft. Das
            Projekt der Stolpersteine verbindet beides – die Erinnerung an das
            Verbrechen des Nationalsozialismus und stellt gleichzeitig eine
            Mahnung an die Gesellschaft und Politik dar. Denn auch heute gibt es
            Kriege und Verbrechen an den Menschen aufgrund ihrer Hautfarbe,
            ihres Glaubens, ihrer Sexualität oder auch ihres Geschlechtes. Wir
            können unsere Zukunft nur mitgestalten, indem wir uns aktiv erinnern
            und beteiligen.
          </InfoSection>
          <InfoSection
            title="Wie Sie helfen können"
            img="/img/480x260.png"
            alt="A placeholder image"
            imgPosition={ImagePosition.RIGHT}
          >
            Das Stolperstein-Projekt liegt unserem Kurs sehr am Herzen. Dies ist
            jedoch erst der Anfang – durch Ihre finanzielle Unterstützung und
            das Engagement der Schüler und Mitmenschen wird dann dieses Projekt
            weiter wachsen. Werden auch Sie Teil der mittlerweile europaweiten
            Stolperstein-Bewegung! Bei XXXXXXX können Sie ihren Beitrag mit
            einer kleinen Spende leisten. Sie können dies Projekt aber auch
            anderweitig unterstützen. Indem die Steine gereinigt, gepflegt und
            vor Vandalismus geschützt werden, werden sie lange erhalten bleiben
            und uns in der Hektik des Alltages zum Stolpern und Innehalten
            verhelfen. Wir bedanken uns von Herzen an alle, die sich mit uns
            gemeinsam erinnern und gedenken.
          </InfoSection>
          <InfoSection
            title="Wir sagen Danke!"
            img="/img/480x260.png"
            alt="A placeholder image"
            imgPosition={ImagePosition.LEFT}
          >
            Aufgrund der umfassenden Recherche von Karl Heinz Andresen,
            Friedemann Hofmann und deren Team hatte unser Leistungskurs eine
            hervorragende Grundlage für den Start unseres
            Stolperstein-Projektes. Sie erarbeiteten einen grandiosen Flyer, auf
            dem wir unsere Recherchen aufgebaut haben. Zudem beehrten sie uns
            mit einem Besuch an unserer Schule. In den persönlichen Gesprächen
            erfuhren wir viele spannende Geschichten rund um die Entwicklung des
            Flyers und erhielten weitere wertvolle Tipps und Quellen. Für das
            umfassende Engagement und dem Interesse an unseren Projekt bedanken
            wir uns von Herzen und wünschen dem Team alles Gute.
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
            images={Array(10)
              .fill({})
              .map((_, i) => {
                return {
                  src: "/img/250x250.png",
                  alt: "A placeholder image",
                };
              })}
          />
        </div>
      </div>
      <hr />
    </div>
  );
}
