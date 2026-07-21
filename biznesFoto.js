const FOTO_PER_KATEGORI = {
  kafene: [
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=80',
  ],
  restorant: [
    'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80',
  ],
  hotel: [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
  ],
  market: [
    'https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=900&q=80',
  ],
  servis: [
    'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1632823471565-1ecab53a4b17?auto=format&fit=crop&w=900&q=80',
  ],
};

const FOTO_REZERVE = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80';

function normalizoKategorine(kategoria = '') {
  const vlera = String(kategoria)
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  if (vlera.includes('kafene') || vlera.includes('kafe')) return 'kafene';
  if (vlera.includes('restorant')) return 'restorant';
  if (vlera.includes('hotel')) return 'hotel';
  if (vlera.includes('market') || vlera.includes('supermarket')) return 'market';
  if (vlera.includes('servis') || vlera.includes('service')) return 'servis';
  return null;
}

function indeksIStabilizuar(teksti, gjatesia) {
  return Array.from(String(teksti)).reduce((shuma, shenja) => shuma + shenja.charCodeAt(0), 0) % gjatesia;
}

export function merrFotoBiznesi(kategoria, emri = '') {
  const kategoriEPranuar = normalizoKategorine(kategoria);
  const foto = kategoriEPranuar ? FOTO_PER_KATEGORI[kategoriEPranuar] : null;

  return foto ? foto[indeksIStabilizuar(emri, foto.length)] : FOTO_REZERVE;
}

export { FOTO_REZERVE };
