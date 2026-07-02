import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../ui/Sidebar';
import BottomBar from '../ui/BottomBar';
import PythonChan from '../character/PythonChan';
import AnimatedBg from './AnimatedBg';
import { useProgress } from '../../hooks/useProgress';
import { getShopItem } from '../../data/shopItems';
import './AppLayout.css';

const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { equippedWallpaper } = useProgress();
  const wallpaper = getShopItem(equippedWallpaper);

  // Theme class from wallpaper selection
  const themeClass = wallpaper?.themeClass || '';

  const wallpaperStyle = wallpaper?.imageSrc
    ? { backgroundImage: `url(${wallpaper.imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : {};

  return (
    <div className={`app-layout ${themeClass}`}>
      {/* Animated background — always behind everything */}
      <AnimatedBg themeClass={themeClass} />

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {sidebarOpen && (
        <div
          className="sidebar-backdrop"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <header className="topbar">
        <button
          className="hamburger-btn"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open lesson menu"
        >
          <span /><span /><span />
        </button>
        <span className="topbar-title">
          <span className="topbar-title-main">Python</span>
          <span className="topbar-title-accent">Chan</span>
        </span>
        <div className="topbar-spacer" />
      </header>

      <main className="main-content" style={wallpaperStyle}>
        <Outlet />
      </main>

      <BottomBar />
      <PythonChan />
    </div>
  );
};

export default AppLayout;