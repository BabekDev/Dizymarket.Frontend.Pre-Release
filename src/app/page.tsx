import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  const features: Array<{ title: string; text: string }> = [
    {
      title: "Trading In-Game Currencies",
      text: "Users can buy and sell in-game currencies (e.g., gold, coins) for various games.",
    },
    {
      title: "Boosting Services",
      text: "Offering services to enhance gaming progress, including character leveling, quest completion, and other in-game tasks.",
    },
    {
      title: "Account Sales",
      text: "Securely buy and sell accounts for video games, social networks, and other online platforms.",
    },
    {
      title: "Item Trading",
      text: "Trade in-game items such as equipment, skins, artifacts, and other virtual valuables.",
    },
    {
      title: "Secure Transactions",
      text: "Utilizing an arbitration system to protect the interests of both parties and prevent fraud.",
    },
    {
      title: "Convenient Communication",
      text: "An integrated chat feature that allows sellers and buyers to discuss transaction details directly.",
    },
  ];

  const screenshots = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png"];

  return (
    <div className={styles.page}>
      <section
        className={`${styles.hero} ${styles.container}`}
        aria-labelledby="hero-title"
      >
        <div className={styles.heroInner}>
          <div>
            <Image
              src="/logo.svg"
              alt="DizyMarket"
              width={360}
              height={44}
              priority
              className={styles.logo}
            />
            <p className={styles.kicker}>DIZYMARKET LTD</p>
            <h1 id="hero-title" className={styles.title}>
              Marketplace for Digital Goods & Services
            </h1>
            <p className={styles.subtitle}>
              DizyMarket.com is an online platform for buying, selling, and
              exchanging virtual goods and services related to video games and
              social networks. Our platform ensures safe and convenient
              interactions between users, enabling them to trade gaming assets
              efficiently.
            </p>
            <p className={styles.subtitle}>
              DizyMarket aims to create a safe and user-friendly environment for
              its customers. We offer a wide range of goods that cover popular
              video games and social networks to meet the diverse needs of our
              users.
            </p>
            <span className={styles.comingSoon}>Coming soon</span>
          </div>

          <div className={styles.heroMedia} aria-hidden>
            <div className={styles.heroDeco} />
            <Image
              src="/1.png"
              alt="Preview of DizyMarket interface"
              width={1040}
              height={640}
              className={styles.heroShot}
              priority
            />
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.container}`}
        aria-labelledby="features-title"
      >
        <div className={styles.sectionHeader}>
          <h2 id="features-title" className={styles.sectionTitle}>
            Key Features of{" "}
            <span className={styles.accentText}>DizyMarket</span>
          </h2>
          <span className={styles.sectionHint}>
            Secure • Scalable • User‑friendly
          </span>
        </div>

        <ul className={styles.features}>
          {features.map((f, idx) => (
            <li key={f.title} className={styles.featureItem}>
              <div className={styles.featureBadge}>{idx + 1}</div>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureText}>{f.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section
        className={`${styles.gallery} ${styles.container}`}
        aria-labelledby="gallery-title"
      >
        <div className={styles.sectionHeader}>
          <h2 id="gallery-title" className={styles.sectionTitle}>
            A glimpse of the experience
          </h2>
          <span className={styles.sectionHint}>Early UI previews</span>
        </div>

        <div className={styles.marquee}>
          <div className={styles.marqueeTrack}>
            {[...screenshots, ...screenshots].map((src, i) => (
              <Image
                key={`${src}-${i}`}
                src={src}
                alt={`UI preview ${i + 1}`}
                width={920}
                height={320}
                className={styles.shot}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className={`${styles.contact} ${styles.container}`}
        aria-labelledby="contact-title"
      >
        <h2 id="contact-title" className={styles.contactTitle}>
          Need help? Our support is here for you.
        </h2>
        <a
          className={styles.mail}
          href="mailto:support@dizymarket.com"
          aria-label="Write to support"
        >
          support@dizymarket.com
        </a>
      </section>
    </div>
  );
}
