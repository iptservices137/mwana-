import Link from "next/link";
const children = [{id:"demo",name:"Aïcha",age:"14 mois",next:"Penta — à vérifier"}];
export default function Enfants() { return <main className="shell"><header><b>Mwana<span>+</span></b><small>Bonjour</small></header><h1>Mes enfants</h1>{children.map(c=><Link className="child" href={`/enfants/${c.id}`} key={c.id}><i>{c.name[0]}</i><div><strong>{c.name}</strong><span>{c.age} · {c.next}</span></div><em>›</em></Link>)}<Link className="button" href="/enfants/nouveau">+ Ajouter un enfant</Link></main>; }
