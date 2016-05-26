const Clearingnumber = [
  { interval: '1100..1199', name: 'Nordea' },
  { interval: '1200..1399', name: 'Danske Bank' },
  { interval: '1400..2099', name: 'Nordea' },
  { interval: '2300..2399', name: 'Ålandsbanken' },
  { interval: '2400..2499', name: 'Danske Bank' },
  { interval: '3000..3299', name: 'Nordea' },
  { interval: '3300..3300', name: 'Nordea', minLength: 10, luhnForSerial: true },  // Personkonto.
  { interval: '3301..3399', name: 'Nordea' },
  { interval: '3400..3409', name: 'Länsförsäkringar Bank' },
  { interval: '3410..3781', name: 'Nordea' },
  { interval: '3782..3782', name: 'Nordea', minLength: 10, luhnForSerial: true },  // Personkonto.
  { interval: '3783..4999', name: 'Nordea' },
  { interval: '5000..5999', name: 'SEB' },
  { interval: '6000..6999', name: 'Handelsbanken', maxLength: 9, minLength: 8 },
  { interval: '7000..7999', name: 'Swedbank' },
  { interval: '8000..8999', name: 'Swedbank', minLength: 10, checksumForClearing: true, zerofill: true }, // Can be fewer chars but must be zero-filled, so let's call it 10.
  { interval: '9020..9029', name: 'Länsförsäkringar Bank' },
  { interval: '9040..9049', name: 'Citibank' },
  { interval: '9060..9069', name: 'Länsförsäkringar Bank' },
  { interval: '9090..9099', name: 'Royal Bank of Scotland' },
  { interval: '9100..9109', name: 'Nordnet Bank' },
  { interval: '9120..9124', name: 'SEB' },
  { interval: '9130..9149', name: 'SEB' },
  { interval: '9150..9169', name: 'Skandiabanken' },
  { interval: '9170..9179', name: 'Ikano Bank' },
  { interval: '9180..9189', name: 'Danske Bank', minLength: 10 },
  { interval: '9190..9199', name: 'Den Norske Bank' },
  { interval: '9230..9239', name: 'Marginalen Bank' },
  { interval: '9250..9259', name: 'SBAB' },
  { interval: '9260..9269', name: 'Den Norske Bank' },
  { interval: '9270..9279', name: 'ICA Banken' },
  { interval: '9280..9289', name: 'Resurs Bank' },
  { interval: '9300..9349', name: 'Sparbanken Öresund', minLength: 10, zerofill: true },
  { interval: '9400..9449', name: 'Forex Bank' },
  { interval: '9460..9469', name: 'GE Money Bank' },
  { interval: '9470..9479', name: 'Fortis Bank' },
  { interval: '9500..9549', name: 'Nordea/Plusgirot', maxLength: 10, minLength: 1 },
  { interval: '9550..9569', name: 'Avanza Bank' },
  { interval: '9570..9579', name: 'Sparbanken Syd', minLength: 10, zerofill: true },
  { interval: '9960..9969', name: 'Nordea/Plusgirot', maxLength: 10, minLength: 1 }
];

export default Clearingnumber;
