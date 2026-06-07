import { personal } from '../data/portfolio';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
        <p className="footer-sub">Built with React + Vite</p>
      </div>
    </footer>
  );
}
