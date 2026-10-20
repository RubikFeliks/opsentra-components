/* Static catalog: no platform credentials, no executable markup from metadata. */
const list=document.getElementById('components'),status=document.getElementById('status');let components=[];
function safeDownload(value){try{const url=new URL(value);return url.protocol==='https:'&&!url.username&&!url.password?url.href:null;}catch{return null;}}
function render(){
 list.replaceChildren();const query=document.getElementById('search').value.trim().toLowerCase(),platform=document.getElementById('platform').value,category=document.getElementById('category').value;
 const items=components.filter(item=>(!platform||item.platforms?.includes(platform))&&(!category||item.category===category)&&[item.name,item.description,...(item.browsers||[])].join(' ').toLowerCase().includes(query));
 for(const item of items){const card=document.createElement('article');function add(tag,text){const node=document.createElement(tag);node.textContent=text;card.append(node);return node;}
 add('h2',item.name);add('p',item.description);add('p',`${item.version||'待发布版本'} · ${(item.platforms||[]).join(' / ')}${item.architecture?' · '+item.architecture:''}`).className='meta';
 const download=safeDownload(item.download_url);if(item.status==='published'&&download&&/^[a-f0-9]{64}$/.test(item.sha256||'')){const a=add('a','下载');a.href=download;a.target='_blank';a.rel='noopener noreferrer';add('code','SHA256 '+item.sha256);}else add('p','待发布').className='pending';
 if(item.installation)add('p',item.installation).className='meta';list.append(card);
 }status.textContent=items.length?`${items.length} 个组件 · 请确认系统与架构后下载`:'没有符合条件的组件';
}
for(const id of ['search','platform','category'])document.getElementById(id).addEventListener(id==='search'?'input':'change',render);
fetch('catalog.json',{cache:'no-cache'}).then(response=>{if(!response.ok)throw Error();return response.json();}).then(data=>{if(data.schema_version!==1||!Array.isArray(data.components))throw Error();components=data.components;render();}).catch(()=>status.textContent='无法读取组件目录，请刷新或从 GitHub Releases 查看。');
