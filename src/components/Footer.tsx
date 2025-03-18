/**
 * Footer Component
 * Displays a footer with the current year.
 */
function Footer() {
  // Get the current year dynamically
  const currentDate = new Date().getFullYear();

  return (
    <div className="footer">
      <p className="footer__copyright">© All rights reserved, {currentDate}</p>
    </div>
  );
}

export default Footer;
