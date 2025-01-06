$(document).ready(function () {
  generateSignaturesStr("Elon Musk");
  $('#generateBtn').on('click', function () {
    generateSignatures();
  });

});

function generateSignaturesStr(str) {
  const name = str;
  const signaturesContainer = document.getElementById('signatures');
  signaturesContainer.innerHTML = '';

  if (name.trim() === '') {
      alert('Please enter your name.');
      return;
  }

  const fonts = [
      { name: 'Reenie Beanie', className: 'font-reenie-beanie' },
      { name: 'Architects Daughter', className: 'font-architects-daughter' },
      { name: 'Sofia', className: 'font-sofia' },
      { name: 'Herr Von Muellerhoff', className: 'font-herr-von-muellerhoff' },
      { name: 'Calligraffitti', className: 'font-calligraffitti' },
      { name: 'Delius', className: 'font-delius' },
      { name: 'Kalam', className: 'font-kalam' },
      { name: 'Caveat', className: 'font-caveat' },
      { name: 'Seaweed Script', className: 'font-seaweed-script' },
      { name: 'Pinyon Script', className: 'font-pinyon-script' },
      { name: 'Kristi', className: 'font-kristi' },
      { name: 'Petit Formal Script', className: 'font-petit-formal-script' },
      { name: 'Monsieur La Doulaise', className: 'font-monsieur-la-doulaise' },
      { name: 'Satisfy', className: 'font-satisfy' },
      { name: 'Shadows Into Light Two', className: 'font-shadows-into-light-two' },
      { name: 'Parisienne', className: 'font-parisienne' },
      { name: 'Rancho', className: 'font-rancho' },
      { name: 'Handlee', className: 'font-handlee' },
      { name: 'Merienda', className: 'font-merienda' },
      { name: 'Sriracha', className: 'font-sriracha' },
      { name: 'Macondo', className: 'font-macondo' },
      { name: 'Marck Script', className: 'font-marck-script' },
      { name: 'Italianno', className: 'font-italianno' },
      { name: 'Yesteryear', className: 'font-yesteryear' },
      { name: 'Alex Brush', className: 'font-alex-brush' },
      { name: 'Courgette', className: 'font-courgette' },
      { name: 'Nanum Pen Script', className: 'font-nanum-pen-script' },
      { name: 'Rochester', className: 'font-rochester' },
      { name: 'Charm', className: 'font-charm' },
      { name: 'Gloria Hallelujah', className: 'font-gloria-hallelujah' },
      { name: 'Kaushan Script', className: 'font-kaushan-script' },
      { name: 'Rock Salt', className: 'font-rock-salt' },
      { name: 'Yellowtail', className: 'font-yellowtail' },
      { name: 'Sacramento', className: 'font-sacramento' },
      { name: 'Playball', className: 'font-playball' },
      { name: 'Covered By Your Grace', className: 'font-covered-by-your-grace' },
      { name: 'Mr Dafoe', className: 'font-mr-dafoe' },
      { name: 'Nanum Brush Script', className: 'font-nanum-brush-script' },
      { name: 'Mrs Saint Delafield', className: 'font-mrs-saint-delafield' },
      { name: 'Ms Madi', className: 'font-ms-madi' },
      { name: 'Dancing Script', className: 'font-dancing-script' },
      { name: 'Permanent Marker', className: 'font-permanent-marker' },
      { name: 'Cedarville Cursive', className: 'font-cedarville-cursive' },
      { name: 'Niconne', className: 'font-niconne' },
      { name: 'Great Vibes', className: 'font-great-vibes' },
      { name: 'Homemade Apple', className: 'font-homemade-apple' },
      { name: 'Klee One', className: 'font-klee-one' },
      { name: 'Qwigley', className: 'font-qwigley' },
      { name: 'Pacifico', className: 'font-pacifico' },
      { name: 'Bad Script', className: 'font-bad-script' },
      { name: 'Cookie', className: 'font-cookie' },
      { name: 'Norican', className: 'font-norican' },
      { name: 'Allison', className: 'font-allison' },
      { name: 'Indie Flower', className: 'font-indie-flower' },
      { name: 'Arizonia', className: 'font-arizonia' },
      { name: 'Tangerine', className: 'font-tangerine' },
      { name: 'Julee', className: 'font-julee' },
      { name: 'Playwrite SK', className: 'font-playwrite-sk' },
      { name: 'Playwrite AU VIC', className: 'font-playwrite-au-vic' },
      { name: 'Allura', className: 'font-allura' }
  ];

  fonts.forEach((font, index) => {
      const signatureDiv = document.createElement('div');
      signatureDiv.className = 'text-center p-4 bg-white rounded-lg shadow-lg';

      const signatureText = document.createElement('p');
      signatureText.className = `text-4xl ${font.className} text-gray-800`;
      signatureText.innerText = name;

      signatureDiv.appendChild(signatureText);

      const buttonContainer = document.createElement('div');
      buttonContainer.className = 'mt-2 flex justify-center space-x-2';

      const downloadButton = document.createElement('button');
      downloadButton.className = 'bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition';
      downloadButton.innerText = 'Download';
      downloadButton.onclick = () => downloadSignatureAsPNG(name, font.name, font.className);
      buttonContainer.appendChild(downloadButton);

      const copyButton = document.createElement('button');
      copyButton.className = 'bg-green-500 text-white p-2 rounded hover:bg-green-600 transition';
      copyButton.innerText = 'Copy';
      copyButton.onclick = () => copySignatureAsPNG(name, font.name, font.className);
      buttonContainer.appendChild(copyButton);

      signatureDiv.appendChild(buttonContainer);
      signaturesContainer.appendChild(signatureDiv);
  });
}

function generateSignatures() {
  const name = document.getElementById('nameInput').value;
  const signaturesContainer = document.getElementById('signatures');
  signaturesContainer.innerHTML = '';

  if (name.trim() === '') {
      alert('Please enter your name.');
      return;
  }

  const fonts = [
      { name: 'Reenie Beanie', className: 'font-reenie-beanie' },
      { name: 'Architects Daughter', className: 'font-architects-daughter' },
      { name: 'Sofia', className: 'font-sofia' },
      { name: 'Herr Von Muellerhoff', className: 'font-herr-von-muellerhoff' },
      { name: 'Calligraffitti', className: 'font-calligraffitti' },
      { name: 'Delius', className: 'font-delius' },
      { name: 'Kalam', className: 'font-kalam' },
      { name: 'Caveat', className: 'font-caveat' },
      { name: 'Seaweed Script', className: 'font-seaweed-script' },
      { name: 'Pinyon Script', className: 'font-pinyon-script' },
      { name: 'Kristi', className: 'font-kristi' },
      { name: 'Petit Formal Script', className: 'font-petit-formal-script' },
      { name: 'Monsieur La Doulaise', className: 'font-monsieur-la-doulaise' },
      { name: 'Satisfy', className: 'font-satisfy' },
      { name: 'Shadows Into Light Two', className: 'font-shadows-into-light-two' },
      { name: 'Parisienne', className: 'font-parisienne' },
      { name: 'Rancho', className: 'font-rancho' },
      { name: 'Handlee', className: 'font-handlee' },
      { name: 'Merienda', className: 'font-merienda' },
      { name: 'Sriracha', className: 'font-sriracha' },
      { name: 'Macondo', className: 'font-macondo' },
      { name: 'Marck Script', className: 'font-marck-script' },
      { name: 'Italianno', className: 'font-italianno' },
      { name: 'Yesteryear', className: 'font-yesteryear' },
      { name: 'Alex Brush', className: 'font-alex-brush' },
      { name: 'Courgette', className: 'font-courgette' },
      { name: 'Nanum Pen Script', className: 'font-nanum-pen-script' },
      { name: 'Rochester', className: 'font-rochester' },
      { name: 'Charm', className: 'font-charm' },
      { name: 'Gloria Hallelujah', className: 'font-gloria-hallelujah' },
      { name: 'Kaushan Script', className: 'font-kaushan-script' },
      { name: 'Rock Salt', className: 'font-rock-salt' },
      { name: 'Yellowtail', className: 'font-yellowtail' },
      { name: 'Sacramento', className: 'font-sacramento' },
      { name: 'Playball', className: 'font-playball' },
      { name: 'Covered By Your Grace', className: 'font-covered-by-your-grace' },
      { name: 'Mr Dafoe', className: 'font-mr-dafoe' },
      { name: 'Nanum Brush Script', className: 'font-nanum-brush-script' },
      { name: 'Mrs Saint Delafield', className: 'font-mrs-saint-delafield' },
      { name: 'Ms Madi', className: 'font-ms-madi' },
      { name: 'Dancing Script', className: 'font-dancing-script' },
      { name: 'Permanent Marker', className: 'font-permanent-marker' },
      { name: 'Cedarville Cursive', className: 'font-cedarville-cursive' },
      { name: 'Niconne', className: 'font-niconne' },
      { name: 'Great Vibes', className: 'font-great-vibes' },
      { name: 'Homemade Apple', className: 'font-homemade-apple' },
      { name: 'Klee One', className: 'font-klee-one' },
      { name: 'Qwigley', className: 'font-qwigley' },
      { name: 'Pacifico', className: 'font-pacifico' },
      { name: 'Bad Script', className: 'font-bad-script' },
      { name: 'Cookie', className: 'font-cookie' },
      { name: 'Norican', className: 'font-norican' },
      { name: 'Allison', className: 'font-allison' },
      { name: 'Indie Flower', className: 'font-indie-flower' },
      { name: 'Arizonia', className: 'font-arizonia' },
      { name: 'Tangerine', className: 'font-tangerine' },
      { name: 'Julee', className: 'font-julee' },
      { name: 'Playwrite SK', className: 'font-playwrite-sk' },
      { name: 'Playwrite AU VIC', className: 'font-playwrite-au-vic' },
      { name: 'Allura', className: 'font-allura' }
  ];

  fonts.forEach((font, index) => {
      const signatureDiv = document.createElement('div');
      signatureDiv.className = 'text-center p-4 bg-white rounded-lg shadow-lg';

      const signatureText = document.createElement('p');
      signatureText.className = `text-4xl ${font.className} text-gray-800`;
      signatureText.innerText = name;

      signatureDiv.appendChild(signatureText);

      const buttonContainer = document.createElement('div');
      buttonContainer.className = 'mt-2 flex justify-center space-x-2';

      const downloadButton = document.createElement('button');
      downloadButton.className = 'bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition';
      downloadButton.innerText = 'Download';
      downloadButton.onclick = () => downloadSignatureAsPNG(name, font.name, font.className);
      buttonContainer.appendChild(downloadButton);

      const copyButton = document.createElement('button');
      copyButton.className = 'bg-green-500 text-white p-2 rounded hover:bg-green-600 transition';
      copyButton.innerText = 'Copy';
      copyButton.onclick = () => copySignatureAsPNG(name, font.name, font.className);
      buttonContainer.appendChild(copyButton);

      signatureDiv.appendChild(buttonContainer);
      signaturesContainer.appendChild(signatureDiv);
  });
}

function downloadSignatureAsPNG(name, fontName, className) {
  const canvas = createSignatureCanvas(name, fontName, className);
  const link = document.createElement('a');
  link.href = canvas.toDataURL('image/png');
  link.download = `${name}.png`;
  link.click();
}

function copySignatureAsPNG(name, fontName, className) {
  const canvas = createSignatureCanvas(name, fontName, className);
  canvas.toBlob(blob => {
      const item = new ClipboardItem({ 'image/png': blob });
      navigator.clipboard.write([item]);
      alert('Signature copied to clipboard as PNG!');
  });
}

function createSignatureCanvas(name, fontName, className) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const width = 400;
  const height = 150;
  const margin = 20;
  let fontSize = height * 0.7;

  canvas.width = width;
  canvas.height = height;

  context.clearRect(0, 0, width, height);

  const font = getComputedStyle(document.body).getPropertyValue(`--${className}`).trim();
  context.font = `${fontSize}px ${fontName}, cursive`;
  context.textAlign = 'center';
  context.textBaseline = 'middle';

  while (context.measureText(name).width > width - margin * 2 && fontSize > 10) {
      fontSize -= 2;
      context.font = `${fontSize}px ${fontName}, cursive`;
  }

  context.fillStyle = '#000000';
  context.fillText(name, width / 2, height / 2);

  return canvas;
}