import { useState } from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/content';

export default function App() {
  const [page, setPage] = useState('home')

  const handleHomeClick = () => {
    setPage('home')
  }

  const handleAddCardClick = () => {
    // Placeholder without logic for now.
  }

  const handleProfileClick = () => {
    setPage('profile')
  }

  return (
    <>
        <Header
          onHomeClick={handleHomeClick}
          onAddCardClick={handleAddCardClick}
          onProfileClick={handleProfileClick}
        />
        {page === 'home' ? (
          <Content />
        ) : (
          <main style={{ padding: '24px' }}>
            <h2>Профиль</h2>
            <p>Здесь будет страница профиля.</p>
          </main>
        )}
    </>
  )
}
