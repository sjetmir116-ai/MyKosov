import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

function HomeScreen({ setFaqjaAktuale }) {
  const { darkMode, setDarkMode, gjuha, setGjuha, userLocation, gpsError, t } = useContext(AppContext);
  const [vleratEKerkimit, setVleratEKerkimit] = useState('');

  // Lista zyrtare e kategorive të kërkuara nga dokumenti yt i rregullave
  const kategoriteSmart = [
    { emri: "Hotel", ikona: "🏨" }, { emri: "Restaurant", ikona: "🍔" },
    { emri: "Hospital", ikona: "🏥" }, { emri: "Pharmacy", ikona: "💊" },
    { emri: "Coffee", ikona: "☕" }, { emri: "Gas station", ikona: "⛽" },
    { emri: "Electric charger", ikona: "⚡" }, { emri: "Shopping mall", ikona: "🛍️" },
    { emri: "Castle", ikona: "🏰" }, { emri: "Museum", ikona: "🏛️" }
  ];

  // Produktet e Seksionit Unik "Made in Kosovo" 🇽🇰
  const produkteVendore = [
    { id: 1, emri: "Verë nga Rahoveci", lloji: "Artizanat & Prodhim", foto: "🍷" },
    { id: 2, emri: "Plisa Tradicionalë", lloji: "Kulturë", foto: "👑" },
    { id: 3, emri: "Ajvar i Krushës", lloji: "Ushqim Vendor", foto: "🌶️" },
    { id: 4, emri: "Filigran nga Prizreni", lloji: "Argjendtari", foto: "💍" }
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', paddingBottom: '100px' }}>
      
      {/* 1. SEKSIONI I ZGJEDHJES SË 5 GJUHËVE */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {['sq', 'en', 'fr', 'de', 'it'].map((lang) => (
          <button 
            key={lang}
            onClick={() => setGjuha(lang)}
            style={{
              padding: '6px 12px',
              borderRadius: '20px',
              border: 'none',
              backgroundColor: gjuha === lang ? '#3b82f6' : (darkMode ? '#262626' : '#e5e5ea'),
              color: gjuha === lang ? '#fff' : (darkMode ? '#a1a1aa' : '#1c1c1e'),
              fontWeight: '700',
              cursor: 'pointer',
              textTransform: 'uppercase',
              fontSize: '12px'
            }}
          >
            {lang}
          </button>
        ))}
      </div>

      {/* 2. KREU DHE LOKACIONI GPS */}
      <div style={{ textAlign: 'center', marginBottom: '25px' }}>
        <h2 style={{ fontSize: '26px', fontWeight: '800', margin: '0 0 8px 0' }}>{t('mireseven')} 👋</h2>
        
        {/* Paneli i GPS-it Realtime */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 14px', borderRadius: '20px', backgroundColor: darkMode ? '#1c1c1e' : '#e3f2fd', fontSize: '13px', fontWeight: '600', color: '#007bff' }}>
          📍 {userLocation ? `${t('rrethMeje')}: ${userLocation.lat.toFixed(4)}, ${userLocation.lng.toFixed(4)}` : (gpsError ? `GPS Error: ${gpsError}` : t('loadingGps'))}
        </div>
      </div>

      {/* 3. SHIRITI I KËRKIMIT SMART */}
      <div style={{ marginBottom: '30px' }}>
        <input 
          placeholder={t('kerko')}
          value={vleratEKerkimit}
          onChange={(e) => setVleratEKerkimit(e.target.value)}
          style={{
            width: '100%',
            padding: '16px 20px',
            borderRadius: '20px',
            border: 'none',
            fontSize: '16px',
            backgroundColor: darkMode ? '#1c1c1e' : '#ffffff',
            color: darkMode ? '#fff' : '#000',
            boxShadow: darkMode ? '0 4px 12px rgba(0,0,0,0.4)' : '0 4px 12px rgba(0,0,0,0.05)',
            outline: 'none',
            boxSizing: 'border-box'
          }}
        />
      </div>

      {/* 4. SEKSIONI UNIK: MADE IN KOSOVO 🇽🇰 */}
      <div style={{ marginBottom: '35px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '15px', color: '#ef4444' }}>{t('madeInKosovo')}</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {produkteVendore.map((prod) => (
            <div key={prod.id} style={{
              backgroundColor: darkMode ? '#1c1c1e' : '#ffffff',
              padding: '16px',
              borderRadius: '20px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              border: darkMode ? '1px solid #2d2d2d' : '1px solid #f2f2f7'
            }}>
              <div style={{ fontSize: '32px' }}>{prod.foto}</div>
              <div>
                <h4 style={{ margin: '0 0 2px 0', fontSize: '14px', fontWeight: '700' }}>{prod.emri}</h4>
                <p style={{ margin: 0, fontSize: '11px', color: '#8e8e93', fontWeight: '500' }}>{prod.lloji}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. KATEGORITË SMART SIKUR GOOGLE MAPS */}
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '15px' }}>{t('kategorite')}</h3>
        <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '10px', scrollbarWidth: 'none' }}>
          {kategoriteSmart.map((kat, index) => (
            <div key={index} style={{
              minWidth: '90px',
              backgroundColor: darkMode ? '#1c1c1e' : '#ffffff',
              padding: '14px',
              borderRadius: '20px',
              textAlign: 'center',
              boxShadow: '0 4px 10px rgba(0,0,0,0.02)',
              cursor: 'pointer',
              border: darkMode ? '1px solid #2d2d2d' : '1px solid #f2f2f7'
            }}>
              <div style={{ fontSize: '26px', marginBottom: '6px' }}>{kat.ikona}</div>
              <div style={{ fontSize: '12px', fontWeight: '700' }}>{kat.emri}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default HomeScreen;
