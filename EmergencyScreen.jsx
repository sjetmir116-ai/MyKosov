import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function EmergencyScreen() {
  const { darkMode, userLocation, t } = useContext(AppContext);

  // Numrat zyrtarë të urgjencës në Kosovë sipas ligjit
  const numratUrgjence = [
    { sherbimi: "Policia", numri: "192", ikona: "👮‍♂️", ngjyra: "#1e3a8a" },
    {
      Zjarrefikesit: "Zjarrfikësit",
      numri: "193",
      ikona: "👨‍🚒",
      ngjyra: "#b91c1c"
    },
    { NdihmaERashte: "Ndihma e Shpejtë", numri: "194", ikona: "🚑", ngjyra: "#15803d" },
    { mbrojtjaCivile: "Mbrojtja Civile", numri: "112", ikona: "🚨", ngjyra: "#b45309" }
  ];

  const handleSOS = () => {
    if (userLocation) {
      alert(`🚨 ALERTI SOS U AKTIVIZUA!\n\nLokacioni yt live u regjistrua:\nLatitude: ${userLocation.lat}\nLongitude: ${userLocation.lng}\n\nDuke thirrur qendrën e koordinimit...`);
      window.location.href = "tel:112";
    } else {
      alert("🚨 ALERTI SOS!\n\nDuke thirrur urgjencën 112 zyrtare...");
      window.location.href = "tel:112";
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', paddingBottom: '100px', fontFamily: 'sans-serif' }}>
      
      {/* 1. BUTONI GJIGANT SOS INTERAKTIV */}
      <div style={{ textAlign: 'center', marginBottom: '35px', marginTop: '10px' }}>
        <button 
          onClick={handleSOS}
          style={{
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            backgroundColor: '#dc2626',
            color: '#fff',
            border: '8px solid #fca5a5',
            fontSize: '24px',
            fontWeight: '900',
            cursor: 'pointer',
            boxShadow: '0 10px 25px rgba(220, 38, 38, 0.4)',
            transition: 'transform 0.1s ease',
            outline: 'none'
          }}
          onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
          onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          SOS
        </button>
        <p style={{ color: '#ef4444', fontSize: '14px', fontWeight: '700', marginTop: '12px' }}>
          Shtyp në rast rreziku për thirrje direkte dhe GPS dërgim!
        </p>
      </div>

      {/* 2. LISTA E NUMRAVE KOMBËTARË TË URGJENCËS */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '15px' }}>Numrat e Urgjencës 🇽🇰</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {numratUrgjence.map((item, index) => (
            <a 
              key={index}
              href={`tel:${item.numri}`}
              style={{
                textDecoration: 'none',
                backgroundColor: darkMode ? '#1c1c1e' : '#ffffff',
                padding: '16px',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                border: darkMode ? '1px solid #2d2d2d' : '1px solid #e5e7eb',
                boxShadow: '0 4px 10px rgba(0,0,0,0.01)',
                color: darkMode ? '#fff' : '#000'
              }}
            >
              <div style={{ fontSize: '28px', padding: '8px', borderRadius: '12px', backgroundColor: `${item.ngjyra}15`, color: item.ngjyra }}>
                {item.ikona}
              </div>
              <div>
                <h4 style={{ margin: '0 0 2px 0', fontSize: '14px', fontWeight: '700' }}>{item.sherbimi}</h4>
                <p style={{ margin: 0, fontSize: '16px', fontWeight: '800', color: item.ngjyra }}>{item.numri}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* 3. LOKACIONET MË TË AFËRTA TË SHPËNDARJES MJEKËSORE */}
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '15px' }}>Ndihma Mjekësore Më e Afërt 🏥</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{
            backgroundColor: darkMode ? '#1c1c1e' : '#ffffff',
            padding: '16px',
            borderRadius: '20px',
            border: darkMode ? '1px solid #2d2d2d' : '1px solid #e5e7eb',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: '700' }}>Spitali Rajonal / QKMF</h4>
              <p style={{ margin: 0, fontSize: '12px', color: '#8e8e93' }}>📍 Gjetja automatike me GPS sipas rrezes</p>
            </div>
            <button style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '8px 14px', borderRadius: '12px', fontWeight: '700', fontSize: '12px', cursor: 'pointer' }}>Navigo 🗺️</button>
          </div>

          <div style={{
            backgroundColor: darkMode ? '#1c1c1e' : '#ffffff',
            padding: '16px',
            borderRadius: '20px',
            border: darkMode ? '1px solid #2d2d2d' : '1px solid #e5e7eb',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: '700' }}>Farmacia Kujdestare 24/7</h4>
              <p style={{ margin: 0, fontSize: '12px', color: '#8e8e93' }}>💊 Leximi live i orarit të kujdestarisë</p>
            </div>
            <button style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '8px 14px', borderRadius: '12px', fontWeight: '700', fontSize: '12px', cursor: 'pointer' }}>Hap Hartën</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default EmergencyScreen;
