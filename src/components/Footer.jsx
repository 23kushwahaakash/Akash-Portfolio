const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "2rem",
        borderTop: "1px solid var(--border)",
        fontFamily: "var(--font-mono)",
        fontSize: "0.72rem",
        color: "var(--muted)",
      }}
    >
      Designed & built with 🌿 by{" "}
      <span className="grad">Akash Kushwaha</span>{" "}
      · {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;