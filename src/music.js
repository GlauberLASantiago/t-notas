export const LETTERS=['C','D','E','F','G','A','B'];
const NAMES=['Dó','Ré','Mi','Fá','Sol','Lá','Si'],PITCHES=[0,2,4,5,7,9,11];
export const NOTES=Object.fromEntries(LETTERS.map((id,i)=>[id,{name:NAMES[i],letter:i}]));
export const CATEGORIES={treble:{name:'Clave de Sol'},bass:{name:'Clave de Fá'},alto:{name:'Clave de Dó'},grand:{name:'Piano · pauta dupla'}};
export const CLEF_BOTTOM={treble:30,bass:18,alto:24};
export function noteLabel(note){return NAMES[typeof note==='string'?LETTERS.indexOf(note):note.letter]||'';}
export const answerLabel=noteLabel;
export function noteAt(position,clef='treble'){if(!Number.isInteger(position)||position<0||position>22||!Object.hasOwn(CLEF_BOTTOM,clef))throw new Error('Posição de pauta inválida');const diatonic=CLEF_BOTTOM[clef]+position-7,letter=((diatonic%7)+7)%7,octave=Math.floor(diatonic/7),midi=12*(octave+1)+PITCHES[letter],index=diatonic-11;return{letter,name:LETTERS[letter],octave,midi,position,audio:`./assets/audio/${String(index).padStart(2,'0')}-${LETTERS[letter]}${octave}.ogg`};}
export function noteSvg(note,clef='treble',grand=false,showHints=false){
 const width=680,staffs=grand?[{clef:'treble',bottom:150},{clef:'bass',bottom:370}]:[{clef,bottom:150}],refs={treble:{glyph:'𝄞',y:0},bass:{glyph:'𝄢',y:-24},alto:{glyph:'𝄡',y:-10}};
 const selected=staffs.find(s=>s.clef===clef)||staffs[0],y=selected.bottom-(note.position-7)*7;
 const top=Math.min(15,y-35),end=Math.max(grand?420:225,y+35),height=end-top;
 const staves=staffs.map(s=>`<g class="staff-lines" stroke="currentColor" stroke-width="1">${[0,1,2,3,4].map(i=>`<line x1="35" y1="${s.bottom-i*14}" x2="645" y2="${s.bottom-i*14}"/>`).join('')}</g><text x="53" y="${s.bottom+refs[s.clef].y}" font-size="78" font-family="Segoe UI Symbol,serif">${refs[s.clef].glyph}</text>`).join('');
 let ledgers='';for(let l=selected.bottom+14;l<=y;l+=14)ledgers+=`<line x1="318" y1="${l}" x2="362" y2="${l}"/>`;for(let l=selected.bottom-70;l>=y;l-=14)ledgers+=`<line x1="318" y1="${l}" x2="362" y2="${l}"/>`;
 return `<svg class="note-staff" viewBox="0 ${top} ${width} ${height}" role="img" aria-label="${grand?'Pauta dupla de piano':'Pauta musical'}"><title>Identifique a nota pela posição na pauta</title>${staves}${grand?'<path d="M 28 94 Q 3 162 28 232 Q 3 301 28 370" fill="none" stroke="currentColor" stroke-width="3"/>':''}<g stroke="currentColor" stroke-width="1">${ledgers}<ellipse cx="340" cy="${y}" rx="13" ry="8" fill="none" stroke-width="4" transform="rotate(-16 340 ${y})"/></g>${showHints?'<text x="340" y="'+(end-8)+'" text-anchor="middle" font-size="16">Conte as linhas e os espaços a partir da clave.</text>':''}</svg>`;
}
