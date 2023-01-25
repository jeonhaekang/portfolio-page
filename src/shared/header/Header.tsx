import styles from '@/styles/shared/Header.module.scss';
import Navbar from './components/Navbar';

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <h1>Portfolio</h1>
      </div>
      <div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
