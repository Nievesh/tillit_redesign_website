import checkSquare from "./assets/check-square.svg";
import component1 from "./assets/component-1.svg";
import filePlus from "./assets/file-plus.svg";
import header from "./assets/header.png";
import image5 from "./assets/image-5.png";
import image6 from "./assets/image-6.png";
import image8 from "./assets/image-8.png";
import image9 from "./assets/image-9.png";
import image10 from "./assets/image-10.png";
import image11 from "./assets/image-11.png";
import image12 from "./assets/image-12.png";
import image13 from "./assets/image-13.png";
import image14 from "./assets/image-14.png";
import image15 from "./assets/image-15.png";
import image16 from "./assets/image-16.png";
import image17 from "./assets/image-17.png";
import image18 from "./assets/image-18.png";
import image19 from "./assets/image-19.png";
import july222026 from "./assets/july-22-2026.png";
import shield from "./assets/shield.svg"; 
import "./style.css";
import "./styleguide.css";

const pressMentions = [
  "BusinessCafe",
  "Economynext",
  "The Island",
  "Daily Mirror",
  "Daily FT",
  "Roar Media",
  "Business News",
  "ADA Derana",
];

const workflowSteps = [
  {
    title: "Ingest",
    description: "Upload or connect documents directly from your inbox.",
    icon: image16,
  },
  {
    title: "Ingest",
    description:
      "Reads tables, certificates and results to capture key compliance fields.",
    icon: image17,
  },
  {
    title: "Link",
    description:
      "Associates evidence to products and suppliers and batches without manual entry.",
    icon: image18,
  },
  {
    title: "Publish",
    description:
      "Once verified, the badge and interactive proof appears on your product pages instantly.",
    icon: image19,
  },
];

const featureCards = [
  {
    title: "Effortless Document Processing",
    description:
      "Upload your supplier certificates or documents once. TilliT automatically extracts and matches products details.",
    icon: filePlus,
  },
  {
    title: "Publish without Worry",
    description:
      "TilliT detects unverified product claims or outdated supplier documents before publishing to avoid regulatory red flags.",
    icon: checkSquare,
  },
  {
    title: "Boost Buyer Trust",
    description:
      "Convert your real supply chain documents into storefront trust badges that show customers exact proof of origin.",
    icon: shield,
  },
];

const successStories = [
  {
    company: "Organic GreenTech",
    outcome: "Improved Buyer Conversion",
    title: "Enhancing tomato traceability with RFID",
    description:
      "Replaced manual scanning with automated batch tracking across greenhouse plots, turning verified origin data into storefront sales proof.",
  },
  {
    company: "Ceylon Cinnamon Export",
    outcome: "Verified Audit Readiness",
    title: "Digitally tracing premium spice exports from farm to buyer.",
    description:
      "Created a multi-stakeholder portal for users to verify Ceylon Cinnamon and comply with strict international compliance standards.",
  },
  {
    company: "Agrarco Food Safety",
    outcome: "Significant Time Saved",
    title: "Automating compliance checks for organic food supply chains.",
    description:
      "Deployed hazelnut batch tracking, eliminating tedious manual barcode scanning across farms and processing hubs.",
  },
];

const badges = [
  {
    title: "Organic",
    description:
      "Verifies compliance with USDA, EU or international organic standards.",
    icon: image9,
  },
  {
    title: "Vegan",
    description:
      "Confirms no animal-derived ingredients or cross-contamination.",
    icon: image10,
  },
  {
    title: "Non-GMO",
    description:
      "Ensures ingredients are not genetically modified via PCR testing.",
    icon: image11,
  },
  {
    title: "Gluten-Free",
    description: "Proof of gluten levels below 20ppm for safety compliance.",
    icon: image12,
  },
  {
    title: "Allergen-Free",
    description: "Verification for nut, dairy, or soy-free claims.",
    icon: image13,
  },
  {
    title: "Fair Trade",
    description: "Validates ethical sourcing and fair labor pricing.",
    icon: image14,
  },
];

const blogPosts = [
  {
    date: "August 10, 2026",
    title: "The Silent Cost of Broken Traceability",
    description:
      "Food recalls rarely begin with dramatic failures — they start with missing records or unverified certificates. Here's how gaps in traceability quietly become million-dollar problems.",
    className: "blog-image--gray",
  },
  {
    date: "July 28, 2026",
    title: "TilliT is Now Live on the Shopify App Store",
    description:
      "Merchants can now install TilliT in a single click, streamline compliance workflows, and get storefront-ready for AI-powered shopping.",
    className: "blog-image--blue",
  },
  {
    date: "July 22, 2026",
    title: "How TilliT Verifies Ingredient List Claims",
    description:
      "A look at how TilliT digitally audits ingredient lists to systematically verify organic, non-GMO, and allergen-free claims before they go live.",
    className: "blog-image--red",
    dateImage: july222026,
  },
];

const footerColumns = [
  { heading: "Product", links: ["Shopify App", "Proof Gallery"] },
  { heading: "Resources", links: ["Documentation", "FAQ", "Merchant Blog"] },
  {
    heading: "Company",
    links: ["About Us", "Contact Sales", "Privacy Policy"],
  },
];

function SectionHeading({ title, description, children }) {
  return (
    <header className="section-heading">
      <h2>{title}</h2>
      {children}
      {description && <p>{description}</p>}
    </header>
  );
}

function Icon({ icon, alt = "" }) {
  if (typeof icon === "string" && icon.length < 4) {
    return <span aria-hidden="true">{icon}</span>;
  }

  return <img src={icon} alt={alt} />;
}

function ContentCard({ title, description, icon }) {
  return (
    <article className="content-card">
      <div className="card-icon">
        <Icon icon={icon} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export const Main = () => {
  return (
    <main className="main">
      <div className="site-header" >
      <header>
        <img src={header} alt="TilliT" />
      </header>
      </div>
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero-background"
          src={image15}
          alt=""
          aria-hidden="true"
          
        />
        <div className="content-width hero-content">
          <div className="hero-copy">
            <span className="eyebrow">Automated Storefront Compliance</span>
            <h1 id="hero-title">
              Turn Ingredient Claims
              <br />
              into Verified Sales Proof.
            </h1>
            <p>
              TilliT checks your supplier certificates and displays verified
              trust badges directly on product pages, boosting shopper
              confidence without additional work.
            </p>
            <nav className="hero-actions" aria-label="Primary actions">
              <button className="button button--dark" type="button">
                Install on Shopify 
              </button>
              <button className="button button--green" type="button">
                Watch Demo
              </button>
            </nav>
          </div>
          <img
            className="hero-product-image"
            src={image6}
            alt="TilliT storefront compliance interface"
          />
        </div>
      </section>
      <p className="experience-note">
        Built on 25 collective years of supply chain traceability experience
      </p>
      <section className="press-section" aria-label="As seen and recognized in">
        <p>AS SEEN AND RECOGNIZED IN</p>
        <ul>
          {pressMentions.map((mention) => (
            <li key={mention}>{mention}</li>
          ))}
        </ul>
      </section>
      <section
        className="how-it-works content-width"
        aria-labelledby="how-title"
      >
        <SectionHeading
          title="How it Works"
          description="Simple steps to verify your product claims and secure your brands compliance."
        />
        <div className="workflow-content">
          <ol className="workflow-list">
            {workflowSteps.map((step) => (
              <li key={`${step.title}-${step.icon}`}>
                <div className="workflow-icon">
                  <img src={step.icon} alt="" aria-hidden="true" />
                </div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <img
            className="workflow-preview"
            src={image8}
            alt="TilliT product verification dashboard"
          />
        </div>
      </section>
      <section
        className="features content-width"
        aria-labelledby="features-title"
      >
        <SectionHeading
          title={
            <>
              Built for Expanding Brands &amp; Busy
              <br />
              Merchants
            </>
          }
          description="Simplify document verification and keep your store fully compliant."
        />
        <div className="three-column-grid">
          {featureCards.map((card) => (
            <ContentCard key={card.title} {...card} />
          ))}
        </div>
      </section>
      <section
        className="success-stories content-width"
        aria-labelledby="stories-title"
      >
        <SectionHeading
          title="Merchant Success Stories"
          description="See how brands use TilliT to build supply chain transparency."
        />
        <div className="three-column-grid">
          {successStories.map((story) => (
            <article className="story-card" key={story.company}>
              <div className="story-brand">{story.company}</div>
              <div className="story-copy">
                <span>{story.outcome}</span>
                <h3>{story.title}</h3>
                <p>{story.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="badges-section" aria-labelledby="badges-title">
        <div className="content-width">
          <SectionHeading
            title="Badges Supported"
            description="Select a badge to view its specific verification requirements and compliance standards."
          >
            <em>Food &amp; Beverages</em>
          </SectionHeading>
          <div className="badge-grid">
            {badges.map((badge) => (
              <ContentCard key={badge.title} {...badge} />
            ))}
          </div>
        </div>
       
      </section>
      <section className="blogs-section" aria-labelledby="blogs-title">
        <div className="content-width">
          <SectionHeading title="Blogs from TilliT" />
          <div className="three-column-grid">
            {blogPosts.map((post) => (
              <article className="blog-card" key={post.title}>
                <div className={`blog-image ${post.className}`}>
                  {post.dateImage && (
                    <img src={post.dateImage} alt={post.date} />
                  )}
                </div>
                <div className="blog-copy">
                  <time>{post.date}</time>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="content-width footer-content">
          <div className="footer-main">
            <section className="footer-brand" aria-label="TilliT">
              <img src={image5} alt="TilliT" />
              <p>
                AI-powered supply chain traceability and storefront badge
                verification for modern e-commerce brands.
              </p>
            </section>
            <nav className="footer-links" aria-label="Footer navigation">
              {footerColumns.map((column) => (
                <section key={column.heading}>
                  <h2>{column.heading}</h2>
                  <ul>
                    {column.links.map((link) => (
                      <li key={link}>
                        <a href="#">{link}</a>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </nav>
          </div>
          <div className="copyright">
            © 2026 Tillit. World. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
};