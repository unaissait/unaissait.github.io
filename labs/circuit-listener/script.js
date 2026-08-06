const searchBox = document.getElementById('search-box');
const micButton = document.getElementById('mic-button');
const results = document.getElementById('results');
const status = document.getElementById('status');
const cleanName = name => name.replace(/[_-]+/g,' ').replace(/\b[a-f0-9]{12,}\b/gi,'').replace(/\s+/g,' ').trim();
function show(term=''){
  const q=term.toLowerCase().trim();
  const matches=(q?svgFiles.filter(file=>file.keywords.some(k=>k.toLowerCase().includes(q))||file.name.toLowerCase().includes(q)):svgFiles.slice(0,24)).slice(0,48);
  results.innerHTML='';
  matches.forEach(file=>{
    const card=document.createElement('article'); card.className='result';
    const img=document.createElement('img'); img.src=file.url; img.alt=cleanName(file.name); img.loading='lazy';
    const p=document.createElement('p'); p.textContent=cleanName(file.name);
    card.append(img,p); results.appendChild(card);
  });
  status.textContent=q?`${matches.length} matching components shown.`:'Showing a sample of the component library.';
}
searchBox.addEventListener('input',()=>show(searchBox.value));
const Recognition=window.SpeechRecognition||window.webkitSpeechRecognition;
if(!Recognition){micButton.disabled=true;micButton.textContent='Voice unavailable';}
else micButton.addEventListener('click',()=>{
  const recognition=new Recognition(); recognition.lang='en-US'; recognition.interimResults=false;
  recognition.onstart=()=>{micButton.textContent='Listening…'; status.textContent='Listening for a component name.'};
  recognition.onresult=e=>{const text=e.results[0][0].transcript;searchBox.value=text;show(text)};
  recognition.onerror=e=>{status.textContent=`Voice input error: ${e.error}. You can still type a component name.`};
  recognition.onend=()=>{micButton.textContent='Speak'};
  recognition.start();
});
show();
