const grb2rgb = v => 0x100000 + (v&0x0000FF) | ((v>>8)&0x00FF00) | ((v<<8)&0xFF0000);

export default grb2rgb;
